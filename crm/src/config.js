function defaultSiteUrl() {
  if (typeof window === 'undefined') return 'http://localhost:5174'
  const host = window.location.hostname
  if (host === 'localhost' || host === '127.0.0.1') return 'http://localhost:5174'
  const apex = host.replace(/^crm\./, '').replace(/^www\./, '')
  return `${window.location.protocol}//${apex}`
}

export const SITE_URL = import.meta.env.VITE_SITE_URL || defaultSiteUrl()
