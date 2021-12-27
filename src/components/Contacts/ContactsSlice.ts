import { createSlice } from "@reduxjs/toolkit";
import { addContact, changeContact, deleteContact, fetchContacts } from "./ContactsThunks";


type contactType={
    name: string,
    number: string,
    id: string
}

const initialState:contactType[]=[];

export const contactsSlice=createSlice({
    name: "contatcs",
    initialState,
    reducers: {

    },
    extraReducers: (builder)=>{
        builder
        .addCase(fetchContacts.pending, (state, action)=>{
        })
        .addCase(fetchContacts.fulfilled, (state, {payload})=>{
            return payload;
        })
        .addCase(fetchContacts.rejected, (state, action)=>{
            debugger;
        })
        .addCase(addContact.pending, (state, action)=>{
        })
        .addCase(addContact.fulfilled, (state, {payload})=>{
            state.push(payload)
        })
        .addCase(addContact.rejected, (state, action)=>{
        })
        .addCase(deleteContact.pending, (state, action)=>{
        })
        .addCase(deleteContact.fulfilled, (state, {payload})=>{
           state.splice(payload, 1);
        })
        .addCase(deleteContact.rejected, (state, action)=>{
        })
        .addCase(changeContact.pending, (state, action)=>{
        })
        .addCase(changeContact.fulfilled, (state, {payload})=>{
           return state.map((contact)=>{
               if(contact.id!==payload.id){
                   return contact;
               }
               return payload;
           })
        })
        .addCase(changeContact.rejected, (state, action)=>{
        })
        
    }
    }
);


export const selectContacts=(state:any)=> state.contacts;

