import {GET_CONTACTS,DELETE_CONTACT,ADD_CONTACT,GET_CONTACT,UPDATE_CONTACT} from '../actions/types';


// const initialState ={
//   contacts:[
//     {
//         id:1,
//         name:'geethamadhuri',
//         email:'geethamadhuri@gmail.com',
//         phone:'8143382954'
//     },
//     {
//         id:2,
//         name:'karthik',
//         email:'karthik@gmail.com',
//         phone:'9502956135'
//     },
//     {
//         id:3,
//         name:'bala',
//         email:'bala@gmail.com',
//         phone:'98767576464'
//     }
//   ]
// };

const initialState={
  contacts:[],
  contact:{}
};

export default function(state=initialState,action)
{
  switch (action.type) {
  case GET_CONTACTS:
      return {
        ...state,
        contacts: action.payload
      };

      case GET_CONTACT:
      return {
        ...state, //current state
        contact: action.payload    //contact: state value called contact which is in object fill them in payload
      };


      case DELETE_CONTACT:
        return {
          ...state,//iNITIAL STATE

          contacts:state.contacts.filter(contacts => contacts.id !== action.payload)
        };

        case ADD_CONTACT:
          return {
            ...state,
            contacts:[action.payload , ...state.contacts]
          };

          case UPDATE_CONTACT:
          return {
            ...state,
            contacts: state.contacts.map(contact => contact.id === action.payload.id 
              ? (contact = action.payload) 
              : contact )
          };




    default:
      return state;
  }

}