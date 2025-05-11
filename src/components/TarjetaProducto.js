import React from "react"
import { useRef } from "react"
import EditProductPopUp from "./EditProductPopUp"
import './TarjetaProducto.css'

const TarjetaProducto = ({ id, tipo, cosecha, precio_euros, precio_dolares, descripcion, cantidad }) => {
    const editRef = useRef(null)

    const handleClick = () => {
        editRef.current.showModal()
    }

    return (
        <>
            <EditProductPopUp 
                ref={editRef}
                id={id}
                tipo={tipo}
                cosecha={cosecha}
                precio_euros={precio_euros}
                precio_dolares={precio_dolares}
                descripcion={descripcion}
                cantidad={cantidad}
            />
            <div className="card" onClick={handleClick}>
                <div className="card-cosecha">{cosecha}</div>
                <div className="card-descripcion">{tipo}</div>
                <hr className="card-divider" />
                <div className="card-footer">
                    <div className="card-precio"><span>€</span>{precio_euros}</div>
                    <div className="card-cantidad">Botellas disponibles: {cantidad}</div>
                </div>
            </div>
        </>
    )
}

export default TarjetaProducto;
