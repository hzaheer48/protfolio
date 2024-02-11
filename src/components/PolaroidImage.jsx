import MyImage from "../images/my_image.jpg";
import AI from "../images/ai.png";
import ReactJs from "../images/react.png";
import NodeJs from "../images/node.png";
export default function PolaroidImage({ lightTheme }) {
  return (
    <figure
      style={{
        backgroundColor: lightTheme ? "#f1f1f1" : "#3F2E3E",
        padding: "1rem 1rem 1rem",
        boxShadow: lightTheme ? "5px 7px 4px #888" : "none",
      }}
    >
      <img src={MyImage} alt="Polaroid" width={"100%"} />
      <figcaption
        style={{ color: "#000", textAlign: "center", marginTop: "10px" }}
      >
        <img src={ReactJs} alt="Polaroid" width={"65px"} />
        <img src={NodeJs} alt="Polaroid" width={"65px"} />
        <img src={AI} alt="Polaroid" width={"65px"} />
      </figcaption>
    </figure>
  );
}
