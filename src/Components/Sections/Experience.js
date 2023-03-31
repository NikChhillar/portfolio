import React from "react";
import styled from "styled-components";
import { SectionLayout } from "../../styles/Layout";
import { useTheme } from "../../context/themeContext";
import Title from "../Title";
import Timeline from "../Timeline";

const Experience = () => {
  const theme = useTheme();
  return (
    <ExperienceStyled id="experience" theme={theme}>
      <Title
        name={"Experince"}
        desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
      />
      <div className="timeline-con">
        <Timeline />
      </div>
    </ExperienceStyled>
  );
};

const ExperienceStyled = styled(SectionLayout)`
  .timeline-con {
    margin-top: 3.5rem;
  }
`;

export default Experience;
