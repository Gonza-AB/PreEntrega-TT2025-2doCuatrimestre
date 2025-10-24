import React from "react";
import { Container, Row, Col} from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaTiktok } from "react-icons/fa";

const Footer = () => {
    return(
        <footer>
            <Container>
                <Row>
                    <Col md={6}>
                    <p>Camisetas Gonza</p>
                    <p>Brandsen 805, C.A.B.A</p>
                    </Col>
                    <Col md={6}>
                        <div>
                            <a href="https://www.instagram.com/" target="blank">
                                <FaInstagram size={28}/>
                            </a>
                            <a href="https://www.tiktok.com" target="blank">
                                <FaTiktok size={28} className="me-3" />
                            </a>
                            <a href="https://x.com/" target="blank">
                                <FaTwitter size={28} className="me-3" />
                            </a>
                        </div>
                        <p>Talento Tech 2025 - Todos los derechos reservados</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;

