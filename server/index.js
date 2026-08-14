import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'
import express from 'express'
import cors from 'cors'
import jwt from 'jsonwebtoken'
import { connectDb, seedIfEmpty, STATUSES, nid, bcrypt, User, Lead } from './db.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
dotenv.config({ path: path.join(__dirname, '.env') })

const app = express()
const PORT = process.env.PORT || 4100
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/auvyrix'
const JWT_SECRET = process.env.JWT_SECRET || 'auvyrix-dev-secret-change-in-production'

app.use(cors())
app.use(express.json({ limit: '1mb' }))

function signUser(user) {
  return jwt.sign(
    { id: String(user._id), email: user.email, role: user.role, name: user.name },
    JWT_SECRET,
    { expiresIn: '7d' },
  )
}

function auth(req, res, next) {
  const header = req.headers.authorization || ''
  const token = header.startsWith('Bearer ') ? header.slice(7) : null
  if (!token) return res.status(401).json({ error: 'Sign in required' })
  try {
    req.user = jwt.verify(token, JWT_SECRET)
    next()
  } catch {
    return res.status(401).json({ error: 'Session expired' })
  }
}

const SERVICE_OPTIONS = [
  'Mobile App',
  'Website',
  'Custom CRM',
  'Custom Software',
  'E-commerce',
  'ERP / Operations',
  'AI / Automation',
  'UI/UX Design',
  'Staff Augmentation',
  'Other',
]

const BUDGET_OPTIONS = [
  '₹10k – ₹30k',
  '₹30k – ₹60k',
  '₹70k – ₹1.5L',
  '₹2 Lakh+',
  'Other',
]

app.get('/api/health', (_req, res) =>
  res.json({ ok: true, brand: 'Auvyrix Softwares', db: 'mongodb' }),
)

app.get('/api/meta', (_req, res) => {
  res.json({ services: SERVICE_OPTIONS, budgets: BUDGET_OPTIONS, statuses: STATUSES })
})

app.post('/api/leads', async (req, res) => {
  try {
    const { name, email, phone, want, wantDetails, budget } = req.body || {}
    if (!String(name || '').trim()) return res.status(400).json({ error: 'Name is required' })
    if (!String(want || '').trim()) return res.status(400).json({ error: 'Tell us what you want' })
    if (!String(budget || '').trim()) return res.status(400).json({ error: 'Budget is required' })

    const lead = await Lead.create({
      name: String(name).trim(),
      email: String(email || '').trim(),
      phone: String(phone || '').trim(),
      want: String(want).trim(),
      wantDetails: String(wantDetails || '').trim(),
      budget: String(budget).trim(),
      status: 'new',
      source: 'website',
      notes: [],
    })
    res.status(201).json({ ok: true, id: String(lead._id) })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Could not create lead' })
  }
})

app.post('/api/auth/login', async (req, res) => {
  try {
    const email = String(req.body?.email || '').trim().toLowerCase()
    const password = String(req.body?.password || '')
    const user = await User.findOne({ email })
    if (!user || !bcrypt.compareSync(password, user.passwordHash)) {
      return res.status(401).json({ error: 'Invalid email or password' })
    }
    res.json({
      token: signUser(user),
      user: { id: String(user._id), name: user.name, email: user.email, role: user.role },
    })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Login failed' })
  }
})

app.get('/api/auth/me', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id)
    if (!user) return res.status(401).json({ error: 'User not found' })
    res.json({ user: { id: String(user._id), name: user.name, email: user.email, role: user.role } })
  } catch {
    res.status(401).json({ error: 'User not found' })
  }
})

app.get('/api/crm/stats', auth, async (_req, res) => {
  try {
    const leads = await Lead.find().lean()
    const byStatus = Object.fromEntries(STATUSES.map((s) => [s, 0]))
    for (const lead of leads) {
      if (byStatus[lead.status] != null) byStatus[lead.status] += 1
    }
    const weekAgo = Date.now() - 7 * 86400000
    const newThisWeek = leads.filter((l) => new Date(l.createdAt).getTime() >= weekAgo).length
    res.json({
      total: leads.length,
      newThisWeek,
      pipeline: leads.filter((l) => !['won', 'lost'].includes(l.status)).length,
      won: byStatus.won,
      byStatus,
    })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Could not load stats' })
  }
})

app.get('/api/crm/leads', auth, async (req, res) => {
  try {
    const q = String(req.query.q || '').trim()
    const status = String(req.query.status || '').trim()
    const budget = String(req.query.budget || '').trim()
    const want = String(req.query.want || '').trim()
    const filter = {}
    if (status && STATUSES.includes(status)) filter.status = status
    if (budget) filter.budget = budget
    if (want) filter.want = want
    if (q) {
      filter.$or = [
        { name: new RegExp(q, 'i') },
        { email: new RegExp(q, 'i') },
        { phone: new RegExp(q, 'i') },
        { want: new RegExp(q, 'i') },
        { budget: new RegExp(q, 'i') },
        { wantDetails: new RegExp(q, 'i') },
      ]
    }
    const rows = await Lead.find(filter).sort({ createdAt: -1 })
    res.json({ leads: rows.map((l) => l.toJSON()) })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Could not load leads' })
  }
})

app.get('/api/crm/leads/:id', auth, async (req, res) => {
  try {
    const lead = await Lead.findById(req.params.id)
    if (!lead) return res.status(404).json({ error: 'Lead not found' })
    res.json({ lead: lead.toJSON() })
  } catch {
    res.status(404).json({ error: 'Lead not found' })
  }
})

app.patch('/api/crm/leads/:id', auth, async (req, res) => {
  try {
    const lead = await Lead.findById(req.params.id)
    if (!lead) return res.status(404).json({ error: 'Lead not found' })
    const { status, name, email, phone, want, wantDetails, budget } = req.body || {}
    if (status) {
      if (!STATUSES.includes(status)) return res.status(400).json({ error: 'Invalid status' })
      lead.status = status
    }
    if (name != null) lead.name = String(name).trim()
    if (email != null) lead.email = String(email).trim()
    if (phone != null) lead.phone = String(phone).trim()
    if (want != null) lead.want = String(want).trim()
    if (wantDetails != null) lead.wantDetails = String(wantDetails).trim()
    if (budget != null) lead.budget = String(budget).trim()
    await lead.save()
    res.json({ lead: lead.toJSON() })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Could not update lead' })
  }
})

app.post('/api/crm/leads/:id/notes', auth, async (req, res) => {
  try {
    const text = String(req.body?.text || '').trim()
    if (!text) return res.status(400).json({ error: 'Note is required' })
    const lead = await Lead.findById(req.params.id)
    if (!lead) return res.status(404).json({ error: 'Lead not found' })
    lead.notes.unshift({ id: nid('n'), text, at: new Date(), by: req.user.name })
    await lead.save()
    res.status(201).json({ lead: lead.toJSON() })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Could not add note' })
  }
})

app.delete('/api/crm/leads/:id', auth, async (req, res) => {
  try {
    const deleted = await Lead.findByIdAndDelete(req.params.id)
    if (!deleted) return res.status(404).json({ error: 'Lead not found' })
    res.json({ ok: true })
  } catch {
    res.status(404).json({ error: 'Lead not found' })
  }
})

async function start() {
  try {
    await connectDb(MONGODB_URI)
    await seedIfEmpty()
    app.listen(PORT, () => {
      console.log(`Auvyrix API (backend only) → http://localhost:${PORT}`)
    })
  } catch (err) {
    console.error('\nFailed to start API. Is MongoDB running locally?')
    console.error(`Tried URI: ${MONGODB_URI}`)
    console.error(err.message)
    process.exit(1)
  }
}

start()
