import Navbar from "../../components/Navbar";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Clientes = () => {
    const role = localStorage.getItem('role');
    const navigate = useNavigate();

    if (role !== 'user' && role !== 'admin') {
        navigate('/home')
    }
    return (
        <>
            <Navbar></Navbar>
            <div>Clientes</div>
        </>
    );
}

export default Clientes;
