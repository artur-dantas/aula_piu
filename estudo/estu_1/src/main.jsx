import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MYFisterComponent from './MyFisterComponent.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <MYFisterComponent/>
  </StrictMode>,
)
