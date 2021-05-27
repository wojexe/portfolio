import styled from "styled-components";
import { useRef, useEffect, useCallback } from "react";
import { useSpring } from "@react-spring/web";

import FloatingImage from "components/floatingImage";

const ImagesContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
`;

export default function Images({ images }) {
  const ImagesContainerRef = useRef(null);

  useEffect(() => {
    if (ImagesContainerRef.current) window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  });

  const [{ scrollPos }, api] = useSpring(() => ({
    scrollPos: 0,
  }));

  const onScroll = useCallback(
    () =>
      api.start({
        scrollPos:
          ImagesContainerRef.current &&
          ImagesContainerRef.current.getBoundingClientRect().bottom > 0
            ? window.innerHeight >=
              ImagesContainerRef.current.getBoundingClientRect().top
              ? ImagesContainerRef.current.getBoundingClientRect().top / 25 - 10
              : 20
            : -20,
      }),
    [api]
  );

  return (
    <ImagesContainer ref={ImagesContainerRef}>
      {images.map(
        (
          {
            src,
            altText,
            aspectRatio,
            zIndex,
            imageScale,
            borderRadius,
            brightness,
            scrollSpeed,
            position,
          },
          index
        ) => (
          <FloatingImage
            key={index}
            src={src}
            altText={altText}
            aspectRatio={aspectRatio}
            style={{
              height: "75%",
              borderRadius: borderRadius,
              transform: scrollPos.to(
                (y) =>
                  `scale(${imageScale || 1}) translate(${
                    position.x || "0px"
                  }, calc(${position.y || "0px"} + ${y * scrollSpeed}px))`
              ),
              filter: `brightness(${brightness})`,
              zIndex: zIndex,
            }}
          />
        )
      )}
    </ImagesContainer>
  );
}
