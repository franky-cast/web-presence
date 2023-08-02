import './App.css'
import linkedIn from '../public/assets/linkedin.gif'
import github from '../public/assets/github-logo.png'

import Nav from './components/Nav/Nav.jsx'
import About from './components/About.jsx'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <Router className='app'>
      <Nav />

      <a href="https://www.linkedin.com/in/francisco-castillo-582ab0237/"><img src={linkedIn} alt="linked in anchor tag" className='linked-in-gif'/></a>
      <a href="https://github.com/franky-cast"><img src={github} alt="linked in anchor tag" className='icon github-png'/></a>

      <Routes className="container">
        <Route exact path="/" render={ () => <About /> } />
        <Route exact path="/portfolio" render={ () => <Portfolio /> } />
        <Route exact path="/contact" render={ () => <Contact /> } />
      </Routes>

    </Router>
  )
}

export default App
