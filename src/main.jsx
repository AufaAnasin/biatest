import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { DateProvider } from './context/dateContext.jsx'

import './index.css'

//context


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DateProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </DateProvider>
  </React.StrictMode>,
)
