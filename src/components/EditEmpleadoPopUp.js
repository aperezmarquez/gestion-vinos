import React, { useState } from "react"
import updateEmpleado from "../hooks/updateEmpleado"
import "./EditEmpleadoPopUp.css"

const EditEmpleadoPopUp = ({ empleado, isOpen, setIsOpen, ref}) => {
    const [seguridad_social, setSeguridadSocial] = useState(empleado.seguridad_social)
    const [iban, setIban] = useState(empleado.IBAN)
    const [nif, setNif] = useState(empleado.NIF)
    const [nombre, setNombre] = useState(empleado.nombre)
    const [apellidos, setApellidos] = useState(empleado.apellidos)
    const [nacimiento, setNacimiento] = useState(empleado.nacimiento)
    const [domicilio, setDomicilio] = useState(empleado.domicilio)
    const [telefono, setTelefono] = useState(empleado.telefono)
    const [contacto_emergencia, setContactoEmergencia] = useState(empleado.contacto_emergencia)
    const [categoria, setCategoria] = useState(empleado.categoria)
    const [ingreso, setIngreso] = useState(empleado.ingreso)
    const [titulacion, setTitulacion] = useState(empleado.titulacion)
    const [estado, setEstado] = useState(empleado.estado)
    
    const handleClose = () => {
        ref.current.close()
        setIsOpen(false)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const updatedEmpleado = {
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
        }

        await updateEmpleado(empleado.id, updatedEmpleado)

        ref.current.close()
        setIsOpen(false)
        window.location.reload()
    } 

    return (
        <>
            {isOpen && (
            <dialog className="edit-empleado-popup" ref={ref}>
                <section className="edit-empleado-popup-content">
                    <div className="edit-empleado-popup-close">
                        <p onClick={handleClose}>X</p>
                    </div>
                    <h1>Editar Empleado</h1>
                </section>
                <form className="edit-empleado-form">
                    <input type="text" placeholder="Seguridad Social" value={seguridad_social} onChange={(e) => setSeguridadSocial(e.target.value)} />
                    <input type="text" placeholder="IBAN" value={iban} onChange={(e) => setIban(e.target.value)} />
                    <input type="text" placeholder="NIF" value={nif} onChange={(e) => setNif(e.target.value)} />
                    <input type="text" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                    <input type="text" placeholder="Apellidos" value={apellidos} onChange={(e) => setApellidos(e.target.value)} />
                    <input type="text" placeholder="Nacimiento" value={nacimiento} onChange={(e) => setNacimiento(e.target.value)} />
                    <input type="text" placeholder="Domicilio" value={domicilio} onChange={(e) => setDomicilio(e.target.value)} />
                    <input type="text" placeholder="Telefono" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                    <input type="text" placeholder="Contacto Emergencia" value={contacto_emergencia} onChange={(e) => setContactoEmergencia(e.target.value)} />
                    <input type="text" placeholder="Categoria" value={categoria} onChange={(e) => setCategoria(e.target.value)} />
                    <input type="text" placeholder="Ingreso" value={ingreso} onChange={(e) => setIngreso(e.target.value)} />
                    <input type="text" placeholder="Titulacion" value={titulacion} onChange={(e) => setTitulacion(e.target.value)} />
                    <select value={estado} onChange={(e) => setEstado(e.target.value)}>
                        <option value="Activo">Activo</option>
                        <option value="Inactivo">Inactivo</option>
                    </select>
                    <button onClick={handleSubmit}>Guardar</button>
                </form>
            </dialog>
            )}
        </>
    )
}

export default EditEmpleadoPopUp
