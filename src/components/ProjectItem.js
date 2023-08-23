import React from "react";


function ProjectItem({ name, about, technologies }) {
    const technologies = projects.technologies;
    return (
      <div className="project-item">
        <h3>{name}</h3>
        <p>{about}</p>
        <div className="technologies">
          <span>{projectTechnologies}</span>
        </div>
      </div>
    );
  }

  const projectTechnologies = technologies.map((technology) => {
    <ProjectItem key={technologies} technologies={technologies} />;
  });
export default ProjectItem;
