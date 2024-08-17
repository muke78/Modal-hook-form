import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ModalHook } from './components/ModalHook.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';


createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <ModalHook />
  // </StrictMode>,
)
