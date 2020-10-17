import React from 'react';
import { Container, Row, Col  } from 'react-bootstrap'
import TaskCard from './TaskCard'
import Dragula from 'react-dragula';

class MenuContainer extends React.Component {

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

      });
    drake.on('drop', (el, target, _source, _sibling) => {
      console.log(target.id);
    });
  }


  render () {
    return (
      <Container className="mt-4">
        <Row>
          <Col style={{ borderColor: 'black', borderStyle: 'solid', marginRight: '4px' }}>
            <h4>Salida de Planta</h4>
            <Col id='salida_de_planta' style={{minHeight: '400px'}}>
              <TaskCard title={'hola'} description={'djifjiosjdfsdsdf'} />
              <TaskCard title={'adios'} description={'ifjosdfjiosdfojidfsifsdsdfbght'}/>
              <TaskCard title={'djidjo'} description={'sdfuihifhuidjsiofnbksnjsdfjsdnf'}/>
            </Col>
          </Col>
          <Col style={{ borderColor: 'black', borderStyle: 'solid', marginRight: '4px' }}>
            <h4>LDC</h4>
            <Col id='ldc' style={{minHeight: '400px'}}>
            </Col>
          </Col>
          <Col style={{ borderColor: 'black', borderStyle: 'solid', marginRight: '4px' }}>
            <h4>Proceso de entrega</h4>
            <Col id='proceso_de_entrega' style={{minHeight: '400px'}}>
            </Col>
          </Col>
          <Col style={{ borderColor: 'black', borderStyle: 'solid', marginRight: '4px' }}>
            <h4>Entregado</h4>
            <Row>
              <Col id='entrega_completada' style={{minHeight: '200px'}}>
              </Col>
            </Row>
            <h4>Fallido</h4>
            <Row>
              <Col id='entrega_fallida' style={{minHeight: '200px'}}>
              </Col>
            </Row>

          </Col>
        </Row>
      </Container>
    );
  }
}

export default MenuContainer;