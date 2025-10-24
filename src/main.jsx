import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'
import ContextShare from './contextAPI/ContextShare.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <GoogleOAuthProvider clientId='568269917573-27fnfpq3p0ah706ec9bo87rcavpc7pgm.apps.googleusercontent.com'>
         <ContextShare>          
          <App />
        </ContextShare>
      </GoogleOAuthProvider>
    </BrowserRouter>
  </StrictMode>
)
