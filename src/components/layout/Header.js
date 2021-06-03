import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

 const Header = (props) => {
     const {branding} = props;
    return (
       
        <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
        <div className="container">
            <a href ="/" className ="navbar-brand">
                {branding}
            </a>
            <ul className="navbar-nav mr-auto">
            <li className ="nav-item">
            <i className="fas fa-home" />
                <Link to="/" className="nav-link">Home</Link>
            </li>

            <li className ="nav-item">
            <i className="fas fa-plus" />
                <Link to="/contact/add" className="nav-link">Add</Link>
            </li>

            <li className ="nav-item">
            <i className="fas fa-question" />
                <Link to="/about" className="nav-link">About</Link>
            </li>

            </ul>
        </div>

        </nav> 
    );
}

Header.defaultProps = {
    branding : 'MyApp'
};
Header.protoType ={
    branding : PropTypes.string.isRequired
}

export default Header;