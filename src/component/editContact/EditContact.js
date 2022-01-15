import React , {useState, useEffect} from 'react';
import './EditContact.css'
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { edit_contact } from '../../actions/contactActions';
import { Link } from 'react-router-dom';
import { validationForm } from '../../validation/validation';


const EditContact = () => {

    const { id } = useParams();

    const { contacts } = useSelector((state) => state)

    const dispatch = useDispatch();

    let navigate = useNavigate();

    const editContact = contacts.find( contact => contact.id == parseInt(id) )

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [errors, setErrors] = useState({});
    const [ isSubmitted , setIsSubmitted ] = useState(false);

    

    
    const submitHandler = (e) => {
        e.preventDefault();

        setErrors(validationForm( {name , email , phone} , contacts ));

        setIsSubmitted(true);
    }

    
    useEffect(() => {
        if(editContact){
            setName(editContact.name);
            setEmail(editContact.email);
            setPhone(editContact.phone);
        }
    } , [editContact]);

    useEffect(() => {
        if(Object.keys(errors).length === 0 && isSubmitted === true ){
            const updateContact = {
                id: editContact.id, 
                name ,
                email , 
                phone 
            }
            dispatch(edit_contact(updateContact));
            navigate("/");
        }
    } , [ errors]);

    

    return (
        <div className="edit-section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-9">
                        {editContact ? 
                            (
                                <div>
                                    <h2 className="form-heading"> edit contact {id}</h2>
                                    <form onSubmit={submitHandler}>
                                        <div className="form-group">
                                            <input 
                                                type="text" 
                                                className="form-control" 
                                                placeholder="Enter name" 
                                                value={name}
                                                onChange={ (e) => setName(e.target.value) }
                                            />
                                            { errors.name ? <p className="text-danger"> {errors.name} </p> : null } 
                                        </div>
                                        <div className="form-group">
                                            <input 
                                                type="email" 
                                                className="form-control" 
                                                placeholder="Enter email" 
                                                value={email}
                                                onChange={ (e) => setEmail(e.target.value) }
                                            />
                                            { errors.email ? <p className="text-danger"> {errors.email} </p> : null } 
                                        </div>
                                        <div className="form-group">
                                            <input 
                                                type="text" 
                                                className="form-control" 
                                                placeholder="Enter phone" 
                                                value={phone}
                                                onChange={ (e) => setPhone(e.target.value) }
                                            />
                                            { errors.phone ? <p className="text-danger"> {errors.phone} </p> : null } 
                                        </div>
                                        <button type="submit" className="btn btn-primary"> Submit </button>
                                        <Link to='/' className="text-primary"> cancel </Link>
                                    </form>
                                </div>
                             )
                        : <h2 className="form-heading"> contact not found </h2> }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditContact;