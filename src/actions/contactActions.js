import { ADD_CONTACT , EDIT_CONTACT , DELETE_CONTACT } from "./types"


export const add_contact = (newContact) => {
    return{
        type: ADD_CONTACT , 
        payload: newContact
    }
}

export const delete_contact = (id) => {
    return{
        type: DELETE_CONTACT , 
        payload: id
    }
}
export const edit_contact = (contact) => {
    return{
        type: EDIT_CONTACT , 
        payload: contact
    }
}