import './nav.css'
import linkedIn from '/assets/linkedin.gif'
import github from '/assets/github-logo.png'

export default function Nav () {
    return (
        <header>
            <nav className='nav'>

                <div className='nav-element mobile'>
                    <a href="https://www.linkedin.com/in/francisco-castillo-582ab0237/" className='nav__tag'><img src={linkedIn} alt="linked in anchor tag" className='linked-in-gif'/></a>
                </div>
            
                <div className='nav-element'>
                    <a href="/portfolio"><h1 className='nav__logo'>fjct.dev</h1></a>
                </div>

                <div className='nav-element mobile'>
                    <a href="https://github.com/franky-cast" className='nav__tag'><img src={github} alt="linked in anchor tag" className='icon github-png'/></a>
                </div>
            
            </nav>
        </header>
    )
}