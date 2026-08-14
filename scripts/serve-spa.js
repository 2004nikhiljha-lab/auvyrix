import { existsSync } from 'fs'
import { spawnSync } from 'child_process'
import path from 'path'
import { fileURLToPath } from 'url'
import express from 'express'

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..')

export async function startSpa(appName) {
  const workspace = appName === 'crm' ? 'auvyrix-crm' : 'auvyrix-web'
  const dist = path.join(root, appName, 'dist')
  if (!existsSync(path.join(dist, 'index.html'))) {
    console.log(`Building ${appName}…`)
    const result = spawnSync('npm', ['run', 'build', '-w', workspace], {
      cwd: root,
      stdio: 'inherit',
      shell: true,
    })
    if (result.status !== 0) process.exit(result.status ?? 1)
  }

  const PORT = process.env.PORT || 4173
  const app = express()
  app.use(express.static(dist))
  app.use((req, res) => {
    res.sendFile(path.join(dist, 'index.html'))
  })
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`${appName} frontend → port ${PORT}`)
  })
}
