import React, { useRef, useState } from "react"
import EditPedidoPopUp from "./EditPedidoPopUp"
import "./TarjetaPedido.css"

const TarjetaPedido = ({ pedido }) => {
    const [isOpen, setIsOpen] = useState(false)
    const editRef = useRef(null)
    
    const handleClick = () => {
        setIsOpen(true)
        setTimeout(() => {
            editRef.current.showModal()
        }, 1);
    }

    return (
        <>
            <EditPedidoPopUp ref={editRef} pedido={pedido} isOpen={isOpen} setIsOpen={setIsOpen} />
            <div className="card-pedido" onClick={handleClick}>
                <h1>{pedido.tipo}</h1>
                <div className="info-pedido">
                    <p>Cantidad: {pedido.cantidad}</p>
                    <p>Totla + IVA: {pedido.totalIVA}€</p>                   
                </div>
            </div>
        </>
    )
}

export default TarjetaPedido
