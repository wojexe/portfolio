import { useState } from "react";
import styled from "styled-components";
import { animated as a, config, useSpring } from "@react-spring/web";
import useScrollTo from "react-spring-scroll-to-hook";

import { Twitter, Linkedin, Github } from "@icons-pack/react-simple-icons";

const AnimatedTwitter = a(Twitter);
const AnimatedLinkedin = a(Linkedin);
const AnimatedGithub = a(Github);

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

  span[withseparator]::after {
    content: "";
    display: block;
    position: relative;

    top: 1rem;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 2ch;
    height: 0.5ch;

    border-radius: 100px;

    background-color: rgba(var(--body-background--inverted), 0.25);
  }

  @media (max-width: 425px) {
    width: 50%;
  }
`;

const IconsContainer = styled(a.div)`
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-template-rows: 100%;

  gap: 1rem;

  & > * {
    height: var(--font-size--L);
    // width: var(--font-size--L);
  }
`;

const iconList = [
  { name: "github", url: "https://github.com/wojexe" },
  { name: "linkedin", url: "https://www.linkedin.com/in/wojexe/" },
  { name: "cash", url: "https://twitter.com/wojexe" },
];

function IconComponent({ icon, style, href, ...props }) {
  const [isHovering, hoverStateChange] = useState(false);
  const { scale } = useSpring({
    scale: isHovering ? 1.2 : 1,
    config: config.gentle,
  });

  if (icon === "github")
    return (
      <a style={{ color: "inherit" }} href={href}>
        <AnimatedGithub
          style={{ ...style, ...{ scale } }}
          onMouseEnter={() => hoverStateChange(true)}
          onMouseLeave={() => hoverStateChange(false)}
          {...props}
        />
      </a>
    );
  if (icon === "linkedin")
    return (
      <a style={{ color: "inherit" }} href={href}>
        <AnimatedLinkedin
          style={{ ...style, ...{ scale } }}
          onMouseEnter={() => hoverStateChange(true)}
          onMouseLeave={() => hoverStateChange(false)}
          {...props}
        />
      </a>
    );
  if (icon === "cash")
    return (
      <a style={{ color: "inherit" }} href={href}>
        <AnimatedTwitter
          viewBox="2 2 20 20"
          style={{ ...style, ...{ scale } }}
          onMouseEnter={() => hoverStateChange(true)}
          onMouseLeave={() => hoverStateChange(false)}
          {...props}
        />
      </a>
    );
}

export default function Footer({ style }) {
  const { scrollTo } = useScrollTo();

  return (
    <FooterElement style={style}>
      <span withseparator="">
        designed and developed with ☕️&❤️ by{" "}
        <span
          style={{ fontStyle: "italic", cursor: "pointer" }}
          onClick={() => scrollTo("#aboutme", -120)}
        >
          me
        </span>
      </span>
      <IconsContainer>
        {iconList.map(({ name, url }, index) => (
          <IconComponent
            key={index}
            icon={name}
            href={url}
            style={{ cursor: "pointer", height: "100%" }}
          />
        ))}
      </IconsContainer>
    </FooterElement>
  );
}
