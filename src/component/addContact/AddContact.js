import React, { useState , useEffect} from 'react';
import './AddContact.css'
import { useSelector , useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { add_contact } from '../../actions/contactActions'
import { validationForm } from '../../validation/validation';


const AddContact = ( ) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [errors, setErrors] = useState({});
    const [ isSubmitted , setIsSubmitted ] = useState(false);


    const { contacts } = useSelector((state) => state);

    const dispatch = useDispatch()

    let navigate = useNavigate();

    const submitHandler = (e) => {

        e.preventDefault();

        setErrors(validationForm( {name , email , phone} , contacts ));

        setIsSubmitted(true);

    }

    useEffect( () => {
        if(Object.keys(errors).length === 0 && isSubmitted === true ){
            const newContact = {
                id: contacts.length + 1, 
                name ,
                email , 
                phone 
            }
            dispatch(add_contact(newContact));
            navigate("/");
        }
    } , [errors])


    return (
        <div className="add-section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-9">
                        <h2 className="form-heading"> add new contact </h2>
                        <form onSubmit={submitHandler}>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Enter name" 
                                    onChange={ (e) => setName(e.target.value) }
                                />
                                { errors.name ? <p className="text-danger"> {errors.name} </p> : null } 
                            </div>
                            <div className="form-group">
                                <input 
                                    type="email" 
                                    className="form-control" 
                                    placeholder="Enter email" 
                                    onChange={ (e) => setEmail(e.target.value) }
                                />
                                { errors.email ? <p className="text-danger"> {errors.email} </p> : null } 
                            </div>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Enter phone" 
                                    onChange={ (e) => setPhone(e.target.value) }
                                />
                                { errors.phone ? <p className="text-danger"> {errors.phone} </p> : null } 
                            </div>
                            <button type="submit" className="btn btn-primary"> Submit </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddContact;