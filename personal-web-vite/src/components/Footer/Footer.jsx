import './footer.css'
import linkedIn from '/assets/linkedin.gif'
import github from '/assets/github-logo.png'

export default function Footer () {
    return (
        <div className="footer">
            <a href="https://www.linkedin.com/in/francisco-castillo-582ab0237/" target='_blank'><img className="icon" src={linkedIn} alt="linked in icon" /></a>
            <a href="https://github.com/franky-cast" target='_blank'><img className="icon github-png" src={github} alt="github icon" /></a>
        </div>
    )
}