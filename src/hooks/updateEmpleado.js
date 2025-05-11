const updateEmpleado = async (id, empleado) => {
    try {
        const response = await fetch(`http://localhost:3500/api/empleados/${id}`, {
            method: "PATCH",
            body: JSON.stringify(empleado),
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

export default updateEmpleado
