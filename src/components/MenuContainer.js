import React from 'react';
import { Container, Row, Col  } from 'react-bootstrap'
import TaskCard from './TaskCard'
import Dragula from 'react-dragula';
import axios from 'axios';

class MenuContainer extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount () {
    let drake = Dragula(
      [
        document.querySelector('#salida_de_planta'),
        document.querySelector('#ldc'),
        document.querySelector('#proceso_de_entrega'),
        document.querySelector('#entrega_completada'),
        document.querySelector('#entrega_fallida'),
      ],
      {
        accepts: function (el, target, source, sibling) {
          return true; // elements can be dropped in any of the containers by default
        },
      });
      drake.on('drop', (el, target, _source, _sibling) => {
        const targetState = target.id;
        const id = el.children[0].innerHTML;
        axios.put('http://localhost:3001/pedido', { id, to_status:  targetState }).then(
          (result) => {
            console.log(result);
          } 
        ).catch( () => { 
            this.props.fetchFromServer();
          }
        )
      });
  }


  render () {
    return (
      <Container className="mt-4">
        <Row>
          <Col style={{ borderColor: 'black', borderStyle: 'solid', marginRight: '4px' }}>
            <h4>Salida de Planta</h4>
            <Col id='salida_de_planta' style={{minHeight: '400px'}}>
              { this.props.pedidos
                  .filter(item => item.status === 'salida_de_planta')
                  .map((item) => (<TaskCard id={item.id} key={item.id} title={item.id} description={item.description} />)) }
            </Col>
          </Col>
          <Col style={{ borderColor: 'black', borderStyle: 'solid', marginRight: '4px' }}>
            <h4>LDC</h4>
            <Col id='ldc' style={{minHeight: '400px'}}>
              { this.props.pedidos
                  .filter(item => item.status === 'ldc')
                  .map((item) => (<TaskCard key={item.id} title={item.id} description={item.description} />)) }
            </Col>
          </Col>
          <Col style={{ borderColor: 'black', borderStyle: 'solid', marginRight: '4px' }}>
            <h4>Proceso de entrega</h4>
            <Col id='proceso_de_entrega' style={{minHeight: '400px'}}>
            { this.props.pedidos
                  .filter(item => item.status === 'proceso_de_entrega')
                  .map((item) => (<TaskCard key={item.id} title={item.id} description={item.description} />)) }
            </Col>
          </Col>
          <Col style={{ borderColor: 'black', borderStyle: 'solid', marginRight: '4px' }}>
            <h4>Entregado</h4>
            <Row>
              <Col id='entrega_completada' style={{minHeight: '200px'}}>
              { this.props.pedidos
                  .filter(item => item.status === 'entrega_completada')
                  .map((item) => (<TaskCard key={item.id} title={item.id} description={item.description} />)) }
              </Col>
            </Row>
            <h4>Fallido</h4>
            <Row>
              <Col id='entrega_fallida' style={{minHeight: '200px'}}>
              { this.props.pedidos
                  .filter(item => item.status === 'entrega_fallida')
                  .map((item) => (<TaskCard key={item.id} title={item.id} description={item.description} />)) }
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default MenuContainer;