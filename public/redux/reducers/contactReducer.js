import uuid from 'uuid/v1'

const DEFAULT_STATE = {
    contacts: []
  }
  
  const contacts = (state = DEFAULT_STATE, action) => {
  
    switch (action.type) {
      case 'FETCH_CONTACTS':
        return {
            ...state,
          contacts: action.data 
        }

      case 'CREATE_CONTACT':
        return {
          ...state,
          contacts: [...state.contacts, {
            id: uuid(),
            name: action.data.name,
            company: action.data.company,
            position: action.data.position,
            email: action.data.email,
            phone: action.data.phone
          }],
        }
      
        case 'DELETE_CONTACT':      
        return{        
          contacts: state.contacts.filter(contact => !action.id.includes(contact.id))
        }
        
        case 'CONTACT_INFO':      
        return{        
          contact: action.data
        }
      default:
        return state
    }
  }
  
  export default contacts