import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from '@app/App.jsx'
import '@app/index.css'
import { CookiesProvider } from "react-cookie";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CookiesProvider>
      <App />
    </CookiesProvider>
  </StrictMode>,
)
