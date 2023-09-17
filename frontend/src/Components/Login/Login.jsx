import React from 'react';
import styled from 'styled-components';

const LoginContainer = styled.div`
  /* Your styles here */
  display: flex;
  flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--stroke);
    border-radius: 1rem;
  background-color: var( --background);
  width: 80%;
  margin: 0 auto;
  margin-top: 2rem;
  
`;

const LoginTitle = styled.h1`
  /* Your styles here */
  color: var(--main);
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 300px;
`;

const Login = () => {
  return (
    <LoginContainer>
      <LoginTitle>Login </LoginTitle>
      <LoginForm>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;
