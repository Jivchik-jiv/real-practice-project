import { createAsyncThunk } from "@reduxjs/toolkit";
import contactsApi from "./ContactsApi";


type contactType={
    name: string,
    number: string
}

export const fetchContacts=createAsyncThunk('fetchContacts',()=>{
    return contactsApi.fetchContacts().then(response=>response).catch(error=>error)
});


export const addContact=createAsyncThunk('addContact',(contact: contactType)=>{

  return  contactsApi.addContact(contact).then(response=>response).catch(error=>error);
});


export const deleteContact=createAsyncThunk('deleteContact',({id, index}:{id: string, index: number})=>{
   return contactsApi.deleteContact(id).then(()=>index).catch(error=>error)
});


export const changeContact=createAsyncThunk('changeContact',(contact: {name: string, number: string, id: string})=>{

    let contactObj={name: contact.name, number: contact.number}
    return contactsApi.changeContact(contact.id, contactObj).then(response=>response.data).catch(error=>error)
});
