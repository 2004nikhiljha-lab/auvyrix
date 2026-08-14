import { Navigate, Route, Routes } from 'react-router'
import Login from './pages/Login.jsx'
import CrmLayout from './pages/CrmLayout.jsx'
import Overview from './pages/Overview.jsx'
import Leads from './pages/Leads.jsx'
import { getToken } from './api.js'

function Protected({ children }) {
  if (!getToken()) return <Navigate to="/login" replace />
  return children
}

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/"
        element={
          <Protected>
            <CrmLayout />
          </Protected>
        }
      >
        <Route index element={<Overview />} />
        <Route path="leads" element={<Leads />} />
        <Route path="leads/:id" element={<Leads />} />
      </Route>
      <Route path="*" element={<Navigate to={getToken() ? '/' : '/login'} replace />} />
    </Routes>
  )
}
