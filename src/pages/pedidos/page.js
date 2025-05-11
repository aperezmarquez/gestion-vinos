import Navbar from "../../components/Navbar";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import getPedidos from "../../hooks/getPedidos";
import TarjetaPedido from "../../components/TarjetaPedido";
import AddPedidoPopUp from "../../components/AddPedidoPopUp";
import './pedidos.css'

const Pedidos = () => {
    const [pedidos, setPedidos] = useState([])
    const role = localStorage.getItem('role');
    const navigate = useNavigate();
    const addRef = useRef(null);

    useEffect(() => {
        getPedidos().then((data) => {
            setPedidos(data.pedidos)
        })
    }, [])

    if (role !== 'user' && role !== 'admin') {
        navigate('/home')
    }
    return (
        <>
            <Navbar></Navbar>
            <AddPedidoPopUp ref={addRef} />
            <div className="pedidos">
                <section className="pedidos-top-container">
                    <h1>Pedidos Registrados</h1>
                    <button onClick={() => addRef.current.showModal()}>Crear Pedido</button>
                </section>
                <section className="pedidos-cards-container">
                    {!pedidos &&
                        <p>No hay pedidos registrados</p>
                    }
                    {pedidos && pedidos.map((pedido) => (
                        <TarjetaPedido key={pedido.id} pedido={pedido} />
                    ))}
                </section>
            </div>
        </>
    );
}

export default Pedidos;
