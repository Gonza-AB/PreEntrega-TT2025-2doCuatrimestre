import React from "react";
import { Link} from 'react-router-dom';
import { Navbar, Nav, Container, Button} from 'react-bootstrap';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';

const Header = () => {
return(
    <header>    
        <Navbar>
            <Container>
                <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
                    <img src="https://placehold.co/40" alt="Logo" className="d-inline-block align-top me-2" />
                    <span>Camisetas Gonza </span>
                </Navbar.Brand>
            <Nav className="ms-auto align-items-center">
                <Nav.Link as={Link} to="/" className="me-3">Home</Nav.Link>
                <Nav.Link as={Link} to="/productos" className="me-3">Productos</Nav.Link>
                <Nav.Link as={Link} to="/infaltables" className="me-3">Infaltables</Nav.Link>
                <Nav.Link as={Link} to="/nosotros" className="me-3">Nosotros</Nav.Link>
                <Nav.Link as={Link} to="/contacto" className="me-3">Contacto</Nav.Link>
                
                <div className="d-flex align-items-center">
                    <Button variant="outline-light" as={Link} to="/administracion" className="me-2">Administracion</Button>
                    <Link to="/carrito" className="text-white">
                        <FontAwesomeIcon icon={faShoppingCart} size="lg" />
                    </Link>
                </div>
            </Nav>
            </Container>
        </Navbar>
    </header>
    );
}

export default Header;