import './App.css'
import Nav from './components/Nav/Nav'
import About from './components/About/About'
import Portfolio from './components/Portfolio/Portfolio'
import Footer from './components/Footer/Footer'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  const calendly_username = "francisco-j-castillo"

  return (
    <div className='app'>
        <Router>
            <Nav />
            <hr />        
            <Routes>
                <Route path='/' exact element={ <About /> } />
                <Route path='/work' exact element={ <Portfolio /> } />
            </Routes>
            <Footer />
        </Router>
    </div>
  )
}

export default App
