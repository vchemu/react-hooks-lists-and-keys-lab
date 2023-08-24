import React from "react";
import ProjectList from "./ProjectList";


function ProjectItem({ name, about, technologies }) {
  const projectTechnologies = technologies.map((technology) =>(
    <span key={technology}>{technology}</span>
  ));
    return (
      <div className="project-item">
        <h3>{name}</h3>
        <p>{about}</p>
        <div className="technologies">{projectTechnologies}</div>
      </div>
    );
  }

  
export default ProjectItem;
