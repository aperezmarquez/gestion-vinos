import React, { useState } from "react"
import postProducto from "../hooks/postProducto"
import "./AddProductPopUp.css"

const AddProductPopUp = ({ ref }) => {
    const [tipo, setType] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const [cosecha, setCosecha] = useState("")
    const [cantidad, setCantidad] = useState("")
    const [precio_euros, setPrecioEuros] = useState("")
    const [precio_dolares, setPrecioDolares] = useState("")

    const handleClose = () => {
        ref.current.close()
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        postProducto({
            descripcion: descripcion,
            precio_euros: +precio_euros,
            precio_dolares: +precio_dolares,
            tipo: tipo,
            cosecha: cosecha,
            cantidad: +cantidad
        })
    }

    return (
        <>
            <dialog className="add-product-dialog" ref={ref}>
                <div className="add-product-close">
                    <p onClick={handleClose}>X</p>
                </div>
                <h1>Añade un nuevo producto</h1>
                <form className="add-product-form">
                    <input className="type" type="text" placeholder="Tipo de vino" onChange={e => setType(e.target.value)} />
                    <input className="descripcion" type="text" placeholder="Descripcion" onChange={e => setDescripcion(e.target.value)} />
                    <input className="cosecha" type="text" placeholder="Año de cosecha" onChange={e => setCosecha(e.target.value)} />
                    <input className="cantidad" type="text" placeholder="Cantidad de botellas" onChange={e => setCantidad(e.target.value)} />
                    <input className="precio-euros" type="text" placeholder="Precio por botella en euros" onChange={e => setPrecioEuros(e.target.value)} />
                    <input className="precio-dolares" type="text" placeholder="Precio por botella en dolares" onChange={e => setPrecioDolares(e.target.value)} />
                    <button onClick={handleSubmit}>Añadir producto</button>
                </form>
            </dialog>
        </>
    )
}

export default AddProductPopUp
