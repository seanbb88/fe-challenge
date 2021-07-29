import axios from 'axios'; 



export const fetchPartsList = async (page: number) => {
    const response = await axios.get(`http://0.0.0.0:5555/parts?page=${page}`)
    return response
}

export const updatePartsQty = async (id: number, quantity: string) => {
    const response = axios.put(`http://0.0.0.0:5555/parts/${id}`, {
        quantity: quantity
    })
    return response   
}