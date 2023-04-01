import React from "react";
import styled from "styled-components";
import { useTheme } from "../context/themeContext";

const TimelineItem = ({ desc, icon }) => {
  const theme = useTheme();
  return (
    <TimelineItemStyled theme={theme}>
      <div className="timeline-info">
        <p>{desc}</p>
      </div>
      <div className="icon">{icon}</div>
    </TimelineItemStyled>
  );
};

const TimelineItemStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 4rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  position: relative;
  border-left: 1px solid ${(props) => props.theme.colorPrimary};
  .icon {
    position: absolute;
    left: -9px;
    top: 13px;
    i {
      color: ${(props) => props.theme.colorPrimary};
    }
  }
`;

export default TimelineItem;
