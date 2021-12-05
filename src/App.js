import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <div className='containerTarget'>
            <p className='childOfContainer'>Target wallet</p>
            <input type='number' className='childOfContainer'></input>
            <button className='childOfContainer'>set</button>
            <button className='childOfContainer'>clear</button>
          </div>
        </Row>
        <Row className='containerOfTokens'>
          
          <Col className='colToken'>
            <h1>DAI</h1>
            <p>Allowance</p>
            <p>Amount:</p>
            <input type='number'></input>
            <button>APROVE</button>
            <button>TRANSFER</button>
          </Col>
          
          <hr></hr>
          
          <Col className='colToken'>
            <h1>USDC</h1>
            <p>Allowance</p>
            <p>Amount:</p>
            <input type='number'></input>
            <button>APROVE</button>
            <button>TRANSFER</button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
