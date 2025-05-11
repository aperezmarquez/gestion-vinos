import Navbar from "../../components/Navbar";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import getEmpleados from "../../hooks/getEmpleados";
import TarjetaEmpleado from "../../components/TarjetaEmpleado";
import AddEmpleadoPopUp from "../../components/AddEmpleadoPopUp";
import './empleados.css'

const Empleados = () => {
    const [empleados, setEmpleados] = useState([])
    const role = localStorage.getItem('role');
    const navigate = useNavigate();
    const addRef = useRef(null);

    useEffect(() => {
        getEmpleados().then((data) => {
            setEmpleados(data.empleados)
        })
    }, [])

    if (role !== 'user' && role !== 'admin') {
        navigate('/home')
    }
    return (
        <>
            <Navbar></Navbar>
            <AddEmpleadoPopUp ref={addRef} />
            <div className="empleados">
                <section className="empleados-top-container">
                    <h1>Registro de Empleados</h1>
                    <button onClick={() => addRef.current.showModal()}>Registrar Empleado</button>
                </section>
                <section className="empleados-cards-container">
                    {!empleados &&
                        <p>No hay empleados registrados</p>
                    }
                    {empleados && empleados.map((empleado) => (
                        <TarjetaEmpleado key={empleado.id} empleado={empleado} />
                    ))}
                </section>
            </div>
        </>
    );
}

export default Empleados;
