import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '../src/pages/app/index'
import './index.css'
import { db } from './database/indexedDB'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App db={db} />
  </React.StrictMode>,
)
