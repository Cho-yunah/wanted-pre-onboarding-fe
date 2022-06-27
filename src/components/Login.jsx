import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useLogin from '../hooks/useLogin';
import Logo from '../assets/Instagram_logo.svg.png';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useLogin();

  const [valueId, setValueId] = useState('');
  const [valuePw, setValuePw] = useState('');
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    console.log(event.target.id);
    if (event.target.id === 'id') {
      setValueId(event.target.value);
    } else setValuePw(event.target.value);
  };

  const handleLogin = (event) => {
    const errors = validationMessage({ email, password });
    setErrors(errors);
    console.log(event);
    console.log(Object.keys(errors).length);
    if (!Object.keys(errors).length) {
      // login 로직 -> localstorage 저장
      login().then(() => {
        localStorage.setItem('email', JSON.stringify(valueId));
        localStorage.setItem('password', JSON.stringify(valuePw));
        navigate('/');
      });
    }
  };

  const validateEmail = (email) => {
    let checkingEmail =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    return checkingEmail.test(email.toLowerCase());
  };

  const validationMessage = (values) => {
    const errors = {};
    if (!values.email) errors.email = '이메일을 입력해주세요';
    if (!values.password) errors.password = '비밀번호를 입력해주세요';
    else if (!validateEmail(values.email))
      console.log(validateEmail(values.email));
    errors.email = '유효한 이메일 또는 비밀번호가 아닙니다';
    return errors;
  };

  return (
    <Container>
      <Section>
        <LogoImage src={Logo} />
        <Input
          id="id"
          value={valueId}
          onChange={handleChange}
          placeholder="이메일을 입력하세요"
        />
        {errors.email && <p>{errors.email}</p>}

        <Input
          id="pw"
          value={valuePw}
          onChange={handleChange}
          placeholder="비밀번호"
        />
        {errors.password && <p>{errors.password}</p>}
        <SubmitButton
          onClick={handleLogin}
          disabled={valueId === '' || valuePw === '' ? true : false}
          buttonColor={valueId === '' || valuePw === '' ? '#a6beeb' : '#3b6cc9'}
        >
          로그인
        </SubmitButton>
      </Section>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  min-height: 100vh;
  background-color: #f1f1f1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 330px;
  padding: 20px 40px 50px;
  border: 1px solid #c8c6c692;
  background-color: #fff;
`;

const LogoImage = styled.img`
  width: 160px;
  margin: 15px 0px 40px;
`;

const Input = styled.input`
  width: 100%;
  height: 33px;
  padding: 5px 10px;
  margin: 3px;
  border: 1px solid #c8c6c692;
  border-radius: 2px;
`;

const SubmitButton = styled.button`
  width: 100%;
  height: 33px;
  padding: 5px 10px;
  margin: 10px 10px;
  border-radius: 2px;
  background-color: ${(props) => props.buttonColor};
  color: #fff;
  font-size: 1rem;
`;
