import React from "react";
import ProductList from './ProductList';

const Productos = () => {
    return(
        <div className="container">
            <h1>Lista de productos</h1>
            <ProductList category="men's clothing" /> 
        </div>
    )
}

export default Productos