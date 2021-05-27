import styled from "styled-components";

import Link from "components/projects/link";

const LinksElement = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  width: 100%;
  height: var(--font-size--XXL);

  color: #404040;
`;

export default function Links({ linkList }) {
  const links = linkList.map(({ icon, url }, index) => (
    <Link key={index} icon={icon} onClick={() => window.open(url)} />
  ));

  return <LinksElement>{links}</LinksElement>;
}
