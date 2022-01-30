import axios from 'axios'

const url = 'http://127.0.0.1:3003/contacts'

export const getContacts = async id => {
    id = id || ''
    return await axios.get(`${url}/${id}`)
}

export const addContact = async contact => {
    return await axios.post(url, contact)
}

export const editUser = async (id, contact) => {
    return await axios.put(`${url}/${id}`, contact)
}

export const deleteUser = async id => {
    return await axios.delete(`${url}/${id}`)
}