import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import { createLogger } from 'redux-logger'

import companyReducer from './reducers/companyReducer'
import contactReducer from './reducers/contactReducer'


const logger = createLogger({
  collapsed: true,
  duration: true,
  diff: true,
})

const rootReducer = combineReducers({company: companyReducer, contact: contactReducer})

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(
    logger,
  ),
))

export default store