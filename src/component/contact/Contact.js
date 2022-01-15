import React from 'react';
import './Contact.css';
import { Link } from "react-router-dom";
import {  useDispatch } from 'react-redux'
import { delete_contact } from '../../actions/contactActions'


const Contact = ( {contacts}) => {

    const dispatch = useDispatch()


    const deleteHandler = (id) => {
        dispatch(delete_contact(id));
    }
    return (
        contacts.map( contact => { 
            return(
                <tr key={contact.id}>
                    <th scope="row">{contact.id}</th>
                    <td>{contact.name}</td>
                    <td>{contact.email}</td>
                    <td>{contact.phone}</td>
                    <td>
                        <Link to={`/edit/${contact.id}`} className="btn btn-info"> edit </Link>
                        <span className="btn btn-danger" onClick={ () => deleteHandler(contact.id)} > delete </span>
                    </td>
                </tr>
            )
        } )
    );
};

export default Contact;