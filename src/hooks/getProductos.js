const getProductos = async() => {
    try {
        const response = await fetch('http://localhost:3500/api/productos', {
            METHOD: 'GET',
            HEADERS: {
                'Content-Type': 'application/json'
            }
        })

        if (!response.ok) {
            throw new Error('Network response was not ok')
        }

        return response.json()
    } catch (error) {
        return error
    }
}

export default getProductos
