import { useState } from "react";
import { useSpring, animated } from "@react-spring/web";

import { QuestionMarkCircleIcon } from "@heroicons/react/solid";
import { Github } from "@icons-pack/react-simple-icons";

const usedIcons = { Github };
const knownIcons = ["Github"];

export default function Link({ icon, href, ...props }) {
  const [isHovering, changeHover] = useState(false);

  const styles = useSpring({
    transform: `scale(${isHovering ? 1.2 : 1})`,
    height: "100%",
    width: "auto",
    cursor: "pointer",
    willChange: "transform",
  });

  if (knownIcons.includes(icon)) {
    const CurrentIcon = animated(usedIcons[icon]);

    return (
      <a style={{ color: "inherit" }} href={href}>
        <CurrentIcon
          onMouseEnter={() => changeHover(true)}
          onMouseLeave={() => changeHover(false)}
          style={styles}
          {...props}
        ></CurrentIcon>
      </a>
    );
  } else {
    const AnimatedQuestionMarkCircleIcon = animated(QuestionMarkCircleIcon);

    return (
      <a style={{ color: "inherit" }} href={href}>
        <AnimatedQuestionMarkCircleIcon
          onMouseEnter={() => changeHover(true)}
          onMouseLeave={() => changeHover(false)}
          style={styles}
          {...props}
          viewBox="2 2 16 16"
        />
      </a>
    );
  }
}
