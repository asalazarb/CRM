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
        
      default:
        return state
    }
  }
  
  export default contacts