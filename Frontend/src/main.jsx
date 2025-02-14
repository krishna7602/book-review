import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import UserContext from './context/UserContext.jsx'
import AdminDataContext from './context/AdminContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AdminDataContext>
    <UserContext>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </UserContext>
    </AdminDataContext>
  </StrictMode>,
)
