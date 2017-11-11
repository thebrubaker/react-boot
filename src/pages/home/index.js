import React from 'react';
import SplashLayout from 'layouts/splash';
import styled from 'styled-components';
import styles from 'config/styles';
import LinkButton from 'components/buttons/link-button';
import image from './assets/table.jpeg';

const Login = () => (
  <SplashLayout background={{ image, blend: true, color: styles.colors.gradient }} footer={false}>
    <Wrapper>
      <h1>Bootstrap Your Application</h1>
      <LinkButton to="/">Find Out More</LinkButton>
      <LinkButton outline>Explore</LinkButton>
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
    margin-top: 0;
  }
  button:first-of-type {
    margin-right: 20px;
  }
`;

export default Login;
