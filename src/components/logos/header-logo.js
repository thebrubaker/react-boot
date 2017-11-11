import React from 'react';
import styled from 'styled-components';

const HeaderLogo = () => (
  <Logo>
    React<strong>Boot</strong>
  </Logo>
);

const Logo = styled.span`
  font-weight: 100;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-size: 0.9em;
  strong {
    font-weight: 600;
    padding-left: 1px;
  }
`;

export default HeaderLogo;
