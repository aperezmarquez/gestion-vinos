const getEmpleados = async() => {
    try {
        const empleados = await fetch('http://localhost:3500/api/empleados', {
            method: 'GET',
        })
        if(!empleados.ok) throw new Error('Error al consultar los empleados')
        return await empleados.json()
    } catch (error) {
        return error
    }
}

export default getEmpleados
