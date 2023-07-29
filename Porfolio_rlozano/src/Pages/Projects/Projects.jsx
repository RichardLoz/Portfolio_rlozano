import './Projects.scss'

const Projects = () => {
  return <div className='projects-wrapper'>
    <div className="project">
        <div className="project-details">
            <h2 className="project-name">Proyectos</h2>
            <span className="project-desc">Descripcion</span>

            <div className="tags">
                <h2 className="tech-stack">Tecnologias usadas:</h2>
                <div className="tags-wrapper">
                    <div className="tag">
                        <h2 className="title">React</h2>
                </div>
                <div className="tag">
                    <h2 className="title">SCSS</h2>
                </div>
            </div>

            </div>
        </div>

        <div className="project-image"></div>
    </div>
  </div>
  
}

export default Projects