import React, { useState } from "react";
import { TrelloIcon } from "../assets";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/auth-slice";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPossword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const handleLogin = (e) => {
    dispatch(login({ email, password }));
    e.preventDefault();
  };
  return (
    <LoginContainer>
      <Title>
        <TrelloIconsStyled /> Trello
      </Title>
      <Container>
        <StyledEntrance>Ввод в Trello</StyledEntrance>
        <Input
          type="email"
          placeholder="Укажите адрес электронной почты"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Введите пароль"
          onChange={(e) => setPossword(e.target.value)}
        />

        <Button variant="contained" color="primary" onClick={handleLogin}>
          Продолжить
        </Button>
        <hr style={{ width: "80%" }} />
        <Link href="#">Не удается войти?</Link>
        <Link href="#">Зарегистрировать аккаунт</Link>
      </Container>
      <div>
        <Link href="#">Политика конфиденциальности</Link>
        <Link href="#">Условия использования</Link>
      </div>
      {isAuthenticated && navigate("/lists")}

      
    </LoginContainer>
  );
}

export default Login;

const LoginContainer = styled.form`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f9fafa;
  gap: 2rem;
  & div {
    display: flex;
    gap: 1.5rem;
  }
`;
const Title = styled.h1`
  font-family: "Avenir Next", sans-serif;
  font-size: 3.8rem;
  color: #253859;
`;
const TrelloIconsStyled = styled(TrelloIcon)`
  width: 2.9rem;
  height: 2.9rem;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 33%;
  height: 30rem;
  box-shadow: 0px 0px 8px 0px rgba(34, 60, 80, 0.2);
  background-color: white;
  border-radius: 5px;
  gap: 1rem;
  & a {
    font-size: 18px;
  }
`;
const StyledEntrance = styled.h2`
  color: #637088;
  margin-bottom: 1rem;
`;
const Input = styled.input`
  width: 80%;
  height: 3rem;
  padding: 2px solid #dfe1e5;
  border-radius: 4px;
  font-size: 18px;
  &:focus {
    outline: 1.6px solid #4c9aff;
    border: 1.5px solid #4c9aff;
  }
`;
const Button = styled.button`
  width: 80%;
  height: 2.5rem;
  color: white;
  background-color: #59ac44;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  font-weight: 600;
`;
const Link = styled("a")`
  text-decoration: none;
  color: #2466d2;
`;
