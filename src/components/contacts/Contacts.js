import React, { Component } from 'react';
import Contact from './Contact'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { getContacts } from '../../actions/contactAction';
 
class Contacts extends Component {
componentDidMount(){
    this.props.getContacts();
}


render() {
        const {contacts} = this.props;
        return (
            <React.Fragment>
                    <h1 className="display-4 mb-2">
                        <span className="text-danger">contact</span>list
                    </h1>
                {contacts.map(contact =>(
                    <Contact  key ={contact.id} 
                    contact ={contact} />
                ))}
            </React.Fragment>

                   )
               
   
        
        // const {contacts} = this.state;
        // return (
        //     return (
        //         <React.Fragment>
        //     {contacts.map(contact =>(
        //         <Contact  key ={contact.id} 
        //         contact ={contact} deleteClickHandler={this.deleteContact.bind(this,contact.id)}/>
        //     ))}
        // </React.Fragment>
            
        // )
    }
}

Contacts.propTypes={
    contacts : PropTypes.array.isRequired,
    getContacts:PropTypes.func.isRequired
}

const mapStateToProps = state => ({
contacts: state.contact.contacts
});


export default connect( 
    mapStateToProps,
    {getContacts}
    )(Contacts);
