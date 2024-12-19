import Navbar from "../../components/Navbar";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Pedidos = () => {
    const role = localStorage.getItem('role');
    const navigate = useNavigate();

    if (role !== 'user' && role !== 'admin') {
        navigate('/home')
    }

    return (
        <>
            <Navbar></Navbar>
            <div>Pedidos</div>
        </>
    );
}

export default Pedidos;
