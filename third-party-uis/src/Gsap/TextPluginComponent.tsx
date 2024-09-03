import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { useRef } from "react";

gsap.registerPlugin(TextPlugin);

function TextPluginComponent() {
  const text = useRef(null);
  const basicText = useRef(null);

  gsap.to(text.current, {
    text: "TextPlugin is here",
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "sine.in",
  });

  gsap.to(basicText.current, {
    text: "Sample Text",
    duration: 5,
    repeat: -1,
    yoyo: true,
    ease: "bounce.inOut",
    delay: 1,
  });

  return (
    <div>
      <h1 className="basicText mt-3" ref={text}>
        TextPlugin
      </h1>

      <h1 className="basicText mt-3" ref={basicText}>
        Basic Text
      </h1>
    </div>
  );
}

export default TextPluginComponent;
