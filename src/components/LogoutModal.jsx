import React from "react";
import styled from "styled-components";

const LogoutModal = ({ onLogoutConfirmed, onLogoutCancelled }) => {
  return (
    <ModalContainer>
      <ModalContent>
        <h2>Вы точно хотите выйти ?</h2>
        <ButtonContainer>
          <Button onClick={onLogoutConfirmed}>да</Button>
          <Button onClick={onLogoutCancelled}>нет</Button>
        </ButtonContainer>
      </ModalContent>
    </ModalContainer>
  );
};

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;
const ModalContent = styled.div`
  width: 30%;
  height: 200px;
  margin-top: 20px;
  backdrop-filter: blur(1.4px);
  /* background-color: #9fadbc; */
  border-radius: 5px;
  padding: 20px;
  text-align: center;
  & h2 {
    margin-top: 28px;
    color: #8c8e91;
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
const Button = styled.button`
  margin: 0 30px;
  padding: 8px 16px;
  border: none;
  background-color: #007bff;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

export default LogoutModal;
