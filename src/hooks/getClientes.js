const getClientes = async() => {
    try {
        const clientes = await fetch('http://localhost:3500/api/clientes', {
            method: 'GET',
        })
        if(!clientes.ok) throw new Error('Error al consultar los clientes')
        return await clientes.json()
    } catch (error) {
        return error
    }
}

export default getClientes
