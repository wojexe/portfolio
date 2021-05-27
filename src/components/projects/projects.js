import styled from "styled-components";

import { PROJECTS } from "utils/contents"

import ProjectElement from "components/projects/project"

const ProjectsElement = styled.div`
  display: grid;
  row-gap: 8rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export default function Projects({ style }) {
  const projects = [];

  PROJECTS.forEach((project, index) => projects.push(<ProjectElement key={index} project={project}></ProjectElement>))

  return (
    <ProjectsElement style={style} id="projects">
      {projects}
    </ProjectsElement>
  );
}
