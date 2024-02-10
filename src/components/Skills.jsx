import HTMLImage from "../images/html.png";
import CSSImage from "../images/css.png";
import JSImage from "../images/js.png";
import TSImage from "../images/ts.png";
import NodeImage from "../images/node.png";
import MongoImage from "../images/mongodb.png";
import SQLImage from "../images/sql.png";
import ReactImage from "../images/react.png";
import { Box } from "@mui/material";
import CustomCard from "./CustomCard";
export default function Skills() {
  return (
    <Box
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CustomCard img={HTMLImage} title={"HTML5"} />
      <CustomCard img={CSSImage} title={"CSS3"} />
      <CustomCard img={JSImage} title={"Javascript"} />
      <CustomCard img={TSImage} title={"Typescript"} />
      <CustomCard img={NodeImage} title={"NodeJS"} />
      <CustomCard img={MongoImage} title={"MongoDB"} />
      <CustomCard img={SQLImage} title={"MySQL"} />
      <CustomCard img={ReactImage} title={"ReactJS"} />
    </Box>
  );
}
