import styled from "styled-components";

const TechnologiesElement = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

const TechnologiesList = styled.ul`
  font-size: var(--font-size--M);
  columns: 2;
  padding: 0 4rem;
  margin: 0 -2rem 0 0;
  justify-self: center;
  width: 100%;

  li {
    list-style: inside;

    list-style-position: outside;

    &::marker {
      content: "•  ";
    }
  }
`;

export default function Technologies({ style, children }) {
  const list = [];

  children.forEach((el, idx) => list.push(<li key={idx}>{el}</li>));

  return (
    <TechnologiesElement style={style}>
      <span>Used technologies:</span>
      <TechnologiesList>{list}</TechnologiesList>
    </TechnologiesElement>
  );
}
