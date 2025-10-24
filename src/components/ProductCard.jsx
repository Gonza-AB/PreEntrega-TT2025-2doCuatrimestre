import React from "react";
import { Card, Button} from 'react-bootstrap';

const ProductCard = ({ products, agregarAlCarrito }) => {
    return(
        <Card className="h-100 d-flex flex-column">
            <Card.Img
                variant="top"
                src={products.image}
                alt={products.title}
                className="card-img-top img-fluid"
                style={{ height: '200px', objectFit:'cover'}}>
            </Card.Img>

            <Card.Body>
                <Card.Title>{products.title}</Card.Title>
                <Card.Text>
                    {products.description.slice(0, 100)}...
                </Card.Text>
                <Card.Text>
                    <strong>${products.price}</strong>
                </Card.Text>
                <Button variant="primary" onClick={() => agregarAlCarrito(products)}>
                    Agregar al Carrito
                </Button>
            </Card.Body>
        </Card>
    );
};

export default ProductCard;