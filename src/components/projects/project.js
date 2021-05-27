import styled from "styled-components";

import Images from "components/projects/images";
import Title from "components/projects/title";
import Description from "components/projects/description";
import Technologies from "components/projects/technologies";
import Links from "components/projects/links";

const ProjectElement = styled.div`
  display: grid;
  grid-template-columns: minmax(80%, 22rem);
  padding: 0 2rem;
  justify-items: center;
  row-gap: 1.5rem;
  position: relative;
`;

export default function Project({ style, project }) {
  return (
    <ProjectElement style={style}>
      <Images images={project.imageList} />
      <Title projectLink={project.projectLink}>{project.title}</Title>
      <Description>{project.description}</Description>
      <Technologies>{project.technologies}</Technologies>
      {project.linkList.length > 0 ? <Links linkList={project.linkList} /> : null}
    </ProjectElement>
  );
}
