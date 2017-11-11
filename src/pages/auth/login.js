import React from 'react';
import SplashLayout from 'layouts/splash';
import styled from 'styled-components';
import styles from 'config/styles';
import image from './assets/table.jpeg';
import LoginForm from './components/login-form';

const Login = () => (
  <SplashLayout background={{ image, blend: true, color: styles.colors.gradient }} footer={false}>
    <Wrapper>
      <p>Please sign in to continue.</p>
      <LoginForm className="login-form" />
    </Wrapper>
  </SplashLayout>
);

const Wrapper = styled.div`
  text-align: left;
  color: white;
  width: 100%;
  padding: 5%;
  h1 {
    font-size: 6em;
    letter-spacing: 4px;
  }
  .login-form {
    max-width: 450px;
  }
  > p {
    font-size: 1.2em;
  }
`;

export default Login;
