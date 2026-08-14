import { createContext, useContext, useMemo, useState } from 'react'

const LeadContext = createContext(null)

export function LeadProvider({ children }) {
  const [open, setOpen] = useState(false)
  const value = useMemo(
    () => ({
      open,
      openLead: () => setOpen(true),
      closeLead: () => setOpen(false),
    }),
    [open],
  )
  return <LeadContext.Provider value={value}>{children}</LeadContext.Provider>
}

export function useLead() {
  const ctx = useContext(LeadContext)
  if (!ctx) throw new Error('useLead must be used inside LeadProvider')
  return ctx
}
