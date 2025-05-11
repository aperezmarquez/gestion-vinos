const postProducto = async (producto) => {
    try {
        const res = await fetch('http://localhost:3500/api/productos/postProducto', {
            method: 'POST',
            body: JSON.stringify(producto),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if (!res.ok) {
            const errorData = await res.json()
            throw new Error(errorData.error || 'Error al enviar el producto')
        }

        return await res.json()
    } catch (err) {
        console.error('Error en postProducto:', err)
    }
}

export default postProducto

