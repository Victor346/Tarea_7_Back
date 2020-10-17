import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import './App.css';
import MenuContainer from './components/MenuContainer'

function App() {
  const [show, setShow] = useState(false);
  const [descripcionForm, setDescripcionForm] = useState('');
  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(descripcionForm);
    setShow(false);
  }

  const handleChange = (e) => setDescripcionForm(e.target.value);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="App">
      <h1>Pedidos</h1>
      <Button variant="success" onClick={handleShow}>
        Agregar nuevo Pedido
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Agregar un nuevo pedido</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group controlId="descripcion">
              <Form.Label>Descripcion</Form.Label>
              <Form.Control value={descripcionForm} onChange = {handleChange} type="text" placeholder="Ingresa aqui tu descripcion" />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>
              Cerrar
            </Button>
            <Button variant="success" type="submit">
              Guardar
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
      <MenuContainer />
    </div>
  );
}

export default App;
