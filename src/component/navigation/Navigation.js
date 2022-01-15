import React from 'react';
import './Navigation.css'
import { Link } from "react-router-dom";


const Navigation = () => {
    return (
        <div className="navigation-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="logo-box">
                            <Link to="/"> logo here </Link>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="navi-link">
                            <Link to="/add"> Add Contact </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navigation;