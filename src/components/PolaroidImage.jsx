import MyImage from "../images/my_image.jpg";
import AI from "../images/ai.png";
import ReactJs from "../images/react.png";
import NodeJs from "../images/node.png";
export default function PolaroidImage() {
  return (
    <figure
      style={{
        backgroundColor: "#f1f1f1",
        padding: "1rem 1rem 1rem",
        boxShadow: "5px 7px 4px #888",
      }}
    >
      <img src={MyImage} alt="Polaroid Picture" width={"100%"} />
      <figcaption
        style={{ color: "#000", textAlign: "center", marginTop: "10px" }}
      >
        <img src={ReactJs} alt="Polaroid Picture" width={"65px"} />
        <img src={NodeJs} alt="Polaroid Picture" width={"65px"} />
        <img src={AI} alt="Polaroid Picture" width={"65px"} />
      </figcaption>
    </figure>
  );
}
