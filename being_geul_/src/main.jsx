// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' // ★ 이 줄이 꼭 있어야 함!
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* ★ App 컴포넌트를 BrowserRouter로 감싸야 페이지 이동이 작동함 */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)