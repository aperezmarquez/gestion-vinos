import React, { useState } from "react"
import postCliente from "../hooks/postEmpleado"
import "./AddEmpleadoPopUp.css"

const AddEmpleadoPopUp = ({ ref }) => {
    const [seguridad_social, setSeguridadSocial] = useState("")
    const [iban, setIban] = useState("")
    const [nombre, setNombre] = useState("")
    const [apellidos, setApellidos] = useState("")
    const [nacimiento, setNacimiento] = useState("")
    const [nif, setNif] = useState("")
    const [domicilio, setDomicilio] = useState("")
    const [telefono, setTelefono] = useState("")
    const [contacto_emergencia, setContactoEmergencia] = useState("")
    const [categoria, setCategoria] = useState("")
    const [ingreso, setIngreso] = useState("")
    const [titulacion, setTitulacion] = useState("")
    const estado = "Activo"
    
    const handleClose = () => {
        ref.current.close()
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await postCliente({
            seguridad_social,
            IBAN: iban,
            NIF: nif,
            nombre,
            apellidos,
            nacimiento,
            domicilio,
            telefono,
            contacto_emergencia,
            categoria,
            ingreso,
            titulacion,
            estado
        })
        handleClose()
        window.location.reload()
    }

    return (
        <dialog className="add-empleado-popup" ref={ref}>
            <div className="add-empleado-close">
                <p onClick={handleClose}>X</p>
            </div>
            <h1>Registrar un nuevo empleado</h1>
            <form className="add-empleado-form">
                <input type="text" placeholder="Seguridad social" onChange={e => setSeguridadSocial(e.target.value)} />
                <input type="text" placeholder="IBAN" onChange={e => setIban(e.target.value)} />
                <input type="text" placeholder="Nombre" onChange={e => setNombre(e.target.value)} />
                <input type="text" placeholder="Apellidos" onChange={e => setApellidos(e.target.value)} />
                <input type="text" placeholder="Nacimiento" onChange={e => setNacimiento(e.target.value)} />
                <input type="text" placeholder="NIF" onChange={e => setNif(e.target.value)} />
                <input type="text" placeholder="Domicilio" onChange={e => setDomicilio(e.target.value)} />
                <input type="text" placeholder="Telefono" onChange={e => setTelefono(e.target.value)} />
                <input type="text" placeholder="Contacto emergencia" onChange={e => setContactoEmergencia(e.target.value)} />
                <input type="text" placeholder="Categoria" onChange={e => setCategoria(e.target.value)} />
                <input type="text" placeholder="Ingreso" onChange={e => setIngreso(e.target.value)} />
                <input type="text" placeholder="Titulacion" onChange={e => setTitulacion(e.target.value)} />
                <button onClick={handleSubmit}>Registrar</button>
            </form>
        </dialog>
    )
}

export default AddEmpleadoPopUp
