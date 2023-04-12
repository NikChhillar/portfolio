import React from "react";
import styled from "styled-components";
import beni from "../../img/beni.png";
import about from "../../img/about.jpg";
import { SectionLayout } from "../../styles/Layout";
import { useTheme } from "../../context/themeContext";
import { brief, download, flame, medal, mug } from "../../utils/Icons";
import Title from "../Title";
import Progressbar from "../Progressbar";
import Stats from "../Stats";
import Button from "../Button";
import CV from '../../cv/cv.pdf'

const About = () => {
  const theme = useTheme();
  return (
    <AboutStyled id="about" theme={theme}>
      <div className="about-info">
        <div className="about-image">
          <img src={about} alt="" />
        </div>
        <div className="about-content">
          <Title name={"About Me"} />
          <p>
            Hi there! My name is Nikhil and I'm a 3rd year CSE Student,
            curretnly learning full-stack development. I have been working in
            this field since 2022. I'm skilled in a wide range of programming
            languages and technologies, including MERN stack,react.js, node.js
            and Flutter development . I can develop responsive, user-friendly
            web applications that are optimized for speed and performance. I'm
            always looking for ways to improve my skills.
          </p>
          <div className="progress-bars">
            <Progressbar
              bg={theme.colorPrimary}
              service={"Full-stack Development"}
              progress={"90"}
            />
            <Progressbar
              bg={theme.colorGreen}
              service="Backend Development"
              progress="85"
            />
            <Progressbar
              bg={theme.colorPurple}
              service="Flutter Development"
              progress="80"
            />
          </div>
          <div className="btn-con">
            <Button
              name={<a href={CV} download>Download CV</a>}
              blob="blob"
              icon={download}
              bg={theme.colorPrimary}
              color={theme.colorWhite}
              bFw={"600"}
              onClick="onClick"
              bRad={"30px"}
              bPad={theme.bPad1}
            />
          </div>
        </div>
      </div>
      <div className="stats-container">
        <Stats icon={flame} number="20+" desc="All completed projects" />
        <Stats icon={mug} number="200+" desc="Cup of coffee" />
        <Stats icon={brief} number="2+" desc="Years of learning" />
        <Stats icon={medal} number="3" desc="Certificates" />
      </div>
      <img src={beni} className="shape1" alt="" />
      <img src={beni} className="shape2" alt="" />
    </AboutStyled>
  );
};

const AboutStyled = styled(SectionLayout)`
  background-color: ${(props) => props.theme.aboutBg};
  position: relative;
  overflow: hidden;
  .stats-container {
    padding-top: 2rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1rem;
  }
  .about-info {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    position: relative;
    z-index: 5;
    @media screen and (max-width: 1250px) {
      grid-template-columns: repeat(1, 1fr);
    }
    .about-image {
      padding: 1.5rem;
      background: ${(props) => props.theme.colorBg3};
      border-radius: 5px;
      width: 80%;
      @media screen and (max-width: 1150px) {
        width: 100%;
      }
      img {
        width: 100%;
      }
    }
    .about-content {
      .progress-bars {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        margin-top: 1.5rem;
      }
      .btn-con {
        margin-top: 2rem;
        @media screen and (max-width: 1150px) {
          margin-bottom: 2rem;
        }
      }
    }
  }
  .shape1 {
    position: absolute;
    left: -7px;
    top: -7px;
    z-index: 1;
    opacity: 0.05;
    pointer-events: none;
  }
  .shape2 {
    position: absolute;
    right: -7px;
    top: -7px;
    z-index: 1;
    opacity: 0.05;
    pointer-events: none;
  }
`;

export default About;
