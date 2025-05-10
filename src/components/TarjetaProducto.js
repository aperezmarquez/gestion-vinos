import React from "react"
import { useRef } from "react"
import EditProductPopUp from "./EditProductPopUp"
import './TarjetaProducto.css'

const TarjetaProducto = ({ key, cosecha, precio_euros, descripcion, cantidad }) => {
    const editRef = useRef(null)

    const handleClick = () => {
        editRef.current.showModal()
    }

    return (
        <>
            <EditProductPopUp 
                ref={editRef}
                key={key}
                cosecha={cosecha}
                precio_euros={precio_euros}
                descripcion={descripcion}
                cantidad={cantidad}
            />
            <div className="card" onClick={handleClick}>
                <div className="card-cosecha">{cosecha}</div>
                <div className="card-descripcion">{descripcion}</div>
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
