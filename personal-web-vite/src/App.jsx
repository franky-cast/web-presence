import './App.css'
import Nav from './components/Nav/Nav.jsx'
import About from './components/About.jsx'
import Portfolio from './components/Portfolio/Portfolio'
import Footer from './components/Footer/Footer'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { PopupWidget, useCalendlyEventListener } from 'react-calendly'

function App() {
  const calendly_username = "francisco-j-castillo"
  return (

    <div className='app'>
      <Nav />

      <div className='container'>
        <About />
        <Portfolio />
      </div>

      <PopupWidget
        url={`https://calendly.com/${calendly_username}`}
        rootElement={document.getElementById("root")}
        text="Click here to schedule!"
        textColor="#ffffff"
        color="#00a2ff"
      />

      <Footer />
    </div>
  )
}

export default App
