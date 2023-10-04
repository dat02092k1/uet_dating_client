import axios from "axios"
import { User } from "../types/types"

const URL_BASE = 'https://jsonplaceholder.typicode.com/users'
const headers = { 'Content-type': 'application/json' }

export const getUsers = async (): Promise<User[]> => {
    return await (await axios.get(URL_BASE, { headers })).data
}

export const createUser = async (user: Omit<User, 'id'>): Promise<User> => {
    const body = JSON.stringify(user)
    return await (await axios.post(URL_BASE, { body, headers })).data
}

export const editUser = async (user: User): Promise<User> => {
    const body = JSON.stringify(user)
    return await (await axios.put(`${URL_BASE}/${user.id}`, { body, headers })).data
}

export const deleteUser = async (id: number): Promise<number> => {
    await axios.delete(`${URL_BASE}/${id}`)
    return id; 
}
