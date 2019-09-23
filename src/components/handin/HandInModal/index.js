import React from "react";
import styled from "styled-components";
// import reactDOM from "react-dom";

const StyledHandInModal = styled.div`
  position: fixed;
  top: 12px;
  padding: 12px;
  background-color: white;
  border: 1px solid grey;
`;

const HandInModal = ({ children }) => {
  return (
    <StyledHandInModal>
      <div className="modal">{children}</div>
      {document.getElementById("modal-root")}
    </StyledHandInModal>
  );
};

export default HandInModal;
