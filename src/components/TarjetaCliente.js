import React, { useRef, useState } from "react"
import EditClientPopUp from "./EditClientPopUp"
import "./TarjetaCliente.css"

const TarjetaCliente = ({ cliente }) => {
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
            <EditClientPopUp ref={editRef} cliente={cliente} isOpen={isOpen} setIsOpen={setIsOpen} />
            <div className="card-cliente" onClick={handleClick}>
                <h1>{cliente.nombre} {cliente.apellidos}</h1>
                <div className="info-cliente">
                    <p>Tlf: {cliente.telefono}</p>
                    <p>Cumpleaños: {cliente.cumpleaños}</p>
                </div>
            </div>
        </>
    )
}

export default TarjetaCliente
