import { Card, Button } from "react-bootstrap";

const ProductCard = ({ products, agregarAlCarrito }) => {
    if (!products) return null;

    const handleClick = () => {
        agregarAlCarrito(products);
    };

    return (
        <Card className="h-100">
        <Card.Img
            variant="top"
            src={products.image}
            alt={products.title}
            style={{ height: 200, objectFit: "cover" }}
        />

        <Card.Body className="d-flex flex-column">
            <Card.Title>{products.title}</Card.Title>

            <Card.Text className="flex-grow-1">
            {products.description}
            </Card.Text>

            <Card.Text>
            <strong>${products.price}</strong>
            </Card.Text>

            <Button variant="primary" onClick={handleClick}>
            Comprar
            </Button>
        </Card.Body>
        </Card>
    );
};

export default ProductCard;
