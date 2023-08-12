import './App.css'
import Nav from './components/Nav/Nav'
import About from './components/About/About'
import Portfolio from './components/Portfolio/Portfolio'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <div className='app'>
      <Nav />
      <hr />        
      <About />
      <Portfolio />  
      <Footer />
    </div>
  )
}

export default App
