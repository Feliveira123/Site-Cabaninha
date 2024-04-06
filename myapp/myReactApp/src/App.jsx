import { useState } from 'react'


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


function NavbarExample() {
  return (
    <Navbar bg="info" data-bs-theme="dark" expand="lg">
      <Container className='ms-1'>
        <Navbar.Brand href="#home">Cabaninha</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#link">Eventos</Nav.Link>
            <NavDropdown title="Cáritas" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Trabalhe conosco</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Cestas básicas
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Enxovais</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">Palestras</Nav.Link>
            <Nav.Link href="#link">Cursos</Nav.Link>
            <Nav.Link href="#link">Biblioteca</Nav.Link>
            <Nav.Link href="#link">História</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


import Carousel from 'react-bootstrap/Carousel';

function CarouselInicio() {
  return (
    <Carousel data-bs-theme="dark" className="d-none d-sm-block mt-3">
      <Carousel.Item>
        <img
          className="d-block w-50 mx-auto"
          src="https://github.com/CabaninhaOrgBr/CabaninhaOrgBr.github.io/raw/main/fachada.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h1 className='text-light '>Nossa casa!</h1>
          <p className='text-light mb-0'>Visite nossa casa na Rua Benjamin Constant, 144</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block mx-auto"
          src="Public/Evento.jpeg"
          alt="Second slide" 
          style={{height: "474px", width: "672px"}}
        />
        <Carousel.Caption>
          <h1 className='text-light '>Evento panquecas</h1>
          <p className='text-light '>Deliciosas panquecas de diversos sabores. Encomende já!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block mx-auto "
          src="Public/Caritas.jpeg"
          alt="Third slide"
          style={{height: "474px", width: "672px"}}
        />
        <Carousel.Caption>
          <h1 className='text-light '>Cáritas</h1>
          <p className='text-light '>Se cadastre para nos ajudar nos trabalhos de caridade!</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}




function CardEventos() {
  return (
    <Card style={{ width: '70rem', margin: 'auto', marginTop: '20px'}}>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
}




function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <NavbarExample />
      <CarouselInicio />
      <CardEventos />
      
    </>
  )
}

export default App


