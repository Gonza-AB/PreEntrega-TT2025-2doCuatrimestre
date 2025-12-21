import React, { useEffect, useMemo, useState, useContext } from "react";
import { Row, Col, Form, Button, Pagination, Alert, Spinner } from "react-bootstrap";
import ProductCard from "./ProductCard";
import { CartContext } from "./CartContext";
import { toast } from "react-toastify";

const API_URL = "https://69409195993d68afba6c736a.mockapi.io/Productos";

const ProductCatalogue = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [errorMsg, setErrorMsg] = useState("");

    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const ITEMS_PER_PAGE = 6;

    const { agregarAlCarrito } = useContext(CartContext);

    useEffect(() => {
        const load = async () => {
        try {
            setLoading(true);
            setErrorMsg("");
            const res = await fetch(API_URL);
            if (!res.ok) throw new Error("No se pudieron cargar los productos");
            const data = await res.json();
            setProducts(data);
        } catch (e) {
            setErrorMsg(e.message || "Error desconocido");
        } finally {
            setLoading(false);
        }
        };
        load();
    }, []);

    const filtered = useMemo(() => {
        const q = searchTerm.trim().toLowerCase();
        if (!q) return products;

        return products.filter((p) => {
        const title = String(p.title ?? "").toLowerCase();
        const category = String(p.category ?? "").toLowerCase(); // si no existe, queda ""
        return title.includes(q) || category.includes(q);
        });
    }, [products, searchTerm]);

    const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));

    const currentItems = useMemo(() => {
        const start = (currentPage - 1) * ITEMS_PER_PAGE;
        return filtered.slice(start, start + ITEMS_PER_PAGE);
    }, [filtered, currentPage]);

    useEffect(() => {
        if (currentPage > totalPages) setCurrentPage(totalPages);
    }, [totalPages, currentPage]);

    const handleAgregar = (producto) => {
        const ok = agregarAlCarrito(producto);
        if (ok) toast.success("Se ha agregado exitosamente al carrito 🛒");
        else toast.error("No se pudo agregar el producto");
    };

    const onChangeSearch = (e) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1); 
    };

    if (loading) {
        return (
        <div className="d-flex align-items-center gap-2">
            <Spinner animation="border" size="sm" />
            <span>Cargando productos...</span>
        </div>
        );
    }

    if (errorMsg) return <Alert variant="danger">{errorMsg}</Alert>;

    return (
        <div className="container">
        {/* Barra de búsqueda */}
        <div className="d-flex flex-column flex-md-row gap-2 align-items-md-center mb-3">
            <Form.Control
            placeholder="Buscar por nombre o categoría..."
            value={searchTerm}
            onChange={onChangeSearch}
            aria-label="Buscar productos"
            />
            <div className="text-muted">
            Mostrando {filtered.length} resultado(s)
            </div>
        </div>

        {/* Cards */}
        <Row>
            {currentItems.map((p) => (
            <Col md={4} key={p.id ?? p.cartId ?? `${p.title}-${p.price}`} className="mb-4">
                <ProductCard products={p} agregarAlCarrito={handleAgregar} />
            </Col>
            ))}
        </Row>

        {/* Paginación */}
        <div className="d-flex justify-content-center mt-3">
            <Pagination>
            <Pagination.Prev
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
            />

            {Array.from({ length: totalPages }).slice(0, 7).map((_, idx) => {
                const page = idx + 1;
                return (
                <Pagination.Item
                    key={page}
                    active={page === currentPage}
                    onClick={() => setCurrentPage(page)}
                >
                    {page}
                </Pagination.Item>
                );
            })}

            <Pagination.Next
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
            />
            </Pagination>
        </div>
        </div>
    );
};

export default ProductCatalogue;
