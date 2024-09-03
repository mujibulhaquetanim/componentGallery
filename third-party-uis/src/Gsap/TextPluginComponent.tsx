import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { useRef } from "react";

gsap.registerPlugin(TextPlugin);

function TextPluginComponent() {
  const text = useRef(null);
  gsap.to(text.current, {
    text: "TextPlugin is here",
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "sine.in",
  });
  return (
    <div>
      <h1 className="basicText mt-3" ref={text}>
        TextPlugin
      </h1>
    </div>
  );
}

export default TextPluginComponent;
