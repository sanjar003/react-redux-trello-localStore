import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";

const CardModal = ({ cardTitle, listTitle, closeModal }) => {
  return ReactDOM.createPortal(
    <ModalOverlay>
      <ModalContent>
        <div>
          <h2>{cardTitle}</h2>
          <CloseIcon onClick={closeModal} />
        </div>
        <p>В колонке: {listTitle}</p>
      </ModalContent>
    </ModalOverlay>,
    document.getElementById("details-modal")
  );
};

const ModalOverlay = styled("div")`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled("div")`
  background-color: #323940;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  color: #b6c2cf;
  display: flex;
  flex-direction: column;
  & div {
    display: flex;
    justify-content: space-between;
  }
  & h2 {
    font-size: 24px;
    margin-bottom: 20px;
  }
  & p {
    font-size: 16px;
    color: #b6c2cf;
  }
`;

export default CardModal;
