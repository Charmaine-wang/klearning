import React from "react";
import styled from "styled-components";

const StyledHandInPoints = styled.div`
  margin: 16px;
  padding: 16px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  // justify-content: center;
  align-items: center;

  .points-hand-in > h2 {
    font-size: 20px;
    color: var(--black-font);
    margin-bottom: 12px;
  }
  .points-hand-in > p {
    line-height: 1.7em;
    font-weight: 600;
  }

  .point-list {
    color: var(--black-font);
  }
  .point-list > li {
    padding: 8px 0px;
    line-height: 1.7em;
    margin: 16px 0px;
    // font-size: 16px;
    // font-weight: bold;
  }
  .point-list {
    margin-left: 16px;
    padding: 0px;
    line-height: 1.2rem;
  }
`;

const HandInPoints = ({ header, paragraph }) => {
  const pointData = [
    "Se till att filma i ett rum utan för mycket bakgrundsljud.",
    "Filma framför en enfärgad vägg.",
    "Se till att den huvudsakliga ljuskällan är placerad bakom din kamera.",
    "Se till att placera din kamera stabilt.",
    "Spela in en testvideo först för att se vad du kan förbättra till den faktiska auditionfilmen.",
    "Sätt en tidsgräns på hur lång tid du ska ägna åt att göra ditt self-tape - på så sätt undviker du att fastna i en loop där du gör om och om igen och aldrig blir nöjd."
  ];

  return (
    <StyledHandInPoints>
      <div className="points-hand-in">
        <h2>{header}</h2>
        <p>{paragraph}</p>
        <div>
          <ul className="point-list">
            {pointData.map(data => {
              return <li className="dot-style">{data}</li>;
            })}
          </ul>
        </div>
      </div>
    </StyledHandInPoints>
  );
};

export default HandInPoints;
