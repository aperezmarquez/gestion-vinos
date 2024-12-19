import './TarjetaProducto.css'

const tarjetaProducto = ({ cosecha, precio_euros, descripcion, cantidad }) => {
    return (
        <>
            <div className="card">
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

export default tarjetaProducto;
