import React, { useEffect, useMemo, useState, useContext } from "react";
import { Row, Col, Form, Pagination } from "react-bootstrap";
import ProductCard from "./ProductCard";
import { CartContext } from "./CartContext";
import { toast } from "react-toastify";

const ITEMS_PER_PAGE = 6;

const Infaltables = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    const { agregarAlCarrito } = useContext(CartContext);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
        .then((r) => r.json())
        .then((data) => {
            setProducts(data);
            setLoading(false);
        })
        .catch(() => setLoading(false));
    }, []);

    const filtered = useMemo(() => {
        const q = searchTerm.toLowerCase();
        return products.filter(
        (p) =>
            p.title.toLowerCase().includes(q) ||
            p.category.toLowerCase().includes(q)
        );
    }, [products, searchTerm]);

    const totalPages = Math.max(
        1,
        Math.ceil(filtered.length / ITEMS_PER_PAGE)
    );

    const currentItems = useMemo(() => {
        const start = (currentPage - 1) * ITEMS_PER_PAGE;
        return filtered.slice(start, start + ITEMS_PER_PAGE);
    }, [filtered, currentPage]);

    const handleAgregar = (producto) => {
        agregarAlCarrito(producto);
        toast.success("Se agregó al carrito 🛒");
    };

    if (loading) return <div className="container">Cargando infaltables...</div>;

    return (
        <div className="container">
        <h1>Infaltables</h1>

        <Form.Control
            className="mb-3"
            placeholder="Buscar infaltables..."
            value={searchTerm}
            onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1);
            }}
        />

        <Row>
            {currentItems.map((p) => (
            <Col md={4} key={p.id} className="mb-4">
                <ProductCard products={p} agregarAlCarrito={handleAgregar} />
            </Col>
            ))}
        </Row>

        <div className="d-flex justify-content-center">
            <Pagination>
            <Pagination.Prev
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
            />
            {Array.from({ length: totalPages }).map((_, i) => (
                <Pagination.Item
                key={i + 1}
                active={i + 1 === currentPage}
                onClick={() => setCurrentPage(i + 1)}
                >
                {i + 1}
                </Pagination.Item>
            ))}
            <Pagination.Next
                onClick={() =>
                setCurrentPage((p) => Math.min(totalPages, p + 1))
                }
                disabled={currentPage === totalPages}
            />
            </Pagination>
        </div>
        </div>
    );
};

export default Infaltables;