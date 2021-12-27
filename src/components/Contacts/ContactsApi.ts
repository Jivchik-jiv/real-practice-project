import axios from "axios";


const contactsApi={
    fetchContacts(){
        return axios.get('/contacts')
        .then(response=>response.data)
        .catch(error=>error)
    },
    addContact(contact:{name: string, number: string}){
        return axios.post('/contacts', contact)
        .then(response=>response.data)
        .catch(error=>error)
    },
    deleteContact(contactId: string){
        return axios.delete(`/contacts/${contactId}`)
        .then(response=>response)
        .catch(error=>error)
    },
    changeContact(contactId: string, contact: {name: string, number: string}){
        return axios.patch(`/contacts/${contactId}`, contact)
        .then(response=>response)
        .catch(error=>error)
    }
    
}


export default contactsApi;