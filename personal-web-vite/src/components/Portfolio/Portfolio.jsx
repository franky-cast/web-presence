import './portfolio.css'
import projects from "../projectData.js"
import Card from '../Card/Card.jsx'

export default function Portfolio () {
    const data = projects.map(project => <Card key={project.id} object={project} />)

    return (
        <div>
            <h2 className='portfolio-heading'>Selected Projects</h2>
            <div className='portfolio'>
                {data}
            </div>
        </div>
    )
}