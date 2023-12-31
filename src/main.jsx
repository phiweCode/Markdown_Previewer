import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './scss/style.scss'

import { registerLicense } from '@syncfusion/ej2-base';

registerLicense(import.meta.env.VITE_TOOL);

console.log(import.meta.env.VITE_TOOL)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
