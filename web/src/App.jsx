import { Navigate, Route, Routes } from 'react-router'
import SiteLayout from './components/SiteLayout.jsx'
import Landing from './pages/Landing.jsx'
import Solutions from './pages/Solutions.jsx'
import Work from './pages/Work.jsx'
import System from './pages/System.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import LegalPage from './pages/Legal.jsx'
import ServicePage from './pages/ServicePage.jsx'
import WorkDetail from './pages/WorkDetail.jsx'
import Guides from './pages/Guides.jsx'
import GuideDetail from './pages/GuideDetail.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<Landing />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/work" element={<Work />} />
        <Route path="/work/:slug" element={<WorkDetail />} />
        <Route path="/services/:slug" element={<ServicePage />} />
        <Route path="/guides" element={<Guides />} />
        <Route path="/guides/:slug" element={<GuideDetail />} />
        <Route path="/system" element={<System />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<LegalPage slug="privacy" />} />
        <Route path="/terms" element={<LegalPage slug="terms" />} />
        <Route path="/disclaimer" element={<LegalPage slug="disclaimer" />} />
        <Route path="/refund-policy" element={<LegalPage slug="refund" />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
