import { useEffect } from 'react'
import { useLocation } from 'react-router'
import { SEO, SITE_NAME, SITE_URL } from '../site.js'
import { WORK } from '../data.js'
import { GUIDES } from '../guides.js'
import { SERVICE_PAGES } from '../services.js'

function upsertMeta(attr, key, content) {
  if (!content) return
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

export default function Seo() {
  const { pathname } = useLocation()
  const parts = pathname.split('/').filter(Boolean)
  let entry = SEO[pathname]
  if (!entry && parts[0] === 'services' && SERVICE_PAGES[parts[1]]) entry = SERVICE_PAGES[parts[1]].seo
  if (!entry && parts[0] === 'guides' && parts[1]) {
    const guide = GUIDES.find((g) => g.slug === parts[1])
    if (guide) entry = { title: `${guide.title} | Auvyrix Softwares`, description: guide.description }
  }
  if (!entry && parts[0] === 'work' && parts[1]) {
    const work = WORK.find((w) => w.slug === parts[1])
    if (work) entry = { title: `${work.client} | Portfolio | Auvyrix Softwares`, description: work.seoDescription }
  }
  if (!entry) entry = SEO['/']
  const url = `${SITE_URL}${pathname === '/' ? '/' : pathname}`

  useEffect(() => {
    document.title = entry.title
    upsertMeta('name', 'description', entry.description)
    upsertMeta('property', 'og:title', entry.title)
    upsertMeta('property', 'og:description', entry.description)
    upsertMeta('property', 'og:url', url)
    upsertMeta('property', 'og:type', 'website')
    upsertMeta('property', 'og:site_name', SITE_NAME)
    upsertMeta('name', 'twitter:card', 'summary_large_image')
    upsertMeta('name', 'twitter:title', entry.title)
    upsertMeta('name', 'twitter:description', entry.description)
    upsertLink('canonical', url)
  }, [entry.description, entry.title, url])

  return null
}
