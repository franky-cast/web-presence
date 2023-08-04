import './card.css'

// project images
import ipAddTrackerImg from '/assets/ipAddressTracker.png'
import blackjackwebappimg from '/assets/blackjackwebapp.png'
import logisticReg from '/assets/logistic_regression.png'
import defaultImg from '/assets/default.png'



export default function Card (props) {
    const { name, description, githubURL, completed } = props.object

    let projectImg
    switch (name) {
        case 'ChillSpots App':
            projectImg = defaultImg
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
        
        default:
            projectImg = null
            break
    }

    return (
        <a href={githubURL} target='_blank' className="card__atag">
            <div className="card">
                <div className='card__img-container'>
                    <img src={projectImg} alt={ `User interface for project: ${name}` } className="card__img" />
                </div>
                <div className="card__info">
                    <p>{name}</p>
                    <p>{description}</p>
                </div>
            </div>
        </a>
    )
}