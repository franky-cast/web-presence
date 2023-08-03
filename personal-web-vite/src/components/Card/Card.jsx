import './card.css'

import ipAddTrackerImg from '../../../public/assets/ipAddressTracker.png'
import blackjackwebappimg from '../../../public/assets/blackjackwebapp.png'

export default function Card (props) {
    const { name, description, githubURL, deployURL } = props.object

    let projectImg
    switch (name) {
        case 'ChillSpots App':
            projectImg = null
            break

        case 'BlackJack Web App':
            projectImg = blackjackwebappimg
            break

        case 'IP Address Tracker':
            projectImg = ipAddTrackerImg
            break
    }

    return (
        <a href={deployURL} target='_blank' className="card__atag">
            <div className="card">
                <div className='card__img-container'>
                    <img src={projectImg} alt={ `User interface for project: ${name}` } className="card__img" />
                </div>
                <div className="card__info">
                    <p>{name}</p>
                    <p>{description}</p>
                    <a href={ `${githubURL}` }></a>
                </div>
            </div>
        </a>
    )
}