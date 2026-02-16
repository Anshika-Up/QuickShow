import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom"
import { ClerkProvider } from '@clerk/clerk-react'
<<<<<<< HEAD
import { AppProvider } from './context/AppContext.jsx'
=======
>>>>>>> 15deb85855f6bd6d6b0556a28c71976c2e380cf5


// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}

createRoot(document.getElementById('root')).render(
  <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
  <BrowserRouter>
<<<<<<< HEAD
  <AppProvider>
    <App />
  </AppProvider>
=======
    <App />
>>>>>>> 15deb85855f6bd6d6b0556a28c71976c2e380cf5
  </BrowserRouter>
  </ClerkProvider>,
)
