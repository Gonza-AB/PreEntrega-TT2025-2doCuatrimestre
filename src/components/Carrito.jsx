import React, { useContext } from "react";
import { Container, Table, Button } from "react-bootstrap";
import { CartContext } from "./CartContext";
import { useNavigate } from "react-router-dom";

const Carrito = () => {
    const { carrito, agregarAlCarrito, decrementarCantidad, eliminarDelCarrito, vaciarCarrito} = useContext(CartContext);
    const navigate = useNavigate();
    const total = carrito.reduce(
        (acc, item) => acc + Number(item.price) * (item.cantidad ?? 1),
        0
    );

    if (carrito.length === 0) {
        return (
        <Container className="mt-4">
            <h3>Tu carrito está vacío</h3>
        </Container>
        );
    }

    return (
        <Container className="mt-4">
            <h3>Carrito de compras</h3>

            <Table striped bordered hover responsive className="mt-3">
                <thead>
                <tr>
                    <th>Producto</th>
                    <th>Precio unitario</th>
                    <th>Cantidad</th>
                    <th>Total</th>
                    <th>Acciones</th>
                </tr>
                </thead>

                <tbody>
                    {carrito.map((item) => (
                        <tr key={item.cartId}>
                            <td>{item.title}</td>
                            <td>${Number(item.price).toFixed(2)}</td>
                            <td>{item.cantidad ?? 1}</td>
                            <td>${(Number(item.price) * (item.cantidad ?? 1)).toFixed(2)}</td>
                            <td className="d-flex gap-2">
                                <Button size="sm" variant="success" onClick={() => agregarAlCarrito(item)}>
                                    +
                                </Button>
                                <Button size="sm" variant="warning" onClick={() => decrementarCantidad(item.cartId)}>
                                    -
                                </Button>
                                <Button size="sm" variant="danger" onClick={() => eliminarDelCarrito(item.cartId)}>
                                    Eliminar
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex gap-2">
                <Button variant="secondary" onClick={vaciarCarrito}>
                    Vaciar carrito
                </Button>
                <Button variant="success" onClick={() => navigate("/checkout")}>
                    Pagar
                </Button>
                </div>
                <h5 className="m-0">Total: ${total.toFixed(2)}</h5>
            </div>
        </Container>
        );
    }; 

export default Carrito;
