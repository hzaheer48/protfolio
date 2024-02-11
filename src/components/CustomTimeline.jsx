import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import MapsHomeWorkIcon from "@mui/icons-material/MapsHomeWork";
import SchoolIcon from "@mui/icons-material/School";
import StarIcon from "@mui/icons-material/Star";
import { Typography } from "@mui/material";
export default function CustomTimeline({ lightTheme }) {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{
          background: lightTheme ? "rgb(33, 150, 243)" : "#3F2E3E",
          color: "#fff",
        }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        date="September,2023-present"
        iconStyle={{
          background: lightTheme ? "rgb(33, 150, 243)" : "#331D2C",
          color: "#fff",
        }}
        icon={<MapsHomeWorkIcon />}
      >
        <Typography variant="h5" className="vertical-timeline-element-title">
          Software Developer
        </Typography>
        <Typography variant="h6" className="vertical-timeline-element-subtitle">
          LIMS, Rawalpindi, Pakistan
        </Typography>
        <Typography variant="body2">MERN Stack, NestJS</Typography>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="December,2021-September,2023"
        iconStyle={{
          background: lightTheme ? "rgb(33, 150, 243)" : "#331D2C",
          color: "#fff",
        }}
        icon={<MapsHomeWorkIcon />}
      >
        <Typography variant="h5" className="vertical-timeline-element-title">
          Full Stack Web Developer
        </Typography>
        <Typography variant="h6" className="vertical-timeline-element-subtitle">
          TeraBit IT, Islamabad, Pakistan
        </Typography>
        <Typography variant="body2">MERN Stack</Typography>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2019-2023"
        iconStyle={{
          background: lightTheme ? "rgb(233, 30, 99)" : "#662549",
          color: "#fff",
        }}
        icon={<SchoolIcon />}
      >
        <Typography variant="h5" className="vertical-timeline-element-title">
          Bachelor of Science in Computer Science
        </Typography>
        <Typography variant="h6" className="vertical-timeline-element-subtitle">
          Quaid-i-Azam University, Islamabad, Pakistan
        </Typography>
        <Typography variant="body2">CGPA: 3.8</Typography>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2017-2019"
        iconStyle={{
          background: lightTheme ? "rgb(233, 30, 99)" : "#662549",
          color: "#fff",
        }}
        icon={<SchoolIcon />}
      >
        <Typography variant="h5" className="vertical-timeline-element-title">
          Higher Secondary School Certificate (HSSC)
        </Typography>
        <Typography variant="h6" className="vertical-timeline-element-subtitle">
          F.G Sir Syed College, Rawalpindi, Pakistan
        </Typography>
        <Typography variant="body2">Percentage: 84.27%</Typography>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2015 - 2017"
        iconStyle={{
          background: lightTheme ? "rgb(233, 30, 99)" : "#662549",
          color: "#fff",
        }}
        icon={<SchoolIcon />}
      >
        <Typography variant="h5" className="vertical-timeline-element-title">
          Secondary School Certificate (SSC)
        </Typography>
        <Typography variant="h6" className="vertical-timeline-element-subtitle">
          Siddeeq Public School, Rawalpindi, Pakistan
        </Typography>
        <Typography variant="body2">Percentage: 90.45%</Typography>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        iconStyle={{
          background: lightTheme ? "rgb(16, 204, 82)" : "#005B41",
          color: "#fff",
        }}
        icon={<StarIcon />}
      />
    </VerticalTimeline>
  );
}
