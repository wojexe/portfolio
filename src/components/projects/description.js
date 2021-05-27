import styled from "styled-components";

const DescriptionElement =  styled.div`
  font-size: var(--font-size--M);
  max-width: 100%;
  text-align: justify;
  hyphens: auto;
`;

export default function Description({ style, children }) {
  return (
    <DescriptionElement style={style}>
      {children}
    </DescriptionElement>
  );
}
