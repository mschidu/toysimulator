import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GridProvider } from '../context/gridContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GridProvider>
      <App />
    </GridProvider>
  </React.StrictMode>,
)
