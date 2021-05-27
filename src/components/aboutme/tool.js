import styled from "styled-components";

const IconContainer = styled.div`
  position: absolute;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 4.75rem;
  height: 4.75rem;

  border-radius: 50%;

  background-color: rgb(var(--gray));
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.1);

  z-index: 50;

  will-change: transform;

  &::before {
    content: "";
    display: block;
    place-self: center;
    position: absolute;
    width: 4rem;
    height: 4rem;
    z-index: 10;
    border-radius: 50%;
    background-color: #fff;
  }

  &::after {
    position: absolute;
    content: "${(props) => props.hoverText}";

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: ${({ smalltext }) =>
      smalltext ? `var(--font-size--XS)` : `var(--font-size--M)`};
    font-weight: 900;
    text-align: center;
    color: white;

    width: 4rem;
    height: 4rem;
    padding: 0.372rem;
    border-radius: 100%;
    background: rgba(0, 0, 0, 0.3);

    z-index: 60;

    opacity: 0;
    transition: opacity 150ms ease-in-out;
  }

  &:hover::after {
    opacity: 1;
    transition: opacity 150ms ease-in-out;
  }
`;

const Icon = styled.img`
  display: block;
  width: 50%;
  height: 50%;
  object-fit: contain;
  z-index: 50;

  user-select: none;
  pointer-events: none;

  ${(props) =>
    props.iconOffsetTop &&
    `
    position: absolute;
    top: 50%;
    transform: translateY(-${50 - props.iconOffsetTop}%);
  `}

  ${(props) =>
    props.iconScale &&
    `
    transform: scale(${props.iconScale})
  `}
`;

export default function Tool({
  iconPath,
  altText,
  style,
  bubbleScale,
  ...props
}) {
  return (
    <IconContainer
      bubbleScale={bubbleScale}
      style={style}
      hoverText={altText}
      {...props}
    >
      <Icon src={iconPath} alt={altText} />
    </IconContainer>
  );
}
