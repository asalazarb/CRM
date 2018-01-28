
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
      
    default:
      return state
  }
}

export default companies