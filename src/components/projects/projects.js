import styled from "styled-components";

import ProjectElement from "components/projects/project";

import contents from "utils/contents";
const { PROJECTS } = { ...contents }; // Destructuring from JSON stopped working

const ProjectsElement = styled.div`
  display: grid;
  row-gap: 8rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export default function Projects({ style }) {
  const projects = [];

  PROJECTS.forEach((project, index) =>
    projects.push(
      <ProjectElement key={index} project={project}></ProjectElement>
    )
  );

  return (
    <ProjectsElement style={style} id="projects">
      {projects}
    </ProjectsElement>
  );
}
