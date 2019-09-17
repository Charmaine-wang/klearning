import React from "react";
import styled from "styled-components";

const StyledMiscInfoCard = styled.div`
  margin: 16px;
  padding: 16px;
  background-color: white;
  border-radius: 10px;

  h2 {
    color: var(--soft-orange);
    margin-top: 16px;
    margin-bottom: 4px;

    font-weight: bold;
  }
  p {
    line-height: 1.7em;
  }
`;

const MiscInfoCard = (
  seatsAmouts,
  startDate,
  endDate,
  applyDate,
  participator,
  activity,
  language,
  moreInfo
) => {
  return (
    <StyledMiscInfoCard>
      <div>
        <h2>ANTAL PLATSER</h2>
        <p>{seatsAmouts} platser</p>
      </div>
      <div>
        <h2>KURSDATUM</h2>
        <p>Från: {startDate}</p>
        <p>Till: {endDate}</p>
      </div>
      <div>
        <h2>ANSÖK SENAST</h2>
        <p>{applyDate}</p>
      </div>
      <div>
        <h2>MEDVERKANDE</h2>
        <p>{participator}</p>
      </div>
      <div>
        <h2>AKTIVITET</h2>
        <p>{activity}</p>
      </div>
      <div>
        <h2>SPRÅK</h2>
        <p>{language}</p>
      </div>
      <div>
        <h2>ÖVRIGT</h2>
        <p>{moreInfo}</p>
      </div>
    </StyledMiscInfoCard>
  );
};

export default MiscInfoCard;
