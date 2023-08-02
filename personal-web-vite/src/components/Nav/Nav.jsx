import './nav.css'

export default function Nav () {
    return (
        <header>
            <nav className='nav'>
            
                <div className='nav-element'>
                    <h1 className='nav__logo'>fjct.dev</h1>
                </div>

                <div className='nav-element'>
                    <div className='nav__tags'>
                        <a href="/">About</a>
                        <a href="/portfolio">Portfolio</a>
                        <a href="/contact">Contact</a>
                    </div>
                </div>
            
            </nav>
        </header>
    )
}