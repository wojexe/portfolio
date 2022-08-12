import { useState } from "react";
import styled from "styled-components";
import { animated as a, useSpring, config } from "@react-spring/web";

import { MailIcon } from "@heroicons/react/solid";
import { Linkedin, Github } from "@icons-pack/react-simple-icons";

const ContactElement = styled.div`
  display: grid;
  place-items: center;
  grid-template-columns: auto;
  grid-template-rows: auto;
  grid-gap: 2rem;
`;

const SectionTitle = styled.h1`
  font-size: var(--font-size--XXL);
  margin: 0;
`;

const ContactOptions = styled.div`
  display: grid;
  grid-template-rows: 100%;
  grid-template-columns: auto;
  gap: 2rem;
  height: calc(2.5 * var(--font-size--XXL));
`;

const StyledContactBubble = styled(a.a)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(2.5 * var(--font-size--XXL));
  height: calc(2.5 * var(--font-size--XXL));

  border-radius: 50%;

  background-color: rgb(var(--bubble-background));
  box-shadow: 0 0 25px rgba(var(--body-background--inverted), 0.05);

  z-index: 50;

  cursor: pointer;

  will-change: transform;

  grid-row: 1;

  &::before {
    content: "";
    display: block;
    place-self: center;
    position: absolute;
    width: calc(calc(2.5 * var(--font-size--XXL)) - 0.8rem);
    height: calc(calc(2.5 * var(--font-size--XXL)) - 0.8rem);
    z-index: 10;
    border-radius: 50%;
    background-color: rgb(var(--bubble-foreground));
  }
`;

const iconStyles = {
  display: "block",
  width: "40%",
  height: "40%",
  objectFit: "contain",
  zIndex: "50",
  color: "rgb(var(--text-color--softer))",

  userSelect: "none",
  pointerEvents: "none",
};

function ContactBubble({ children, ...props }) {
  const [isHovering, hoverStateChange] = useState(false);
  const { scale } = useSpring({
    to: { scale: isHovering ? 1.2 : 1 },
    config: config.gentle,
  });

  return (
    <StyledContactBubble
      onMouseEnter={() => hoverStateChange(true)}
      onMouseLeave={() => hoverStateChange(false)}
      style={{ scale }}
      {...props}
    >
      {children}
    </StyledContactBubble>
  );
}

export default function Contact({ style }) {
  return (
    <ContactElement style={style} id="contact">
      <SectionTitle>Contact</SectionTitle>
      <ContactOptions>
        <ContactBubble href="mailto:wojexe@gmail.com">
          <MailIcon style={iconStyles} />
        </ContactBubble>

        <ContactBubble href="https://github.com/wojexe">
          <Github style={iconStyles} />
        </ContactBubble>

        <ContactBubble href="https://www.linkedin.com/in/wojexe/">
          <Linkedin
            style={{ ...iconStyles, ...{ width: "30%", height: "30%" } }}
          />
        </ContactBubble>
      </ContactOptions>
    </ContactElement>
  );
}
