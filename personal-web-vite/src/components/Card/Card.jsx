import './card.css'

// project images
import ipAddTrackerImg from '/assets/ipAddressTracker.png'
import blackjackwebappimg from '/assets/blackjackwebapp.png'
import logisticReg from '/assets/logistic_regression.png'
import chillspotsimg from '/assets/chillspotsScLogin.png'
import travelJ from '/assets/travelJournal.png'
import chromeExt from '/assets/chromeExt.jpeg'
import defaultImg from '/assets/default.png'



export default function Card (props) {
    const { name, description, githubURL, completed } = props.object

    let projectImg
    switch (name) {
        case 'ChillSpots App':
            projectImg = chillspotsimg
            break

        case 'BlackJack Web App':
            projectImg = blackjackwebappimg
            break

        case 'IP Address Tracker':
            projectImg = ipAddTrackerImg
            break

        case 'Logistic Regression Model':
            projectImg = logisticReg
            break

        case 'Travel Journal':
            projectImg = travelJ
            break

        case 'Leads Chrome Extension':
            projectImg = chromeExt
            break

        default:
            projectImg = defaultImg
            break
    }

    return (
        <a href={githubURL} target='_blank' className="card__atag">
            <div className="card">
                <div className='card__img-container'>
                    <img src={projectImg} alt={ `User interface for project: ${name}` } className="card__img" style={ !completed? { opacity: 0.4 } : null }/>
                </div>
                <div className="card__info">
                    <p>{name}</p>
                    <p>{description}</p>
                </div>
            </div>
        </a>
    )
}