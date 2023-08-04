import './App.css'
import Nav from './components/Nav/Nav'
import About from './components/About/About'
import Portfolio from './components/Portfolio/Portfolio'
import Footer from './components/Footer/Footer'

function App() {
  const calendly_username = "francisco-j-castillo"

  return (
    <div className='app'>

      <Nav />

      <div className='container'>      
        <hr />
        <About />
        <Portfolio />
      </div>

      <Footer />

    </div>
  )
}

export default App
