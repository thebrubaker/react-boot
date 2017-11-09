import React from 'react';
import styled from 'styled-components';

const SplashLayout = ({ children, noHeader, noFooter, background }) => (
  <Container color={background.color}>
    {!noHeader && <header>Header</header>}
    <BackgroundImage
      image={background.image}
      size={background.size}
      position={background.position}
    />
    <main>{children}</main>
    {!noFooter && <footer>Footer</footer>}
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  position: relative;
  background: ${props => props.color || '#1f494d'};
  main {
    flex: 1;
  }
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-image: url('${props => props.image || ''}');
  background-size: ${props => props.size || 'cover'};
  background-position: ${props => props.position || 'center'};
  mix-blend-mode: multiply;
  filter: grayscale(100);
`;

export default SplashLayout;
