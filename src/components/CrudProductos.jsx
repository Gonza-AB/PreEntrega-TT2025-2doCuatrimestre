import React, { useEffect, useState } from "react";
import { Table, Button, Form, Modal } from 'react-bootstrap';

const API_URL="url";

const CrudProductos = () => {
    const [productos, setProductos] = useState([]);
    const [show, setShow] = useState(false);
    const [form, setForm] = useState({
        title:"",
        description:"",
        price:"",
        stock:"",
        image:"",
    });
    const [editId, setEditId] = useState(null);

//fetch --> obtener los productos
const getProductos = () => {
    fetch(API_URL)
    .then((res) => res.json())
    .then((data) => setProductos(data))
    .catch((error) => console.error("Error al obtener productos: ", error));
    };


//cerrar el modal
const handleClose = () => {
    setShow(false);
    setForm({ title: "", description: "", price: "", stock: "", image: ""});
    setEditId(null)
    };

// Abrir el modal
const handleShow = (producto) => {
    setShow(true);
    if(producto) {
        setForm({
            ...producto,
            price: Number(producto.price),
            stock: Number(producto.stock),
        });
        setEditId(producto.id);
    };
};

// crear o editar
const handleSubmit = (e) => {
    e.preventDefault();

    const productData = {
    ...form,
    price: Number(form.price),
    stock: Number(form.stock),
    }};

const method = editId ? "PUT" : "POST";
const url = editId ? `${API_URL}/${editId}` : API_URL;

fetch(url, {
    method: method,
    headers: {"Content-Type": "application/json" },
    body: JSON.stringify(productData),
})
.then((res) => {
    if (!res.ok) throw new Error("Error al guardar el producto");
    return res,json();
    })
.then(() => {
    handleClose();
    getProductos();
})
.catch((error) => console.error("Error:", error));

// Eliminar
const eliminarProducto = (id) => {
    if (!window.confirm("Seguro que quiere eliminar este producto?")) return;

    fetch(`${API_URL}/${id}`, { method: "Delete" })
    .then((res) => {
        if(!res.ok) throw new Error("Error al eliminar el producto");
        getProductos();
    })
    .catch((error) => console.error("Error:", error));
}

// Cargar los productos
useEffect(() => {
    getProductos();
}, []);

return (
    <div className="container mt-4">
        <h2>CRUD de productos</h2>
        <Button className="mb-3" onClick={() => handleShow()}>
            Agregar Producto
        </Button>
        <Table stripe border hover>
            <thead>
                <tr>
                    <th>Titulo</th>
                    <th>Descripcion</th>
                    <th>Precio</th>
                    <th>Stock</th>
                    <th>Imagen</th>
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
                                    style={{objectFit:"cover"}}
                                />
                            ) : (
                                <span>{prod.image}</span>
                            )}
                        </td>
                        <td>
                            <Button
                                size="sm"
                                variant="danger"
                                onClick={() => eliminarProducto(prod.id)}
                            >
                                Eliminar
                            </Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>

        {/* Modal de agregar / editar */}
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{editId ? "Editar" : "Agregar"} Productos</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Label>Titulo</Form.Label>
                    <Form.Control
                        value={form.title}
                        onChange={(e) => setForm({ ...form, title: e.target.value})}
                        required
                    />
                    <Form.Group className="mb-2">
                        <Form.Label>Descripcion</Form.Label>
                        <Form.Control
                            value={form.description}
                            onChange={(e) => 
                                setForm({... form,description: e.target.value})
                            }
                            required
                        />
                    </Form.Group>
                    
                    <Form.Group className="mb-2">
                        <Form.Label>Precio</Form.Label>
                        <Form.Control
                            
                            type="numbre"
                            value={form.price}
                            onChange={(e) => 
                                setForm({... form,price: Number(e.target.value)})
                            }
                            required
                        />
                    </Form.Group>
                    
                    <Form.Group className="mb-2">
                        <Form.Label>Stock</Form.Label>
                        <Form.Control
                            type="number"
                            value={form.stock}
                            onChange={(e) => 
                                setForm({... form,stock: Number(e.target.value) })
                            }
                            required
                        />
                        </Form.Group>

                        <Form.Group className="mb-2">
                        <Form.Label>Imagen (URL)</Form.Label>
                        <Form.Control
                            value={form.image}
                            onChange={(e) => 
                                setForm({... form,image: e.target.value})
                            }
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
)};

export default CrudProductos;
