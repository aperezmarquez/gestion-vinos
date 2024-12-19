import Navbar from "../../components/Navbar";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Empleados = () => {
    const role = localStorage.getItem('role');
    const navigate = useNavigate();

    if (role !== 'admin') {
        navigate('/home')
    }

    return (
        <>
            <Navbar></Navbar>
            <div>
                Empleados
            </div>
        </>
    );
}

export default Empleados;
