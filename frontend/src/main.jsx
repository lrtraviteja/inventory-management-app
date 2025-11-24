import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import axios from 'axios'

// During development, prefer the backend at localhost:5000.
// If you use Vite proxy (vite.config.js) this is not necessary,
// but setting a baseURL provides a fallback when the proxy isn't active.
axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:5000' : 'https://inventory-management-app-y07x.onrender.com' ;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
