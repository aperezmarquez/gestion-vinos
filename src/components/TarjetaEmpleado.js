import React, { useRef, useState } from "react"
import EditEmpleadoPopUp from "./EditEmpleadoPopUp"
import "./TarjetaEmpleado.css"

const TarjetaEmpleado = ({ empleado }) => {
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
            <EditEmpleadoPopUp ref={editRef} empleado={empleado} isOpen={isOpen} setIsOpen={setIsOpen} />
            <div className="card-empleado" onClick={handleClick}>
                <h1>{empleado.nombre} {empleado.apellidos}</h1>
                <div className="info-empleado">
                    <p>Tlf: {empleado.telefono}</p>
                    <p>Categoria: {empleado.categoria}</p>
                </div>
            </div>
        </>
    )
}

export default TarjetaEmpleado
