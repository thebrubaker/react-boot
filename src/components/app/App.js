import React, { Component } from 'react';
import styled from 'styled-components';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Container className="App">
        <header className="header">
          <img src={logo} className="logo" alt="logo" />
          <h1 className="title">Welcome to React</h1>
        </header>
        <p className="intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </Container>
    );
  }
}

const Container = styled.div`
  text-align: center;
  
  .logo {
    animation: logo-spin infinite 20s linear;
    height: 80px;
  }
  
  .header {
    background-color: #222;
    height: 150px;
    padding: 20px;
    color: white;
  }
  
  .title {
    font-size: 1.5em;
  }
  
  .intro {
    font-size: large;
  }
  
  @keyframes logo-spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }  
`

export default App;
