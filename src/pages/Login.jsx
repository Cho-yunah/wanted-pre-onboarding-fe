import React, { useState } from 'react';
import styled from 'styled-components';

const Login = () => {
  const [valueId, setValueId] = useState('');
  const [valuePw, setValuePw] = useState('');
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    if (event.target.id === 'id') {
      setValueId(event.target.value);
    }
    setValuePw(event.target.value);
  };
  const handleLogin = () => {
    const error = validationMessage({ email, password });
    setErrors(errors);
    if (!Object.keys(errors).length) {
      doSignUp({ email, password });
    }
  };

  const validationMessage = (values) => {
    const errors = {};
  };

  return (
    <Container>
      <Section>
        <Header>Login</Header>
        <Input
          id="id"
          value={valueId}
          onChange={handleChange}
          placeholder="이메일을 입력하세요"
        />
        <Input
          id="pw"
          value={valuePw}
          onChange={handleChange}
          placeholder="비밀번호를 입력하세요"
        />
        <SubmitButton onClick={handleLogin}>Login</SubmitButton>
      </Section>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  min-height: 100vh;
  background-color: aliceblue;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 350px;
  height: 400px;
  padding-top: 20px;
  background-color: #e2e1e192;
  border-radius: 10px;
  box-shadow: 5px 5px 5px #bfbebe;
`;
const Header = styled.h1`
  font-size: 2rem;
  color: #4f8196;
  margin: 15px 0px;
`;

const Input = styled.input`
  padding: 5px 10px;
  margin: 10px;
  width: 210px;
  height: 40px;
  border-radius: 10px;
`;

const SubmitButton = styled.button`
  width: 210px;
  height: 40px;
  padding: 5px 10px;
  margin: 25px 10px;
  border-radius: 10px;
  background-color: #6bd4cd;
  color: #fff;
  font-size: 1rem;
`;
