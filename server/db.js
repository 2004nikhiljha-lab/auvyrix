import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
import { User } from './models/User.js'
import { Lead } from './models/Lead.js'

export const STATUSES = ['new', 'contacted', 'qualified', 'proposal', 'won', 'lost']

export function nid(prefix) {
  return `${prefix}_${Date.now().toString(36)}${Math.random().toString(36).slice(2, 7)}`
}

export async function connectDb(uri) {
  mongoose.set('strictQuery', true)
  await mongoose.connect(uri)
  console.log('MongoDB connected')
}

export async function seedIfEmpty() {
  const users = await User.countDocuments()
  if (users === 0) {
    const email = String(process.env.ADMIN_EMAIL || '').trim().toLowerCase()
    const password = String(process.env.ADMIN_PASSWORD || '')
    if (!email || !password) {
      console.warn('No users in database. Set ADMIN_EMAIL and ADMIN_PASSWORD to create the first admin.')
    } else {
      await User.create({
        name: process.env.ADMIN_NAME || 'Auvyrix Admin',
        email,
        passwordHash: bcrypt.hashSync(password, 10),
        role: 'admin',
      })
      console.log(`Seeded admin → ${email}`)
    }
  }

  if (!/127\.0\.0\.1|localhost/.test(process.env.MONGODB_URI || '')) return

  const leads = await Lead.countDocuments()
  if (leads === 0) {
    await Lead.insertMany([
      {
        name: 'Riya Kapoor',
        email: 'riya@northpeak.studio',
        phone: '+91 98100 11220',
        want: 'Custom CRM',
        wantDetails: 'Need a sales CRM for a 12-person team with pipeline and WhatsApp follow-ups.',
        budget: '₹70k – ₹1.5L',
        status: 'qualified',
        source: 'website',
        notes: [{ id: nid('n'), text: 'Discovery call booked for Thursday.', at: new Date(), by: 'Auvyrix Admin' }],
        createdAt: new Date(Date.now() - 86400000 * 4),
      },
      {
        name: 'Arjun Mehta',
        email: 'arjun@helixlabs.io',
        phone: '+91 99880 33441',
        want: 'Mobile App',
        wantDetails: 'iOS + Android customer app with payments and push notifications.',
        budget: '₹2 Lakh+',
        status: 'new',
        source: 'website',
        notes: [],
        createdAt: new Date(Date.now() - 3600000 * 6),
      },
      {
        name: 'Sana Qureshi',
        email: 'sana@orbitretail.in',
        phone: '+91 97654 22110',
        want: 'Website',
        wantDetails: 'Premium e-commerce site with inventory sync.',
        budget: '₹30k – ₹60k',
        status: 'proposal',
        source: 'website',
        notes: [{ id: nid('n'), text: 'Sent proposal v1.', at: new Date(), by: 'Auvyrix Admin' }],
        createdAt: new Date(Date.now() - 86400000 * 9),
      },
    ])
    console.log('Seeded demo leads')
  }
}

export { bcrypt, User, Lead }
