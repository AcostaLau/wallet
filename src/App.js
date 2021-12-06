import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './App.css';
import Web3 from 'web3';
import { Web3ReactProvider } from '@web3-react/core'
import Dai from './components /Dai';
import Usdc from './components /Usdc';
import ConectWallet from './components /ConectWallet';

function getLibrary (provider){
  return new Web3(provider)
}

function App() {


  return (
    <div className="App">
      <Web3ReactProvider getLibrary={getLibrary}>
      <Container>
    
    <Row>
      <ConectWallet/>
    </Row>
    
    <Row className='containerOfTokens'>
      
      <Col className='colToken'>
        <Usdc/>
      </Col>

      <Col className='colToken'>
        <Dai/>
      </Col>
    </Row>
  </Container>
      </Web3ReactProvider>
      
    </div>
  );
}

export default App;
