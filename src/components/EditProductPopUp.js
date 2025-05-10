import React, { useState } from "react"
import "./EditProductPopUp.css"

const EditProductPopUp = ({ ref, key, cosecha, precio_euros, descripcion, cantidad }) => {
    const [precio, setPrecio] = useState(precio_euros)
    const [cantidad_producto, setCantidad] = useState(cantidad)
    
    const handleClose = () => {
        ref.current.close()
    }

    const handleSubmit = () => {
        console.log("Cambios guardados")    
    }

    return (
        <>
            <dialog className="edit-product-popup" ref={ref}>
                <section className="edit-product-popup-content">
                    <div className="edit-product-popup-close">
                        <p onClick={handleClose}>X</p>
                    </div>
                    <h1>{descripcion}</h1>
                    <p>Cosecha: {cosecha}</p>
                </section>
                <form className="edit-product-popup-form">
                    <div className="edit-product-popup-form quantity">
                        <label>Numero de botellas disponibles: </label>
                        <input type="text" value={cantidad_producto} onChange={e => setCantidad(e.target.value)} />
                    </div>
                    <div className="edit-product-popup-form price">
                        <label>Precio por botella: </label>
                        <input type="text" value={precio} onChange={e => setPrecio(e.target.value)} />
                    </div>
                    <button className="edit-product-popup-form-button" type="submit" onClick={handleSubmit}>Guardar cambios</button>
                </form>
            </dialog>
        </>
    )
}

export default EditProductPopUp
