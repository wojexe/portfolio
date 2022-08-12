import styled from "styled-components";

import { useCallback, useRef, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";

import Tool from "components/aboutme/tool";

import contents from "utils/contents";
const { TOOLS } = { ...contents }; // Destructuring from JSON stopped working

const AnimatedTool = animated(Tool);

const ToolBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  height: 16rem;
`;

const CenterToolBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  user-select: none;
`;

export default function UsedTools({ style }) {
  const ToolBoxRef = useRef(null);

  useEffect(() => {
    if (ToolBoxRef.current) window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  });

  const [{ scrollPos }, api] = useSpring(() => ({
    scrollPos: 0,
  }));

  const onScroll = useCallback(
    () =>
      api.start({
        scrollPos:
          ToolBoxRef.current &&
          ToolBoxRef.current.getBoundingClientRect().bottom > 0
            ? window.innerHeight >=
              ToolBoxRef.current.getBoundingClientRect().top
              ? ToolBoxRef.current.getBoundingClientRect().top / 30 - 10
              : 20
            : -20,
      }),
    [api]
  );

  const items = [];
  TOOLS.forEach((tool, index) =>
    items.push(
      <AnimatedTool
        key={index}
        iconPath={process.env.PUBLIC_URL + tool.path}
        altText={tool.name}
        {...tool}
        style={{
          transform: scrollPos.to(
            (x) =>
              `scale(${tool.bubbleScale || 1}) translate(calc(${
                tool.position.x || "0px"
              }), calc(${x * tool.position.scrollSpeed}px + ${
                tool.position.y || "0px"
              }))`
          ),
        }}
      />
    )
  );

  return (
    <ToolBox style={style} ref={ToolBoxRef}>
      <CenterToolBox>
        <span style={{ fontSize: "var(--font-size--XXL)" }}>🧰</span>
        <span
          style={{ fontSize: "var(--font-size--L)", color: "rgba(0,0,0,0.75)" }}
        >
          tools i use the most
        </span>
      </CenterToolBox>
      {items}
    </ToolBox>
  );
}
