import styled from "styled-components";

import picture from "assets/myself.jpeg";

const PictureElement = styled.div`
  display: flex;
  justify-self: center;
  align-self: center;
  justify-content: center;
  align-items: center;
  width: clamp(0px, 17rem, 100%);
  border-radius: 50%;
  background: rgb(var(--gray));

  aspect-ratio: 1;

  @supports not (aspect-ratio: 1) {
    &::before {
      float: left;
      padding-top: 100%;
      content: "";
    }

    &::after {
      display: block;
      content: "";
      clear: both;
    }
  }

  img {
    display: block;
    width: 90%;
    height: 90%;
    object-fit: cover;
    border-radius: 50%;
    box-shadow: 5px 5px 50px rgba(0, 0, 0, 0.25);

    user-select: none;
    pointer-events: none;
  }
`;

export default function ProfilePicture(props) {
  return (
    <PictureElement {...props}>
      <img src={picture} alt="Me" />
    </PictureElement>
  );
}
