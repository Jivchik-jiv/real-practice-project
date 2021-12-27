import { configureStore } from "@reduxjs/toolkit"
import { authSlice } from "../components/Auth/AuthSlice";
import { contactsSlice } from "../components/Contacts/ContactsSlice";



const store=configureStore({
    reducer: {
        auth: authSlice.reducer,
        contacts: contactsSlice.reducer
    }
});


export default store;