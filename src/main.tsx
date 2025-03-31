import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './main.css'
import Checkout from './Checkout.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Checkout />
  </StrictMode>,
)
