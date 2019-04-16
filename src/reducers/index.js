import { combineReducers } from 'redux'
import messages from './messagesReducer'
import users from './usersReducer'

const chatReducer = combineReducers({
  messages,
  users
});

export default chatReducer
