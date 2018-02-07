
const DEFAULT_STATE = {
    projects: []
  }
  
  const projects = (state = DEFAULT_STATE, action) => {
  
    switch (action.type) {
      case 'FETCH_PROJECTS':
        return {
            ...state,
          projects: action.data 
        }
    default:
        return state
    }
}

export default projects