import './App.css'
import Nav from './components/Nav/Nav.jsx'
import About from './components/About.jsx'

function App() {

  return (
    <div className='app'>
      <Nav />
      <div className="container">
        <About />
      </div>
    </div>
  )
}

export default App
