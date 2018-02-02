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
      
        case 'DELETE_CONTACT':      
        return{        
          contacts: state.contacts.filter(contact => !action.id.includes(contact.id))
        }
        
      default:
        return state
    }
  }
  
  export default contacts