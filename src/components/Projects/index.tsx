import Card from '../Card';
import styles from './Projects.module.scss'
import projects from './projects.json'

const Projects = () => {
    
    return(
        <section className={styles.projects} id='projects'>
            <h1 className={styles.title}>Latest <span> Projects</span></h1>

            <div className={styles.projects_container}>
                {projects.map(project => (
                    <Card key={project.title} {...project} />
                ))}
            </div>
        </section>
    )
}

export default Projects;