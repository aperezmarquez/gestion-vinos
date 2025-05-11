const updatePedido = async (id, pedido) => {
    try {
        const response = await fetch(`http://localhost:3500/api/pedidos/${id}`, {
            method: "PATCH",
            body: JSON.stringify(pedido),
            headers: {
                "Content-Type": "application/json"
            }
        })

        if (!response.ok) throw new Error("Error al actualizar el pedido")
        return response.json()
    } catch (error) {
        return error
    }
}

export default updatePedido
