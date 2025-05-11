const updateProducto = async (id, cambios) => {
    const response = await fetch(`http://localhost:3500/productos/update/${id}`, {
        METHOD: 'PATCH',
        BODY: JSON.stringify(cambios),
        HEADERS: {
            'Content-Type': 'application/json'
        }
    })

    if (!response.ok) {
        return { ok: false, status: response.status }
    }

    return response.json()
}

export default updateProducto
