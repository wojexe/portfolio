import { useState } from "react";
import styled from "styled-components";
import { useSpring, animated } from "@react-spring/web";

import { ArrowCircleRightIcon } from "@heroicons/react/solid";

const AnimatedArrowCircleRightIcon = animated(ArrowCircleRightIcon);

const TitleElement = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-template-rows: 100%;
  justify-content: center;
  align-items: center;
  column-gap: 0.5ch;
`;

const StyledTitle = styled.h1`
  height: var(--font-size--XXL);
  grid-column: 2 / 3;
  margin: 0;
`;

const StyledLink = styled.a`
  height: var(--font-size--L);
  width: min-content;
  color: rgba(0, 0, 0, 0.25);
`;

export default function Title({ style, children, projectLink }) {
  const [isHovering, hoverChange] = useState(false);

  const arrowStyles = useSpring({
    transform: `scale(${isHovering ? 1.25 : 1})`,
    height: "100%",
  });

  return (
    <TitleElement style={style}>
      <StyledTitle>{children}</StyledTitle>
      {projectLink ? (
        <StyledLink href={projectLink}>
          <AnimatedArrowCircleRightIcon
            onMouseEnter={() => hoverChange(true)}
            onMouseLeave={() => hoverChange(false)}
            style={arrowStyles}
          />
        </StyledLink>
      ) : (
        ""
      )}
    </TitleElement>
  );
}
