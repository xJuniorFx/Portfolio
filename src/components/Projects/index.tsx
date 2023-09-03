import React, { useEffect, useState } from "react";
import Card from "../Card";
import styles from "./Projects.module.scss";
import projectData from "./ProjectsData";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

const Projects = () => {
  const [deviceType, setDeviceType] = useState("desktop");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setDeviceType("mobile");
      } else {
        setDeviceType("desktop");
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className={styles.projects} id="projects">
      <h1 className={styles.title}>
        Latest <span>Projects</span>
      </h1>

      <div className={styles.projects_container}>
        {projectData.map((project, index) => (
          <ErrorBoundary
            key={index}
            fallback={<p>Project {index + 1} has an error</p>}
          >
            <Card
              title={project.title}
              description={project.description}
              linkGit={project.linkGit}
              linkProject={project.linkProject}
              imgLink={
                deviceType === "mobile"
                  ? project.imgLinkMobile
                  : project.imgLink
              }
            />
          </ErrorBoundary>
        ))}
      </div>
    </section>
  );
};

export default Projects;
