import styled from "styled-components";
import { useSpring, animated as a } from "@react-spring/web";

import ProfilePicture from "components/aboutme/profilePicture";
import UsedTools from "components/aboutme/usedTools";

const AboutMeElement = styled.section`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 80%;
  justify-content: center;

  grid-row-gap: 4rem;
`;

const StyledDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  grid-row: 2 / 3;
  grid-column: 1 / 2;

  font-size: var(--font-size--M);
  h1 {
    font-weight: 900;
    font-size: var(--font-size--XXL);
    margin: 0;
  }
  p {
    margin: 0;
    margin-top: 1em;
    text-align: justify;
    hyphens: auto;
  }

  @media (min-width: 425px) {
    grid-row: unset;
    grid-column: 3 / 4;
  }
`;

const AboutMeWrapper = styled.div`
  display: grid;
  grid-row: 1 / 2;
  grid-column: 1 / 2;

  grid-template-columns: 100%;

  @media (min-width: 425px) {
    grid-template-columns: 47.5% 2.5% 50%;
  }
`;

export default function AboutMe({ style }) {
  const { rotate } = useSpring({
    from: { rotate: 0 },
    config: { tension: 270 },
  });

  return (
    <AboutMeElement style={style} id="aboutme">
      <AboutMeWrapper>
        <ProfilePicture
          onClick={() => {
            rotate.start([{ from: 0 }, { to: -10 }, { to: 20 }, { to: 0 }]);
          }}
        />
        <StyledDescription>
          <h1 style={{ width: "fit-content", cursor: "default" }}>
            Hi{" "}
            <a.span
              style={{
                display: "inline-block",
                transformOrigin: "bottom right",
                userSelect: "none",
                rotate,
              }}
              onClick={() => {
                rotate.start([{ from: 0 }, { to: -10 }, { to: 20 }, { to: 0 }]);
              }}
            >
              👋
            </a.span>
          </h1>
          <p>
            My name is Wojtek. I am a twenty-one-year-old Software Engineer &
            3rd year Computer Science student living in 🇵🇱. I am committed to
            providing high-quality code with great attention to detail.
          </p>
        </StyledDescription>
      </AboutMeWrapper>
      <UsedTools style={{ gridColumn: "1 / 4" }} />
    </AboutMeElement>
  );
}
