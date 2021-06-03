import React, { Component } from 'react';

//import {v4 as uuid} from 'uuid';
import TextInputGroup from '../layout/TextInputGroup';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getContact,updateContact} from '../../actions/contactAction';



class EditContact extends Component {
    state={
        name:'',
        email:'',
        phone:'',
        errors :{}
    };

    componentWillReceiveProps(nextProps,nextState){
        const {name,email,phone} =nextProps.contact;
        this.setState({
            name,
            email,
            phone
        })
    }

    componentDidMount(){
        const { id } =this.props.match.params;
        this.props.getContact(id);
    }

    // async componentDidMount(){
    //     const {id} = this.props.match.params;
    //     const res= await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
       
    //     const contact =res.data;
    //     console.log(contact);
    //     this.setState({
    //         name:contact.name,
    //         email:contact.email,
    //         phone:contact.phone
    //     });    
    // }

    // async componentDidMount(){
        
    //     const res = await axios
    //   .get('https://jsonplaceholder.typicode.com/users');
    //     this.setState({contacts:res.data})
    // }
   
    
    onSubmit = e => {
       
        e.preventDefault();
        //console.log(this.state);
        const {name,email,phone}  =this.state;

        //Check for Errors

        if( name === ''){
            this.setState({errors : { name : 'Name is Required'}});
            return;
        }
        if(email === ''){
            this.setState({errors : { email : 'Email is Required'}});
            return;
        }

        if(phone === ''){
           this.setState({errors : { phone :'Phone is Required'}});
           return;
        }
        
        const {id} = this.props.match.params;

        const updContact = {
            id,
            name,
            email,
            phone
        };
       
       this.props.updateContact(updContact);

        //clear state

        this.setState({
            name :'',
            email:'',
            phone:'',
            errors :{}
        })
    this.props.history.push('/');

}

    onChange = e => this.setState({ [e.target.name] : e.target.value});
   
    render() {
        const {errors,name,email,phone}  =this.state;
        return(
            //const {name,email,phone} =this.state;
          
            <div className = "card mb-3">
            <div className = "card-header">EditContact</div>
            <div className="card-body">
                <form onSubmit = {this.onSubmit.bind(this)} >
                    {/* <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" 
                        className="form-control form-control-lg"
                         placeholder="Enter name..." 
                         name="name" 
                         value ={name}  onChange = {this.onChange}  /> 
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email"
                         className="form-control form-control-lg" 
                         placeholder="Enter email..."
                          name="email" 
                           value={email} onChange={this.onChange}     /> 
                    </div>

                    <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input type="text"
                         className="form-control form-control-lg"
                          placeholder="Enter phone..." 
                          name="phone"
                           value={phone} onChange = {this.onChange} /> 
                    </div> */}

                <TextInputGroup 
                    label ="Name"
                    name ="name"
                    placeholder ="Enter name"
                    value={name}
                    onChange={this.onChange}
                    error ={errors.name} />
                    
                <TextInputGroup

                    label ="Email"
                    name ="email"
                    placeholder ="Enter Email"
                    type ="email"
                    value={email}
                    onChange={this.onChange} 
                    error = {errors.email}
                    />

                <TextInputGroup
                    label ="Phone"
                    name ="phone"
                    placeholder ="Enter Phone"
                    value={phone}
                    onChange={this.onChange}
                    error = {errors.phone}

                    />
                   

                <input type="submit" value="Updatecontact" className="btn btn-light btn-block" />
                </form>
               
            </div>
            </div>
           
               
           
        )

    }
}
EditContact.propTypes={
    contact: PropTypes.object.isRequired,
    getContact: PropTypes.func.isRequired
}

const mapStateToProps = state =>({
    contact:state.contact.contact
});

export default  connect(mapStateToProps, 
    { getContact ,updateContact})
    (EditContact);
