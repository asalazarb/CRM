import uuid from 'uuid/v1'

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

    case 'FETCH_COMPANY_NAMES':
      return {
        companies: action.data.map(company => company.name) 
      }

    case 'DELETE_COMPANY':      
      return{        
        companies: state.companies.filter(company => !action.id.includes(company.name))
      }

    case 'CREATE_COMPANY':
      return {
        ...state,
        companies: [...state.companies, {
          id: uuid(),
          name: action.data.name,
          address: action.data.address,
          phone: action.data.phone
        }],
      }
    case 'EDIT_COMPANY':      
      return{        
        companies: state.companies.filter(function(company){
          if(company.id === action.data.id){
            return action
          }
          else{
            return company
          }
        })
      }

    default:
      return state
  }
}

export default companies