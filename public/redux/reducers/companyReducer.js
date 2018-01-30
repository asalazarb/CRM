
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

    case 'CREATE_COMPANY':
      return {
        ...state,
        companies: [...state.companies, {
          id: action.data.id,
          name: action.data.name,
          address: action.data.address,
          phone: action.data.phone
        }],
      }
      
    default:
      return state
  }
}

export default companies