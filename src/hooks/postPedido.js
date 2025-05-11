const postPedido = async(pedido) => {
    try {
        const response = await fetch('http://localhost:3500/api/pedidos', {
            method: 'POST',
            body: JSON.stringify(pedido),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if (!response.ok) {
            return response
        }

        return response.json()
    } catch (error) {
        return error   
    } 
}

export default postPedido
