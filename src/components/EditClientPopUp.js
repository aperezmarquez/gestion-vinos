import React, { useState } from "react"
import updateCliente from "../hooks/updateCliente"
import "./EditClientPopUp.css"

const EditClientPopUp = ({ cliente, isOpen, setIsOpen, ref}) => {
    const [nombre, setNombre] = useState(cliente.nombre)
    const [apellidos, setApellidos] = useState(cliente.apellidos)
    const [nif, setNIF] = useState(cliente.NIF)
    const [direccion, setDireccion] = useState(cliente.direccion)
    const [telefono, setTelefono] = useState(cliente.telefono)
    const [cumpleaños, setCumpleanos] = useState(cliente.cumpleaños)

    const handleClose = () => {
        ref.current.close()
        setIsOpen(false)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const updatedClient = {
            nombre,
            apellidos,
            NIF: nif,
            direccion,
            telefono,
            cumpleaños
        }

        const response = updateCliente(cliente.id, updatedClient)

        ref.current.close()
        setIsOpen(false)
        window.location.reload()
    } 

    return (
        <>
            {isOpen && (
            <dialog className="edit-client-popup" ref={ref}>
                <section className="edit-client-popup-content">
                    <div className="edit-client-popup-close">
                        <p onClick={handleClose}>X</p>
                    </div>
                    <h1>Editar Cliente</h1>
                </section>
                <form className="edit-client-form">
                    <input type="text" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                    <input type="text" placeholder="Apellidos" value={apellidos} onChange={(e) => setApellidos(e.target.value)} />
                    <input type="text" placeholder="NIF" value={nif} onChange={(e) => setNIF(e.target.value)} />
                    <input type="text" placeholder="Direccion" value={direccion} onChange={(e) => setDireccion(e.target.value)} />
                    <input type="text" placeholder="Telefono" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                    <input type="date" placeholder="Cumpleaños" value={cumpleaños} onChange={(e) => setCumpleanos(e.target.value)} />
                    <button onClick={handleSubmit}>Guardar</button>
                </form>
            </dialog>
            )}
        </>
    )
}

export default EditClientPopUp
