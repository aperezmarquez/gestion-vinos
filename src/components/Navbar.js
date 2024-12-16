import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
    const [currentRole, setCurrentRole] = useState('user');
    const navigate = useNavigate();

    useEffect(() => {
        const role = localStorage.getItem('role');
        //setCurrentRole(role);
    }, []);

    return (
        <>
            <div className="navbar">
                <div className="nav-list">
                    <div className="nav-item-home">
                        <Link to="/home" className="link nav-home">Home</Link>
                    </div>
                    {(currentRole === 'user' || currentRole === 'admin') && (
                        <div className="nav-item-pedidos">
                            <Link to="/pedidos" className="link nav-pedidos">Pedidos</Link>
                        </div>
                    )}
                    <div className="nav-item-productos">
                        <Link to="/productos" className="link nav-productos">Productos</Link>
                    </div>
                    {currentRole === 'admin' && (
                        <div className="nav-item-empleados">
                            <Link to="/empleados" className="link nav-empleados">Empleados</Link>
                        </div>
                    )}
                </div>
                <div className="nav-line"></div>
            </div>
        </>
    );
}

export default Navbar;
