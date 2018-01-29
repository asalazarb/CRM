
const DEFAULT_STATE = {
  companies: []
}

const companies = (state = DEFAULT_STATE, action) => {

  switch (action.type) {
    case 'FETCH_COMPANIES':
      return {
          ...state,
        companies: action.data 
      }

    case 'DELETE_COMPANY':
      
    return{
        
      companies: state.companies.filter(company => !action.id.includes(company.id))
      
    }
      
    default:
      return state
  }
}

export default companies