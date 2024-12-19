import Navbar from "../../components/Navbar";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TarjetaProducto from "../../components/TarjetaProducto";
import './productos.css';

const Productos = () => {
    const role = localStorage.getItem('role');
    const navigate = useNavigate();

    if (role !== 'user' && role !== 'admin') {
        navigate('/home')
    }

    const productos = [
        {id: 1, cosecha: "2019", precio_euros: 15, descripcion: "Vino tinto", cantidad: 100},
        {id: 2, cosecha: "2021", precio_euros: 12, descripcion: "Vino blanco", cantidad: 100},
        {id: 3, cosecha: "2022", precio_euros: 10, descripcion: "Vino rosado", cantidad: 100},
    ]
    return (
        <>
            <Navbar></Navbar>
            <div>Productos</div>
            <div className="grid-container">
                {productos.map((producto) => (
                    <TarjetaProducto key={producto.id} {...producto}/>
                ))}
            </div>
        </>
    ); 
}

export default Productos;
