import styled from "styled-components";

import { animated, useSpring } from "@react-spring/web";
import useScrollTo from 'react-spring-scroll-to-hook'

import FloatingImage from "components/floatingImage";

import { ChevronDownIcon } from "@heroicons/react/solid";
const AnimatedChevronDownIcon = animated(ChevronDownIcon);

const HeroElement = styled.div`
  height: 100vh;
  width: 100%;

  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  justify-content: center;
  align-items: center;
`;

const Nickname = styled(animated.span)`
  position: absolute;
  font-size: 3rem;
  font-weight: 900;
  letter-spacing: -2.5px;
  text-shadow: 0 0 20px rgba(0, 0, 0, 0.25);

  ${({ bigger }) =>
    bigger &&
    `
    font-size: 4.5rem;
    color: rgba(0, 0, 0, 0.15);
    text-shadow: 0 0 20px rgba(0, 0, 0, 0.25);
  `}

  user-select: none;
  &::before {
    transform: translate3d(attr(xy));
  }
`;

export default function Hero({ style }) {
  const calc = (x, y) => [
    x - window.innerWidth / 2,
    y - window.innerHeight / 2,
  ];
  const text_main = (x, y) => `translate3d(${x / 20}px,${y / 20}px,0)`;
  const text_shadow = (x, y) =>
    `translate3d(${x / 8 - 30}px,${y / 8 + 40}px,0)`;
  const mizore = (x, y) => `translate3d(${x / 7 + 250}px,${y / 7 - 150}px,0)`;
  const definario = (x, y) => `translate3d(${x / 7 - 250}px,${y / 5}px,0)`;
  const portfolio = (x, y) =>
    `translate3d(${x / 10 + 300}px,${y / 6 + 170}px,0)`;
  const arrow = (x, y) => `translate3d(${x / 50}px,${y / 50}px,0)`;

  const [props, api] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 640 },
  }));
  
  const { scrollTo } = useScrollTo();

  return (
    <HeroElement
      style={style}
      onMouseMove={({ clientX: x, clientY: y }) => api.start({ xy: calc(x, y) })}
    >
      <Nickname
        style={{
          transform: props.xy.to(text_main),
          zIndex: "20",
          mixBlendMode: "difference",
          color: "white",
        }}
      >
        wojexe
      </Nickname>
      <Nickname
        bigger="true"
        style={{ transform: props.xy.to(text_shadow), zIndex: "5" }}
      >
        wojexe
      </Nickname>

      <FloatingImage
        aspectRatio="16/9"
        src="img/project_images/mizore_1.png"
        style={{
          zIndex: "10",
          width: "30em",
          transform: props.xy.to(mizore),
          filter: "brightness(0.9)",
        }}
      />
      <FloatingImage
        aspectRatio="186/409"
        src="img/project_images/definario_1.png"
        style={{
          zIndex: "8",
          width: "15em",
          borderRadius: "30px",
          transform: props.xy.to(definario),
          filter: "brightness(0.95)",
        }}
      />
      <FloatingImage
        aspectRatio="16/9"
        src="img/project_images/portfolio_3.png"
        style={{
          zIndex: "15",
          width: "30em",
          transform: props.xy.to(portfolio),
          filter: "brightness(0.98)",
        }}
      />
      <AnimatedChevronDownIcon
        style={{
          width: "2em",
          position: "absolute",
          transform: props.xy.to(arrow),
          bottom: "0",
          cursor: "pointer",
        }}
        onClick={() => scrollTo("#aboutme", -120)}
      />
    </HeroElement>
  );
}
