import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import routes from './routes';
import styled from 'styled-components';
import 'normalize.css';
import './App.css';

const App = () => (
  <Router>
    <Container>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} component={route.component} />
      ))}
    </Container>
  </Router>
);

const Container = styled.div`
  height: 100%;
  width: 100%;
`;

export default App;
