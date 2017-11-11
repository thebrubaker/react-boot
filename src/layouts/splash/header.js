import React from 'react';
import styled from 'styled-components';
import Logo from 'components/logos/header-logo';

const Header = () => (
  <Container>
    <div>
      <Logo />
    </div>
    <div>
      <span>Login</span>
    </div>
  </Container>
);

const Container = styled.header`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  color: white;
  z-index: 1;
  padding: 0 30px;
  align-items: center;
`;

export default Header;
