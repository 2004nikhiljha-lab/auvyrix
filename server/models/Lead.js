import mongoose from 'mongoose'

const noteSchema = new mongoose.Schema(
  {
    id: { type: String, required: true },
    text: { type: String, required: true },
    at: { type: Date, default: Date.now },
    by: { type: String, default: '' },
  },
  { _id: false },
)

const leadSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, default: '', trim: true },
    phone: { type: String, default: '', trim: true },
    want: { type: String, required: true, trim: true },
    wantDetails: { type: String, default: '', trim: true },
    budget: { type: String, required: true, trim: true },
    status: {
      type: String,
      enum: ['new', 'contacted', 'qualified', 'proposal', 'won', 'lost'],
      default: 'new',
    },
    source: { type: String, default: 'website' },
    notes: { type: [noteSchema], default: [] },
  },
  { timestamps: true },
)

leadSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform(_doc, ret) {
    ret.id = String(ret._id)
    delete ret._id
    if (ret.createdAt) ret.createdAt = new Date(ret.createdAt).toISOString()
    if (ret.updatedAt) ret.updatedAt = new Date(ret.updatedAt).toISOString()
    if (Array.isArray(ret.notes)) {
      ret.notes = ret.notes.map((n) => ({
        ...n,
        at: n.at ? new Date(n.at).toISOString() : n.at,
      }))
    }
    return ret
  },
})

export const Lead = mongoose.models.Lead || mongoose.model('Lead', leadSchema)
