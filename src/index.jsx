import { createRoot } from 'react-dom/client'
import Info from './components/Info'
import About from './components/About'
import Interests from './components/Interests'
import Footer from './components/Footer'
import React from 'react'
import './index.css'

const root = createRoot(document.getElementById('root'))

// eslint-disable-next-line react-refresh/only-export-components
function App() {
    return (
        <div className='bg-secondary text-white w-80 my-20 m-auto rounded-lg'>
          <Info />
          <About />
          <Interests />
          <Footer />
        </div>
    )
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)