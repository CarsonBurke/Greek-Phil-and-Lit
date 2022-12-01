import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App'
import './index.css'
import reportWebVitals from './reportWebVitals'
import { animateEls, initScroller } from './scroller'
import { parallax } from './parallaxify'
import { navManager } from './navManager'

initScroller()

window.addEventListener("load", parallax)
window.addEventListener("scroll", parallax)

window.addEventListener('resize', animateEls)
window.addEventListener("load", animateEls)
window.addEventListener("scroll", animateEls)

window.addEventListener("scroll", navManager)

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement) 

root.render(
  <App />
)