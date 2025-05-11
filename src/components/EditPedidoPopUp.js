import React, { useState } from "react"
import updatePedido from "../hooks/updatePedido"
import "./EditPedidoPopUp.css"

const EditPedidoPopUp = ({ pedido, isOpen, setIsOpen, ref}) => { 
    const [cantidad, setCantidad] = useState(pedido.cantidad)
    const [tipo, setTipo] = useState(pedido.tipo)
    const [precio, setPrecio] = useState(pedido.precio)

    const handleClose = () => {
        ref.current.close()
        setIsOpen(false)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const total = cantidad * precio

        const updatedPedido = {
            cantidad: +cantidad,
            tipo: tipo,
            precio: +precio,
            totalIVA: total + (total * 0.21),
            total: +total
        }

        const response = updatePedido(pedido.id, updatedPedido)

        ref.current.close()
        setIsOpen(false)
        window.location.reload()
    } 

    return (
        <>
            {isOpen && (
            <dialog className="edit-pedido-popup" ref={ref}>
                <section className="edit-pedido-popup-content">
                    <div className="edit-pedido-popup-close">
                        <p onClick={handleClose}>X</p>
                    </div>
                    <h1>Editar Pedido</h1>
                </section>
                <form className="edit-pedido-form"> 
                    <input type="number" value={cantidad} placeholder="Cantidad" onChange={(e) => setCantidad(e.target.value)} />
                    <input type="text" value={tipo} placeholder="Tipo" onChange={(e) => setTipo(e.target.value)} />
                    <input type="number" value={precio} placeholder="Precio" onChange={(e) => setPrecio(e.target.value)} />
                    <button onClick={handleSubmit}>Guardar</button>
                </form>
            </dialog>
            )}
        </>
    )
}

export default EditPedidoPopUp
