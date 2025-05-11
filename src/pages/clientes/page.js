import Navbar from "../../components/Navbar";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import getClientes from "../../hooks/getClientes";
import TarjetaCliente from "../../components/TarjetaCliente";
import AddClientPopUp from "../../components/AddClientPopUp";
import './clientes.css'

const Clientes = () => {
    const [clientes, setClientes] = useState([])
    const role = localStorage.getItem('role');
    const navigate = useNavigate();
    const addRef = useRef(null);

    useEffect(() => {
        getClientes().then((data) => {
            setClientes(data.clientes)
        })
    }, [])

    if (role !== 'user' && role !== 'admin') {
        navigate('/home')
    }
    return (
        <>
            <Navbar></Navbar>
            <AddClientPopUp ref={addRef} />
            <div className="clientes">
                <section className="clientes-top-container">
                    <h1>Clientes Registrados</h1>
                    <button onClick={() => addRef.current.showModal()}>Crear Cliente</button>
                </section>
                <section className="clientes-cards-container">
                    {!clientes &&
                        <p>No hay clientes registrados</p>
                    }
                    {clientes && clientes.map((cliente) => (
                        <TarjetaCliente key={cliente.id} cliente={cliente} />
                    ))}
                </section>
            </div>
        </>
    );
}

export default Clientes;
