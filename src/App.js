import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './App.css';
import Web3 from 'web3';
import { Web3ReactProvider } from '@web3-react/core'
import ConectWallet from './components /ConectWallet';


//provider of web3
function getLibrary (provider){
  return new Web3(provider)
}

function App() {


  return (
    <div className="App">
      <Web3ReactProvider getLibrary={getLibrary}>

        <Container>
    
            <Row>
              <h1>DEFI WONDERLAND</h1>
              <ConectWallet/>
              <h3>By: Lautaro Acosta</h3>
            </Row>
    

        </Container>

      </Web3ReactProvider>
      
    </div>
  );
}

export default App;
