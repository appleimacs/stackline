import Table from './components/Table';
import Chart from './components/Chart';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Sidebar from './components/Sidebar';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
  <>
    <Navbar bg='dark'><img src="stackline_logo.svg" height='40px' width='100%' alt="Stackline Logo" /></Navbar>
    <Container style={{backgroundColor: '#f5f5f5'}} fluid>
      <Row>
        <Col xs={12} md={2} lg={3}><Card style={{marginTop: '40px', marginBottom: '40px', height: 'calc(100% - 80px)'}}><Card.Body><Sidebar /></Card.Body></Card></Col>
        <Col>
          <Row>
            <Col><Card style={{marginTop: '40px'}}><Card.Body><Chart /></Card.Body></Card></Col>
          </Row>
          <Row>
            <Col><Card style={{marginTop: '40px', marginBottom: '40px'}}><Card.Body><Table /></Card.Body></Card></Col>
          </Row>
        </Col>
      </Row>
    </Container>
  </>
  );
}

export default App;
