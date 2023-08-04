import './portfolio.css'
import projects from "../projectData.js"
import Card from '../Card/Card.jsx'

export default function Portfolio () {

    const fullstackprojects = projects.filter(project => project.type === "fs")
        .map(project => <Card key={project.id} object={project}/>)

    const frontendprojects = projects.filter(project => project.type === "f")
        .map(project => <Card key={project.id} object={project}/>)

    const backendprojects = projects.filter(project => project.type === "b")
        .map(project => <Card key={project.id} object={project}/>)

    return (
        <div>
            <h2 className='portfolio-heading'>Selected projects</h2>

            <div>
                { fullstackprojects.length > 0 && <h3>Full stack projects</h3> }
                <div className='portfolio'>
                    {fullstackprojects}
                </div>
            </div>

            <div>
                { frontendprojects.length > 0 && <h3>Front end projects</h3> }
                <div className='portfolio'>
                    {frontendprojects}
                </div>
            </div>

            <div>
                { backendprojects.length > 0 && <h3>Back end projects</h3> }
                <div className='portfolio'>
                    {backendprojects}
                </div>
            </div>
        </div>
    )
}