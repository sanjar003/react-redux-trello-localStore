import React from "react";
import styled from "styled-components";
import ReactDOM from "react-dom";

const ListsModal = ({ closeModal, handleArchiveList, handleCardAdded  }) => {
  return ReactDOM.createPortal(
    <ModalWrapper>
      <ModalContent>
        <div>
          <h4>Действия со списком</h4>
          <span onClick={closeModal}>✖</span>
        </div>
        <main>
          <p onClick={handleCardAdded}>Добавить карточку...</p>
          <p>Копировать список...</p>
          <p onClick={handleArchiveList}>Архивировать список</p>
        </main>
      </ModalContent>
    </ModalWrapper>,
    document.getElementById("lists-opitons-modal")
  );
};

export default ListsModal;

const ModalWrapper = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1000;
`;

const ModalContent = styled("div")`
  width: 20%;
  background-color: #282e33;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 16px;
  color: #84909d;
  & main {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 30px;
    & p:hover {
        background-color: #54585c;
    }
    & * {
      cursor: pointer
    }
  }
  & div {
    display: flex;
    justify-content: center;
    gap: 40px;
    margin-left: 40px;
    & span {
        cursor: pointer;
    }
  }
`;
