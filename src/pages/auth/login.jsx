import React from 'react';
import SplashLayout from 'layouts/splash';
import styled from 'styled-components';
import image from './assets/table.jpeg';
import styles from 'config/styles';
import LinkButton from 'components/buttons/LinkButton';

class Login extends React.Component {
  render() {
    return (
      <SplashLayout
        background={{ image, blend: true, color: styles.colors.gradient }}
        header={true}
        footer={false}
      >
        <Container>
          <h1>Lorem Ipsum Header</h1>
          <LinkButton>Find Out More</LinkButton>
          <LinkButton outline>Explore</LinkButton>
        </Container>
      </SplashLayout>
    );
  }
}

const Container = styled.div`
  text-align: left;
  color: white;
  width: 100%;
  padding: 5%;
  h1 {
    font-size: 6em;
    letter-spacing: 4px;
  }
  button:first-of-type {
    margin-right: 20px;
  }
`;

export default Login;
