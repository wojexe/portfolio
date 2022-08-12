import styled from "styled-components";

import { animated } from "@react-spring/web";

const Base = ({ aspectRatio, ...props }) => <animated.img {...props} />;

const FloatingElement = styled(Base)`
  position: absolute;
  aspect-ratio: ${(props) => props.aspectRatio};

  border-radius: 50px;
  box-shadow: 0 0 50px rgba(var(--body-background--inverted), 0.1);

  will-change: transform;
`;

export default function Floating({ aspectRatio, style, src }) {
  return <FloatingElement aspectRatio={aspectRatio} style={style} src={src} />;
}

/* 
@supports not (aspect-ratio: ${(props) => props.aspectRatio}) {
  &::before {
    float: left;
    padding-top: ${(props) =>
      `${
        (props.aspectRatio.split("/")[1] / props.aspectRatio.split("/")[0]) *
        100
      }%`};
    content: "";
  }

  &::after {
    display: block;
    content: "";
    clear: both;
  }
}
*/
