import React from "react";
import { Form, Button, Container, Row, Col, Card} from 'react-bootstrap';

const Contacto = () => {
    const handleSumbit = (e) => {
        e.preventDefault();
        alert('Formulario Enviado');
    };

    return(
        <Container className="d-flex justify-content-center align-items-center min-vh-100">
            <Row className="w-100 justify-content-center">
                <Col md={6} lg={4}>
                    <Card className="shadow-lg p-4">
                        <Card.Body>
                            <h2 className="text-center mb-4">Formulario de Contacto</h2>
                            <Form onSubmit={handleSumbit}>
                                <Form.Group className="mb-3" controlId="formUsername">
                                    <Form.Label>Nombre</Form.Label>
                                    <Form.Control type="text" placeholder="Ingrese su nombre" required/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="text" placeholder="Ingrese su email" required/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formMessage">
                                    <Form.Label>Mensaje</Form.Label>
                                    <Form.Control type="text" placeholder="Ingrese su mensaje" required>
                                    </Form.Control>
                                </Form.Group>
                                <Button variant="primary" type="sumbit" className="w-100">Ingresar</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Contacto;