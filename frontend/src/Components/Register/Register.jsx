import React from 'react';
import styled from 'styled-components';

const RegisterContainer = styled.div`
  /* Your styles here */
    display: flex;
  flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--stroke);
  background-color: var( --background);
  width: 80%;
  margin: 0 auto;
  margin-top: 2rem;
  border-radius: 1rem;
`;

const RegisterTitle = styled.h1`
  /* Your styles here */
   color: var(--main);
`;

const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 300px;
`;

const Register = () => {
  return (
    <RegisterContainer>
      <RegisterTitle>Register </RegisterTitle>
      <RegisterForm>
        <input type="text" placeholder="Username" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Register</button>
      </RegisterForm>
    </RegisterContainer>
  );
};

export default Register;
