import React from 'react';
import Card from '../Card';
import styles from './Projects.module.scss';
import projectData from './ProjectsData'

const Projects = () => {
  
  return (
    <section className={styles.projects} id="projects">
      <h1 className={styles.title}>
        Latest <span>Projects</span>
      </h1>

      <div className={styles.projects_container}>
        {projectData.map((project, index) => (
          <Card
            key={index}
            title={project.title}
            description={project.description}
            linkGit={project.linkGit}
            linkProject={project.linkProject}
            imgLink={project.imgLink}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
