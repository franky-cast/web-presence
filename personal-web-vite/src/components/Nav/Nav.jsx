import './nav.css'
import { PopupButton, useCalendlyEventListener } from 'react-calendly'

export default function Nav () {
    const calendly_username = "francisco-j-castillo"

    return (
        <header>
            <nav className='nav'>
        
                <div className='nav-element'>
                    <a href="/"><h1 className='nav__logo'>fjct.dev</h1></a>
                </div>        

                <div className='nav-element'>
                    <PopupButton
                    url={`https://calendly.com/${calendly_username}`}
                    rootElement={document.getElementById("root")}
                    text="Let's connect!"
                    />
                </div>

            </nav>
        </header>
    )
}