import React,{Component} from 'react';
import Contacts from './components/contacts/Contacts';
import Header from './components/layout/Header';
import AddContact from './components/contacts/AddContact';
import {HashRouter as Router,Route,Switch } from 'react-router-dom';
//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import About from './components/pages/About';
import NotFoundpage from './components/pages/NotFoundPage';
import Test from './components/Test/Test';
import EditContact from './components/contacts/EditContact';
 import {Provider} from 'react-redux';
 import store from './store';

class App extends Component{
  render(){
    return(
  <Provider store ={store}>
      <Router>
      <div className = "App">
           <Header branding = 'ContactManager1'/>
          
           <div className="container">
           <Switch>
             <Route exact path='/' component={Contacts} />
             <Route exact path="/contact/add" component = {AddContact} />
             <Route exact path='/contact/edit/:id'  component ={EditContact} />
             <Route exact path="/about" component ={About} />
             <Route exact path="/test" component ={Test} />
           
             <Route component ={NotFoundpage} />
           </Switch>
         
          </div>
          </div>
          </Router>
          </Provider>
     
      

 
        );
  }
}
export default App;
