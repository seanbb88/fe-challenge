import axios from 'axios'; 



export const fetchPartsList = async (page: number) => {
    const response = await axios.get(`http://localhost:5000/parts?page=${page}`)
    return response
}

export const updatePartsQty = async (id: number, quantity: string) => {
    const response = axios.put(`http://localhost:5000/parts/${id}`, {
        quantity: quantity
    })
    return response   
}