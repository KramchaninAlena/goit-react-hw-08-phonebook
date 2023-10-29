import axios from 'axios'



export const getContacts = async () => {
    const {data} = await axios.get('contacts')
    return data
};

export const fetchAddContact = async (contact) => {
    const {data} = await axios.post('contacts', contact)
    return data
};

export const fetchDeleteContact = async (id) => {
    const {data} = await axios.delete(`contacts/${id}`)
    return data
};

