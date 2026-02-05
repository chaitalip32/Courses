import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Hello from './Hello.jsx'
import Random from './Random.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Hello></Hello>
    <Random></Random>
    <Random/>
    <Random/>
    <Random/>
  </StrictMode>,
)
