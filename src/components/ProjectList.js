import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  const projectItems = projects.map((project) => { 
    <li key={projects.id}> name={projects.name} technologies={projects.technologies} </li>
    });

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        <ol>{projectItems}</ol>
      </div>
    </div>
  );
}

export default ProjectList;
