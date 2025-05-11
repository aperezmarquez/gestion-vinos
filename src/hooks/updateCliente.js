const updateCliente = async (id, cliente) => {
    try {
        const response = await fetch(`http://localhost:3500/api/clientes/${id}`, {
            method: "PATCH",
            body: JSON.stringify(cliente),
            headers: {
                "Content-Type": "application/json"
            }
        })

        if (!response.ok) throw new Error("Error al actualizar el cliente")
        return response.json()
    } catch (error) {
        return error
    }
}

export default updateCliente
