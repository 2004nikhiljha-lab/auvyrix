import { Navigate, Route, Routes } from 'react-router'
import SiteLayout from './components/SiteLayout.jsx'
import Landing from './pages/Landing.jsx'
import Solutions from './pages/Solutions.jsx'
import Work from './pages/Work.jsx'
import System from './pages/System.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<Landing />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/work" element={<Work />} />
        <Route path="/system" element={<System />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
