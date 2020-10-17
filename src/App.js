import React from 'react';
import { Button } from 'react-bootstrap';
import './App.css';
import MenuContainer from './components/MenuContainer'

function App() {
  return (
    <div className="App">
      <h1>Pedidos</h1>
      <Button variant="success">Success</Button>{' '}
      <MenuContainer />
    </div>
  );
}

export default App;
