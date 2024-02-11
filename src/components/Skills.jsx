import { Box } from "@mui/material";
import CustomCard from "./CustomCard";

import HTMLImage from "../images/html.png";
import CSSImage from "../images/css.png";
import JSImage from "../images/js.png";
import TSImage from "../images/ts.png";
import NodeImage from "../images/node.png";
import MongoImage from "../images/mongodb.png";
import SQLImage from "../images/sql.png";
import ReactImage from "../images/react.png";

const skillsData = [
  { img: HTMLImage, title: "HTML5" },
  { img: CSSImage, title: "CSS3" },
  { img: JSImage, title: "Javascript" },
  { img: TSImage, title: "Typescript" },
  { img: NodeImage, title: "NodeJS" },
  { img: MongoImage, title: "MongoDB" },
  { img: SQLImage, title: "MySQL" },
  { img: ReactImage, title: "ReactJS" },
];

export default function Skills({ lightTheme }) {
  return (
    <Box
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {skillsData.map((skill, index) => (
        <CustomCard
          key={index}
          img={skill.img}
          title={skill.title}
          lightTheme={lightTheme}
        />
      ))}
    </Box>
  );
}
