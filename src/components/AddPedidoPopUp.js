import React, { useState } from "react"
import postPedido from "../hooks/postPedido"
import "./AddPedidoPopUp.css"

const AddPedidoPopUp = ({ ref }) => { 
    const [id_cliente, setIdCliente] = useState(null)
    const [cantidad, setCantidad] = useState(0)
    const [tipo, setTipo] = useState("")
    const [precio, setPrecio] = useState(0)

    const handleClose = () => {
        ref.current.close()
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const total = precio * cantidad
        postPedido({
            id_cliente: +id_cliente,
            id_empresa: null,
            cantidad: +cantidad,
            tipo,
            precio: +precio,
            totalIVA: total + (total * 0.21),
            total: +total
        })
        handleClose()
        window.location.reload()
    }

    return (
        <dialog className="add-pedido-popup" ref={ref}>
            <div className="add-pedido-close">
                <p onClick={handleClose}>X</p>
            </div>
            <h1>Registrar un nuevo pedido</h1>
            <form className="add-pedido-form">
                <input type="number" placeholder="ID Cliente" onChange={(e) => setIdCliente(e.target.value)} />
                <input type="number" placeholder="Cantidad" onChange={(e) => setCantidad(e.target.value)} />
                <input type="text" placeholder="Tipo" onChange={(e) => setTipo(e.target.value)} />
                <input type="number" placeholder="Precio" onChange={(e) => setPrecio(e.target.value)} />
                <button onClick={handleSubmit}>Registrar</button>
            </form>
        </dialog>
    )
}

export default AddPedidoPopUp
