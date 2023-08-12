import React from "react";
import styled from "styled-components";
import { useTheme } from "../context/themeContext";
import TimelineItem from "./TimelineItem";
import { code, education } from "../utils/Icons";

const Timeline = () => {
  const theme = useTheme();
  return (
    <TimelineStyled theme={theme}>
      <div className="education-timeline timeline">
        <TimelineItem desc={"React.js"} icon={education} />
        <TimelineItem desc={"Next.js"} icon={education} />
        <TimelineItem desc={"Node.js"} icon={education} />
        <TimelineItem desc={"HTML/CSS"} icon={education} />
        <TimelineItem desc={"MongoDB"} icon={education} />
        <TimelineItem desc={"Flutter"} icon={education} />
        <TimelineItem desc={"Git/Github"} icon={education} />
      </div>
      <div className="jobs-timeline timeline">
        <TimelineItem desc={"JavaScript"} icon={code} />
        <TimelineItem desc={"Kotlin"} icon={code} />
        <TimelineItem desc={"Dart"} icon={code} />
        <TimelineItem desc={"C/C++"} icon={code} />
        <TimelineItem desc={"Java"} icon={code} />
        <TimelineItem desc={"SQL"} icon={code} />
      </div>
    </TimelineStyled>
  );
};

const TimelineStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  }
  @media screen and (max-width: 500px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
  gap: 2rem;
  .timeline {
    background-color: ${(props) => props.theme.colorBg5};
    padding: 2rem;
    border-radius: 10px;
  }
  .jobs-timeline {
    h4 {
      padding: 1rem;
    }
    .icon {
      left: -10px;
    }
  }
`;

export default Timeline;
