import { Container, Table, Button } from "react-bootstrap";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
    const { carrito, vaciarCarrito } = useContext(CartContext);
    const navigate = useNavigate();

    const total = carrito.reduce(
        (acc, item) => acc + Number(item.price) * (item.cantidad ?? 1),
        0
    );

    const handlePagar = () => {
        toast.success("✅ Su compra ha sido realizada");
        vaciarCarrito();

        setTimeout(() => {
        navigate("/");
        }, 3000);
    };

    if (carrito.length === 0) {
        return (
        <Container className="mt-4">
            <h3>No hay productos en el carrito</h3>
        </Container>
        );
    }

    return (
        <Container className="mt-4">
        <h2>Checkout</h2>

        <Table striped bordered hover responsive className="mt-3">
            <thead>
                <tr>
                    <th>Producto</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                {carrito.map((item) => (
                <tr key={item.id}>
                <td>{item.title}</td>
                <td>${Number(item.price).toFixed(2)}</td>
                <td>{item.cantidad ?? 1}</td>
                <td>
                    ${(Number(item.price) * (item.cantidad ?? 1)).toFixed(2)}
                </td>
                </tr>
            ))}
            </tbody>
        </Table>

        <div className="d-flex justify-content-between align-items-center">
            <h5>Total a pagar: ${total.toFixed(2)}</h5>
            <Button variant="success" onClick={handlePagar}>
            Pagar
            </Button>
        </div>
        </Container>
    );
};

export default Checkout;
