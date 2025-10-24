import React, { useEffect, useState } from "react";
import { Row,Col } from 'react-bootstrap';
import ProductCard from './ProductCard';

const ProductList = ({ category = null }) =>{
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let url = 'https://fakestoreapi.com/products';
        if (category) {
            url = `https://fakestoreapi.com/products/category/${category}`;

        }
        fetch(url)
        .then((response) => response.json())
        .then((data) =>{
            setProducts(data);
            setLoading(false);
        })
        .catch((error) => {
            console.error('Error fetching data: ', error)
            setLoading(false);
        });

    }, [category]);

    const handleAgregarAlCarrito = (products) => {
        alert(`Producto ${products.title} agregado al carrito`);
    };

    if (loading) {
        return(
            <div>Loading...</div>
        )
    }

    return(
        <Row>
            {products.map((products) => (
                <Col md={4} key={products.id} className="mb-4">
                    <ProductCard products={products} agregarAlCarrito={handleAgregarAlCarrito}/>
                </Col>
            ))}
        </Row>
    );
}

export default ProductList;