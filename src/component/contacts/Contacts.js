import React from 'react';
import './Contacts.css'
import Contact from '../contact/Contact'
import { useSelector } from 'react-redux'

const Contacts = () => {

    const { contacts } = useSelector((state) => state)


    return (
        <div className="contacts-section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-9">
                        <table className="table">
                            <thead className="thead-dark">
                                <tr>
                                <th scope="col">id</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone</th>
                                <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <Contact contacts={contacts} />
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacts;