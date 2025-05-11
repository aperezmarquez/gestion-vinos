const postCliente = async(cliente) => {
    try {
        console.log(cliente)
        const response = await fetch('http://localhost:3500/api/clientes', {
            method: 'POST',
            body: JSON.stringify(cliente),
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

export default postCliente
