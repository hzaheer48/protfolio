import { TypeAnimation } from "react-type-animation";

export default function TypingAnimation() {
  return (
    <TypeAnimation
      sequence={[
        "Front-End Developer",
        1000,
        "Back-End Developer",
        1000,
        "AI/ML Engineer",
        1000,
      ]}
      wrapper="span"
      speed={10}
      style={{color:"white", fontSize: "1.6em", display: "inline-block",fontFamily:"Poppins, sans-serif" }}
      repeat={Infinity}
    />
  );
}
