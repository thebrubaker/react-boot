import React from 'react';
import styled from 'styled-components';

const Header = () => (
  <Container>
    <div>
      <span className="logo">
        Proto<strong>Type</strong>
      </span>
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
  .logo {
    font-weight: 100;
    letter-spacing: 1px;
    font-size: 18px;
    strong {
      font-weight: 600;
    }
  }
`;

export default Header;
