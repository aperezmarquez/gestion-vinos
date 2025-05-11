import Navbar from "../../components/Navbar";
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import TarjetaProducto from "../../components/TarjetaProducto";
import AddProductPopUp from "../../components/AddProductPopUp";
import getProductos from "../../hooks/getProductos";
import './productos.css';

const Productos = () => {
    const [productos, setProductos] = useState([])
    const role = localStorage.getItem('role');
    const navigate = useNavigate();
    const addRef = useRef(null);
    
    useEffect(() => {
        getProductos().then((data) => {
            setProductos(data.productos)
        })
    }, [])

    if (role !== 'user' && role !== 'admin') {
        navigate('/home')
    }

    const handleClick = () => {
        addRef.current.showModal()
    }

    return (
        <>
            <Navbar />
            <AddProductPopUp ref={addRef} />
            <div className="productos-title">
                <p>Productos Disponibles</p>
                <button className="productos-button" onClick={handleClick}>Añadir Producto</button>
            </div>
            <div className="grid-container">
                {!productos && (
                    <p>No hay productos disponibles</p>
                )}
                {productos && productos.map((producto) => (
                    <TarjetaProducto key={producto.id} {...producto} id={producto.id} />
                ))}
            </div>
        </>
    ); 
}

export default Productos;
