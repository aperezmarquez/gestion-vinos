const getPedidos = async() => {
    try {
        const pedidos = await fetch('http://localhost:3500/api/pedidos', {
            method: 'GET',
        })
        if(!pedidos.ok) throw new Error('Error al consultar los pedidos')
        return await pedidos.json()
    } catch (error) {
        return error
    }
}

export default getPedidos
