import { useState } from "react";
import styled from "styled-components";
import { animated as a, useSpring } from "@react-spring/web";
import useScrollTo from "react-spring-scroll-to-hook";

import { CashIcon } from "@heroicons/react/outline";
import { Linkedin, Github } from "@icons-pack/react-simple-icons";

const AnimatedCashIcon = a(CashIcon);
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
  color: rgb(var(--text-gray));

  padding: 1rem 3rem;

  background: rgb(var(--gray));

  border-radius: 500px;


  span:first-of-type::after {
    content: "";
    display: block;
    position: absolute;

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 2ch;
    height: 0.5ch;

    border-radius: 100px;

    background-color: rgb(128, 128, 128);
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
    width: var(--font-size--L);
  }
`;

const iconList = [
  { name: "github", url: "https://github.com/wojexe" },
  { name: "linkedin", url: "https://www.linkedin.com/in/wojexe/" },
  { name: "cash", url: "https://ko-fi.com/wojexe" },
];

function IconComponent({ icon, style, ...props }) {
  const [isHovering, hoverStateChange] = useState(false);
  const { scale } = useSpring({ scale: isHovering ? 1.2 : 1 });

  if (icon === "github")
    return (
      <AnimatedGithub
        style={{ ...style, ...{ scale } }}
        onMouseEnter={() => hoverStateChange(true)}
        onMouseLeave={() => hoverStateChange(false)}
        {...props}
      />
    );
  if (icon === "linkedin")
    return (
      <AnimatedLinkedin
        style={{ ...style, ...{ scale } }}
        onMouseEnter={() => hoverStateChange(true)}
        onMouseLeave={() => hoverStateChange(false)}
        {...props}
      />
    );
  if (icon === "cash")
    return (
      <AnimatedCashIcon
        viewBox="2 2 20 20"
        style={{ ...style, ...{ scale } }}
        onMouseEnter={() => hoverStateChange(true)}
        onMouseLeave={() => hoverStateChange(false)}
        {...props}
      />
    );
}

export default function Footer({ style }) {
  const { scrollTo } = useScrollTo();

  return (
    <FooterElement style={style}>
      <span>
        designed and developed with ☕&❤️ by{" "}
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
            onClick={() => window.open(url)}
            style={{ cursor: "pointer" }}
          />
        ))}
      </IconsContainer>
    </FooterElement>
  );
}
