import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './scss/style.scss'
import * as boostrap from 'bootstrap'
import { registerLicense } from '@syncfusion/ej2-base';

registerLicense(process.env.TOOLS_KEY);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <App />
  </React.StrictMode>,
)
