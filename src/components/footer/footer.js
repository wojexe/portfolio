import styled from "styled-components";
import useScrollTo from "react-spring-scroll-to-hook";

const FooterElement = styled.div`
  position: relative;

  justify-self: center;

  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto auto;
  gap: 2rem;
  place-items: center;
  text-align: center;

  font-size: var(--font-size--M);
  color: rgb(var(--text-color--softer));

  padding: 1rem 3rem;

  background: rgb(var(--bubble-background));

  border-radius: 500px;

  @media (max-width: 425px) {
    width: 50%;
  }
`;

export default function Footer({ style }) {
  const { scrollTo } = useScrollTo();

  return (
    <FooterElement style={style}>
      <span>
        designed and developed with ☕️&❤️ by{" "}
        <span
          style={{ fontStyle: "italic", cursor: "pointer" }}
          onClick={() => scrollTo("#aboutme", -120)}
        >
          me
        </span>
      </span>
    </FooterElement>
  );
}
