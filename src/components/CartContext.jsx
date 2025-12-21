import React, { createContext, useMemo, useState } from "react";

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);

    const getId = (p) => {
        const raw =
        p?.id ?? p?.Id ?? p?.ID ?? p?._id ?? p?.productId ?? p?.uuid ?? null;

        if (raw !== null && raw !== undefined && String(raw).trim() !== "") {
        return String(raw);
        }

        const title = (p?.title ?? p?.name ?? "").trim();
        const price = String(p?.price ?? p?.precio ?? "");
        const image = (p?.image ?? p?.img ?? "").trim();

        const fallback = `${title}|${price}|${image}`;
        return fallback.trim() ? fallback : "";
    };

    const agregarAlCarrito = (producto) => {
        const cartId = getId(producto);
        if (!cartId) {
        console.error("Producto sin id usable, no se agrega:", producto);
        return false;
        }

        setCarrito((prev) => {
        const existe = prev.find((item) => item.cartId === cartId);

        if (existe) {
            return prev.map((item) =>
            item.cartId === cartId
                ? { ...item, cantidad: (item.cantidad ?? 1) + 1 }
                : item
            );
        }

        return [...prev, { ...producto, cartId, cantidad: 1 }];
        });

        return true;
    };

    const decrementarCantidad = (cartIdRaw) => {
        const cartId = String(cartIdRaw);

        setCarrito((prev) => {
        const item = prev.find((x) => x.cartId === cartId);
        if (!item) return prev;

        const cant = item.cantidad ?? 1;
        if (cant <= 1) {
            return prev.filter((x) => x.cartId !== cartId);
        }

        return prev.map((x) =>
            x.cartId === cartId ? { ...x, cantidad: cant - 1 } : x
        );
        });
    };

    const eliminarDelCarrito = (cartIdRaw) => {
        const cartId = String(cartIdRaw);
        setCarrito((prev) => prev.filter((item) => item.cartId !== cartId));
    };

    const vaciarCarrito = () => setCarrito([]);

    const value = useMemo(
        () => ({
        carrito,
        agregarAlCarrito,
        decrementarCantidad,
        eliminarDelCarrito,
        vaciarCarrito,
        }),
        [carrito]
    );

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
