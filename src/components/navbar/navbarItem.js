import React, { useState } from "react";
import styled from "styled-components";
import { animated, useSpring, config } from "@react-spring/web";
import useScrollTo from "react-spring-scroll-to-hook";

const Item = styled(animated.a)`
  color: rgb(var(--text-color--primary));
  text-decoration: none;
  cursor: pointer;
`;

export default function NavbarItem({ link, children }) {
  const [hoverState, setHoverState] = useState(false);

  const styles = useSpring({
    transform: `scale(${hoverState ? 1.1 : 1})`,
    config: config.gentle,
  });

  const { scrollTo } = useScrollTo();

  return (
    <Item
      onClick={() => scrollTo(link, -120)}
      onMouseEnter={() => setHoverState(true)}
      onMouseLeave={() => setHoverState(false)}
      style={styles}
    >
      {children}
    </Item>
  );
}
