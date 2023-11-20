import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import './index.css'
import './scss/style.scss'

import { registerLicense } from '@syncfusion/ej2-base';

registerLicense(import.meta.env.TOOLS_KEY);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <App />
  </React.StrictMode>,
)