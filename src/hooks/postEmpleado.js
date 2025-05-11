const postEmpleado = async(empleado) => {
    try {
        console.log(empleado)
        const response = await fetch('http://localhost:3500/api/empleados', {
            method: 'POST',
            body: JSON.stringify(empleado),
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

export default postEmpleado
