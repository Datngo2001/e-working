import { combineReducers } from 'redux'
import userReducer from './reducer/user/userReducer'
import { projectReducer } from './reducer/project/projectReducer'

export default combineReducers({
    user: userReducer,
    project: projectReducer
})