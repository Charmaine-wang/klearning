import React from "react";
import styled from "styled-components";
import Button from "../Button";

const StyledAllCourses = styled.div`
  /* width: 100%; */
  padding: 0;
  display: flex;

  @media screen and (max-width: 1500px) and (min-width: 600px) {
    /* align-items: center; */
  }
`;

const AllCourses = () => {
  return (
    <StyledAllCourses>
      <Button
        btnName="Allt"
        buttonHeight="50%"
        buttonWidth="100px"
        margin="0 1% 0 0"
      />
      <Button
        btnName="Scenkonst"
        buttonHeight="50%"
        buttonWidth="140px"
        margin="0 1% 0 0"
      />
      <Button
        btnName="film"
        buttonHeight="50%"
        buttonWidth="100px"
        margin="0 1% 0 0"
      />
      <Button
        btnName="TV"
        buttonHeight="50%"
        buttonWidth="100px"
        margin="0 1% 0 0"
      />
      <Button
        btnName="Musik"
        buttonHeight="50%"
        buttonWidth="110px"
        margin="0 1% 0 0"
      />
    </StyledAllCourses>
  );
};

export default AllCourses;
