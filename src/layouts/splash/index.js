import React from 'react';
import styled from 'styled-components';
import Header from './header';

const SplashLayout = ({ children, header = true, footer = true, background = {} }) => (
  <Wrapper
    color={background.color}
    image={background.image}
    size={background.size}
    position={background.position}
    blend={background.blend}
  >
    {header && <Header />}
    <main>{children}</main>
    {footer && <footer>Footer</footer>}
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  position: relative;
  background: ${props => props.color || '#1f494d'};
  main {
    z-index: 1;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  &:after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-image: url('${props => props.image || ''}');
    background-size: ${props => props.size || 'cover'};
    background-position: ${props => props.position || 'center'};
    mix-blend-mode: ${props => (props.blend ? 'multiply' : '')};
    filter: ${props => (props.blend ? 'grayscale(100)' : '')};
  }
`;

export default SplashLayout;
