import React, { useState } from "react"
import postCliente from "../hooks/postCliente"
import "./AddClientPopUp.css"

const AddClientPopUp = ({ ref }) => {
    const [nombre, setNombre] = useState("")
    const [apellidos, setApellidos] = useState("")
    const [nif, setNif] = useState("")
    const [direccion, setDireccion] = useState("")
    const [telefono, setTelefono] = useState("")
    const [cumpleaños, setCumple] = useState("")

    const handleClose = () => {
        ref.current.close()
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        postCliente({
            nombre,
            apellidos,
            NIF: nif,
            direccion,
            telefono,
            cumpleaños
        })
        handleClose()
        window.location.reload()
    }

    return (
        <dialog className="add-client-popup" ref={ref}>
            <div className="add-client-close">
                <p onClick={handleClose}>X</p>
            </div>
            <h1>Registrar un nuevo cliente</h1>
            <form className="add-client-form">
                <input type="text" placeholder="Nombre" onChange={e => setNombre(e.target.value)} />
                <input type="text" placeholder="Apellidos" onChange={e => setApellidos(e.target.value)} />
                <input type="text" placeholder="NIF" onChange={e => setNif(e.target.value)} />
                <input type="text" placeholder="Direccion" onChange={e => setDireccion(e.target.value)} />
                <input type="text" placeholder="Teléfono" onChange={e => setTelefono(e.target.value)} />
                <input type="text" placeholder="Fecha de nacimiento" onChange={e => setCumple(e.target.value)} />
                <button onClick={handleSubmit}>Registrar</button>
            </form>
        </dialog>
    )
}

export default AddClientPopUp
