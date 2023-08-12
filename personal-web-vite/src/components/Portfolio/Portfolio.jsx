import './portfolio.css'
import projects from "../projectData.js"
import Card from '../Card/Card.jsx'

export default function Portfolio () {

    const reactApps = projects.filter(item => item.type === 'react').map(project => <Card key={project.id} object={project}/>)
    const javascriptApps = projects.filter(item => item.type === 'javascript').map(project => <Card key={project.id} object={project}/>)
    const pythonApps = projects.filter(item => item.type === 'python').map(project => <Card key={project.id} object={project}/>)

    return (
        <div className='container'>
            <h2 className='portfolio-heading'>Selected projects</h2>
            <h2 className='type-heading'>React Apps</h2>
            <div className='portfolio'> 
                {reactApps}
            </div>

            <h2 className='type-heading'>JavaScript</h2>
            <div className='portfolio'> 
                {javascriptApps}
            </div>

            <h2 className='type-heading'>Python</h2>
            <div className='portfolio'> 
                {pythonApps}
            </div>
        </div>
    )
}