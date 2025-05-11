const updateProducto = async (id, cambios) => {
    console.log(id, cambios)
    const response = await fetch(`http://localhost:3500/api/productos/update/${id}`, {
        method: 'PATCH',
        body: JSON.stringify(cambios),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    if (!response.ok) {
        return { ok: false, status: response.status }
    }

    return response.json()
}

export default updateProducto
