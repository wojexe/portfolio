import { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import styled from "styled-components";

import NavbarItem from "components/navbar/navbarItem";

import contents from "utils/contents";
const { NAVBAR } = { ...contents }; // Destructuring from JSON stopped working

const NavigationBar = styled(animated.nav)`
  z-index: 1000;

  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  width: auto;
  height: 5rem;
  padding: 1.25rem 2rem 1.25rem 1rem;
  margin-top: 1rem;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    width: 100%;
    height: 100%;
    box-shadow: 0 0 64px rgba(var(--body-background--inverted), 0.1);
    border-radius: 0 9999px 9999px 0;
    background: rgb(var(--body-background));

    opacity: var(--navbar-shadow);
  }

  @media (min-width: 425px) {
    left: 50%;

    flex-direction: row;

    height: unset;
    width: 50%;
    max-width: var(--width);
    padding: 1.25rem 4rem;

    transform: translateX(-50%);

    &::before {
      border-radius: 9999px;
    }
  }
`;

export default function Navbar() {
  const [scrollY, setScrollY] = useState(window.scrollY);

  window.addEventListener("scroll", () => {
    setScrollY(window.scrollY);
  });

  useEffect(() => setScrollY(window.scrollY), []);

  const items = [];

  NAVBAR.forEach((item, index) =>
    items.push(
      <NavbarItem key={index} link={item.link}>
        {item.name}
      </NavbarItem>
    )
  );

  const { opacity } = useSpring({ opacity: scrollY >= 50 ? 1 : 0 });

  return (
    <NavigationBar
      style={{
        "--navbar-shadow": opacity,
      }}
    >
      {items}
    </NavigationBar>
  );
}
