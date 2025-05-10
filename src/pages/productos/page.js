import Navbar from "../../components/Navbar";
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import TarjetaProducto from "../../components/TarjetaProducto";
import AddProductPopUp from "../../components/AddProductPopUp";
import './productos.css';

const Productos = () => {
    const [productos, setProductos] = useState([
        {id: 1, tipo: "Vino tinto", cosecha: "2019", precio_euros: 15, precio_dolares: 20, descripcion: "Esta botella es de vino tinto, cosechada en 2019", cantidad: 100},
        {id: 2, tipo: "Vino blanco", cosecha: "2021", precio_euros: 12, precio_dolares: 18, descripcion: "Esta botella es de vino blanco, cosechada en 2021", cantidad: 100},
        {id: 3, tipo: "Vino rosado", cosecha: "2022", precio_euros: 10, precio_dolares: 17, descripcion: "Esta botella es de vino rosado, cosechada en 2022", cantidad: 100},
    ])
    const role = localStorage.getItem('role');
    const navigate = useNavigate();
    const addRef = useRef(null);

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
                {productos.map((producto) => (
                    <TarjetaProducto key={producto.id} {...producto} />
                ))}
            </div>
        </>
    ); 
}

export default Productos;
