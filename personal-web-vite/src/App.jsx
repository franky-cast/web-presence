import './App.css'
import linkedIn from '../public/assets/linkedin.gif'
import github from '../public/assets/github-logo.png'

import Nav from './components/Nav/Nav.jsx'
import About from './components/About.jsx'
import Portfolio from './components/Portfolio/Portfolio'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { PopupWidget, useCalendlyEventListener } from 'react-calendly'

function App() {
  const calendly_username = "francisco-j-castillo"
  return (
    <Router className='app'>
      <Nav />

      {/* <a href="https://www.linkedin.com/in/francisco-castillo-582ab0237/"><img src={linkedIn} alt="linked in anchor tag" className='linked-in-gif'/></a>
      <a href="https://github.com/franky-cast"><img src={github} alt="linked in anchor tag" className='icon github-png'/></a> */}
      
      <PopupWidget
        url={`https://calendly.com/${calendly_username}`}
        rootElement={document.getElementById("root")}
        text="Click here to schedule!"
        textColor="#ffffff"
        color="#00a2ff"
      />

      <Routes className="container">
        <Route exact path="/" element={ <About /> } />
        <Route exact path="/portfolio" element={ <Portfolio /> } />
      </Routes>

    </Router>
  )
}

export default App
