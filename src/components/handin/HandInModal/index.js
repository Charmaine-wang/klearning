import React from "react";
// import styled from "styled-components";
import { createPortal } from "react-dom";
import { ModalCard } from "./style";

// const StyledHandInModal = styled.div`

// // .modal{

// // }

// `;

const HandInModal = ({ children }) => {
  return createPortal(
    // <StyledHandInModal>
    <ModalCard>{children}</ModalCard>,
    // </StyledHandInModal>,
    document.getElementById("modal-root")
  );
};

export default HandInModal;
