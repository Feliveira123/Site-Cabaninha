import { useState } from 'react'


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';



function NavbarExample() {
  return (
    <Navbar bg="info" data-bs-theme="dark" expand="lg" className='fixed-top'>
      <Container className='ms-1'>
        <img src='https://github.com/CabaninhaOrgBr/CabaninhaOrgBr.github.io/raw/main/Cabaninha_Logo_75_anos.png' width="60px" alt="logo" class="me-2" href="#home"/>
        <Navbar.Brand href="#home">Cabaninha</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#evento">Eventos</Nav.Link>
            <NavDropdown title="Cáritas" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Trabalhe conosco</NavDropdown.Item>
              <NavDropdown.Item href="/loginCaritas.html">
                Cestas básicas
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Enxovais</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#palestras">Palestras</Nav.Link>
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
    <Carousel data-bs-theme="dark" className="d-none d-sm-block" style={{marginTop: '100px'}}>
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
          src="/Evento.jpeg"
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
          src="/Caritas.jpeg"
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
  return ( <div className="container">
    <div className="row">
      <div style={{textAlign: 'center', fontFamily: 'inherit', boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.35)'}} className="col-sm mt-5 mb-5 rounded">
        <h1 className='mt-5'>Nossos Eventos:</h1>
        <p className='fs-4' style={{marginTop: '100px'}}>Realizamos eventos para arrecadarmos renda para a casa, para que possamos realizar nossos trabalos de caridade como: entrega de cestas básicas, entrega de enxovais, festa para o dia das crianças com doação de brinquedos.</p>
        <p className='fs-5' style={{marginTop: '100px'}}>Conheça mais nosso trabalho de caridade!</p>
        <a class="btn btn-primary w-50 mt-5" href="/loginCaritas.html" role="button">Caritas</a>
      </div>
      <div className='col-lg' id="evento">
      <Card className='d-block w-100 m-auto mt-5 mb-5' style={{ width: '30rem', margin: 'auto', marginTop: '40px', marginBottom: '30px', textAlign: 'center', boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.35)'}}>
          <Card.Img className='d-none d-sm-block' variant="top" src="/Evento.jpeg" style={{width: '100%', marginTop: '0', padding: '0'}}/>
        <Card.Body>
          <Card.Title>Evento panquecas</Card.Title>
          <Card.Text>
            No dia 06/04/2024 teremos nosso evento de panquecas! Encomende já!<br/>
            Embalagem com 4 unidades cada.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Panqueca de carne: R$30,00</ListGroup.Item>
          <ListGroup.Item>Panqueca de palmito: R$30,00</ListGroup.Item>
          <ListGroup.Item>Panqueca de brigadeiro: R$15,00</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Card.Link href="#">Peça a sua já!</Card.Link>
        </Card.Body>
      </Card>
      </div>
    </div>
  </div>
  );
}

function Youtube(){
  return (
    <div className='container' id='palestras'>
      <div className="row">
      <div style={{height: '315px',textAlign: 'center', fontFamily: 'inherit', boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.35)'}} className="col-sm mb-5 rounded">
        <h2 className='mt-2'>Palestras:</h2>
        <h4 className='mt-5'>Acompanhe nossas palestras através do nosso canal do Youtube!</h4>
        <a class="btn btn-primary mt-5" href="https://www.youtube.com/@CABANINHAITU" role="button">Visite nosso canal no Youtube <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16">
  <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
</svg></a>
        
      </div>
        <div className='col-lg'>
          <div id="caritas">
          <iframe style={{}} className='' width="560" height="315" src="https://www.youtube.com/embed/hTHFCWvBTeo?si=EX10BKrgPs45ZdvB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}


function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <NavbarExample />
      <CarouselInicio />
      <CardEventos />
      <Youtube />
      
    </>
  )
}

export default App


