import { useState } from "react";
import { useSpring, animated } from "@react-spring/web";

import { QuestionMarkCircleIcon } from "@heroicons/react/solid";
import { Github } from "@icons-pack/react-simple-icons";

const usedIcons = { Github };
const knownIcons = ["Github"];

export default function Link({ icon, ...props }) {
  const [isHovering, changeHover] = useState(false);

  const styles = useSpring({
    transform: `scale(${isHovering ? 1.2 : 1})`,
    height: "100%",
    width: "auto",
    cursor: "pointer",
    willChange: "transform"
  });

  if (knownIcons.includes(icon)) {
    const CurrentIcon = animated(usedIcons[icon]);

    return (
      <CurrentIcon
        onMouseEnter={() => changeHover(true)}
        onMouseLeave={() => changeHover(false)}
        style={styles}
        {...props}
      ></CurrentIcon>
    );
  } else {
    const AnimatedQuestionMarkCircleIcon = animated(QuestionMarkCircleIcon);

    return (
      <AnimatedQuestionMarkCircleIcon
        onMouseEnter={() => changeHover(true)}
        onMouseLeave={() => changeHover(false)}
        style={styles}
        {...props}
        viewBox="2 2 16 16"
      />
    );
  }
}
