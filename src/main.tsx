import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Core } from '@mescius/activereportsjs'

Core.setLicenseKey(import.meta.env.VITE_ARJS_LICENSE_KEY || '')

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
