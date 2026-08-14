const role = String(process.env.APP_ROLE || 'api').toLowerCase()

if (role === 'crm') {
  const { startSpa } = await import('./serve-spa.js')
  await startSpa('crm')
} else if (role === 'web') {
  const { startSpa } = await import('./serve-spa.js')
  await startSpa('web')
} else {
  await import('../server/index.js')
}
