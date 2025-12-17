import React, { useEffect, useState } from "react";
import { Table, Button, Form, Modal, Alert, Spinner } from "react-bootstrap";

const API_URL = "https://69409195993d68afba6c736a.mockapi.io/Productos";

const CrudProductos = () => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");

    const [show, setShow] = useState(false);
    const [editId, setEditId] = useState(null);

    const [form, setForm] = useState({
        title: "",
        description: "",
        price: "",
        stock: "",
        image: "",
    });

    const getProductos = async () => {
        try {
        setLoading(true);
        setErrorMsg("");
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error("Error al obtener productos");
        const data = await res.json();
        setProductos(data);
        } catch (e) {
        setErrorMsg(e.message || "Error desconocido");
        } finally {
        setLoading(false);
        }
    };

    useEffect(() => {
        getProductos();
    }, []);

    const handleClose = () => {
        setShow(false);
        setForm({ title: "", description: "", price: "", stock: "", image: "" });
        setEditId(null);
    };

    const handleShow = (producto) => {
        setShow(true);
        if (producto) {
        setForm({
            title: producto.title ?? "",
            description: producto.description ?? "",
            price: producto.price ?? "",
            stock: producto.stock ?? "",
            image: producto.image ?? "",
        });
        setEditId(producto.id);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMsg("");

        if (!form.title.trim()) return setErrorMsg("El título es obligatorio");
        if (Number(form.price) <= 0) return setErrorMsg("El precio debe ser mayor a 0");
        if ((form.description ?? "").trim().length < 10)
        return setErrorMsg("La descripción debe tener al menos 10 caracteres");

        const productData = {
        ...form,
        price: Number(form.price),
        stock: Number(form.stock),
        };

        try {
        const method = editId ? "PUT" : "POST";
        const url = editId ? `${API_URL}/${editId}` : API_URL;

        const res = await fetch(url, {
            method,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(productData),
        });

        if (!res.ok) throw new Error("Error al guardar el producto");
        await res.json(); 

        handleClose();
        getProductos();
        } catch (e) {
        setErrorMsg(e.message || "Error desconocido");
        }
    };

    const eliminarProducto = async (id) => {
        if (!window.confirm("Seguro que quiere eliminar este producto?")) return;
        try {
        const res = await fetch(`${API_URL}/${id}`, { method: "DELETE" }); // ✅ antes estaba mal
        if (!res.ok) throw new Error("Error al eliminar el producto");
        getProductos();
        } catch (e) {
        setErrorMsg(e.message || "Error desconocido");
        }
    };

    return (
        <div className="container mt-4">
        <h2>CRUD de productos</h2>

        {errorMsg && <Alert variant="danger">{errorMsg}</Alert>}

        <Button className="mb-3" onClick={() => handleShow()}>
            Agregar Producto
        </Button>

        {loading ? (
            <div className="d-flex align-items-center gap-2">
            <Spinner animation="border" size="sm" />
            <span>Cargando...</span>
            </div>
        ) : (
            <Table striped bordered hover responsive>
            <thead>
                <tr>
                <th>Titulo</th>
                <th>Descripcion</th>
                <th>Precio</th>
                <th>Stock</th>
                <th>Imagen</th>
                <th style={{ width: 180 }}>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {productos.map((prod) => (
                <tr key={prod.id}>
                    <td>{prod.title}</td>
                    <td>{prod.description}</td>
                    <td>${Number(prod.price).toFixed(2)}</td>
                    <td>{prod.stock}</td>
                    <td>
                    {prod.image?.startsWith("http") ? (
                        <img
                        src={prod.image}
                        alt={prod.title}
                        width={50}
                        height={50}
                        style={{ objectFit: "cover" }}
                        />
                    ) : (
                        <span>{prod.image}</span>
                    )}
                    </td>
                    <td className="d-flex gap-2">
                    <Button size="sm" variant="warning" onClick={() => handleShow(prod)}>
                        Editar
                    </Button>
                    <Button size="sm" variant="danger" onClick={() => eliminarProducto(prod.id)}>
                        Eliminar
                    </Button>
                    </td>
                </tr>
                ))}
            </tbody>
            </Table>
        )}

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>{editId ? "Editar" : "Agregar"} Producto</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form onSubmit={handleSubmit}>
                <Form.Label>Titulo</Form.Label>
                <Form.Control
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                required
                />

                <Form.Group className="mb-2 mt-2">
                <Form.Label>Descripcion</Form.Label>
                <Form.Control
                    value={form.description}
                    onChange={(e) => setForm({ ...form, description: e.target.value })}
                    required
                />
                </Form.Group>

                <Form.Group className="mb-2">
                <Form.Label>Precio</Form.Label>
                <Form.Control
                    type="number"
                    value={form.price}
                    onChange={(e) => setForm({ ...form, price: e.target.value })}
                    required
                />
                </Form.Group>

                <Form.Group className="mb-2">
                <Form.Label>Stock</Form.Label>
                <Form.Control
                    type="number"
                    value={form.stock}
                    onChange={(e) => setForm({ ...form, stock: e.target.value })}
                    required
                />
                </Form.Group>

                <Form.Group className="mb-2">
                <Form.Label>Imagen (URL)</Form.Label>
                <Form.Control
                    value={form.image}
                    onChange={(e) => setForm({ ...form, image: e.target.value })}
                    required
                />
                </Form.Group>

                <Button type="submit" className="mt-2">
                Guardar
                </Button>
            </Form>
            </Modal.Body>
        </Modal>
        </div>
    );
};

export default CrudProductos;
