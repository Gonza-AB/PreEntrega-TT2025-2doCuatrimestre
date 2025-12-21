import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar, Nav, Container, Button, Badge } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import { useAuth } from "./AuthContext";
import { useContext } from "react";
import { CartContext } from "./CartContext";

const Header = () => {
    const { isAuthenticated, logout } = useAuth();
    const { carrito } = useContext(CartContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    const totalItems = carrito?.reduce((acc, item) => acc + (item.cantidad ?? 1), 0) ?? 0;

    return (
        <header>
        <Navbar>
            <Container>
            <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
                <img
                style={{ width: 40, height: 40 }}
                rel="icon" 
                type="image/png" 
                href="./Camisetas_gonza.png"
                />
                <span>Camisetas Gonza </span>
            </Navbar.Brand>

            <Nav className="ms-auto align-items-center">
                <Nav.Link as={Link} to="/" className="me-3">Home</Nav.Link>
                <Nav.Link as={Link} to="/productos" className="me-3">Productos</Nav.Link>
                <Nav.Link as={Link} to="/infaltables" className="me-3">Infaltables</Nav.Link>
                <Nav.Link as={Link} to="/nosotros" className="me-3">Nosotros</Nav.Link>
                <Nav.Link as={Link} to="/contacto" className="me-3">Contacto</Nav.Link>

                <div className="d-flex align-items-center">
                <Link to="/carrito" className="text-white me-3 position-relative" aria-label="Ir al carrito">
                    <FontAwesomeIcon icon={faShoppingCart} size="lg" />
                    {totalItems > 0 && (
                    <Badge
                        pill
                        bg="danger"
                        className="position-absolute top-0 start-100 translate-middle"
                    >
                        {totalItems}
                    </Badge>
                    )}
                </Link>
                
                {isAuthenticated ? (
                    <>
                    <Button variant="outline-light" as={Link} to="/admin" className="me-2">
                        Administracion
                    </Button>
                    <Button variant="outline-light" onClick={handleLogout}>
                        Cerrar Sesion
                    </Button>
                    </>
                ) : (
                    <Button variant="outline-light" as={Link} to="/login" className="me-2">
                    Login
                    </Button>
                )}
                </div>
            </Nav>
            </Container>
        </Navbar>
        </header>
    );
    };

export default Header;
