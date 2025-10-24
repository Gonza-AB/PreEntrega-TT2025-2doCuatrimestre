import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";

export default function Home() {

    return (
        <Container className="my-5">
            <Row>
                <Col xs={12}>
                    <h1 className="mb-5 text-center">Bienvenido!</h1>
                </Col>
            </Row>
            <Row className="align-items-center">
                {/* Columna con Carousel */}
                <Col xs={12} md={6} className="mb-4 mb-md-0">
                    <Carousel fade interval={2500} controls={false} indicators={true}>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 rounded shadow"
                                src="https://picsum.photos/600/400?random=1"
                                alt="Primera imagen"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 rounded shadow"
                                src="https://picsum.photos/600/400?random=2"
                                alt="Segunda imagen"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 rounded shadow"
                                src="https://picsum.photos/600/400?random=3"
                                alt="Tercera imagen"
                            />
                        </Carousel.Item>
                    </Carousel>
                </Col>

                {/* Columna con texto */}
                <Col xs={12} md={6}>
                    <p>
                    Camisetas Gonza es una tienda online dedicada a los verdaderos fanáticos del fútbol.
                    Ofrecemos camisetas originales, réplicas premium y modelos retro de clubes y selecciones que marcaron época. Cada prenda está seleccionada con pasión, autenticidad y respeto por la historia del deporte más popular del mundo.
                    </p>
                    <p>
                    Nuestro objetivo es que cada cliente encuentre la camiseta que lo identifica, que le recuerde un momento inolvidable o que lo conecte con los colores que lleva en el corazón.
                    Además de productos de calidad, brindamos una experiencia de compra ágil, segura y personalizada, con envíos a todo el país y atención cercana a cada hincha.
                    </p>

                    <p>
                    Camisetas Gonza: más que una tienda, una pasión que se viste.
                    </p>
                </Col>
            </Row>
        </Container>
    );
}
