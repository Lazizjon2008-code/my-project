import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import Shop from './Shop.tsx'
import './main.css'
import About from './About.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Shop />
    <About />
  </StrictMode>,
)
