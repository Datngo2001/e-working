import { combineReducers } from 'redux'
import userReducer from './reducer/user/userReducer'
import projectReducer from './reducer/project/projectReducer'
import stageReducer from './reducer/stage/stageReducer'

export default combineReducers({
    user: userReducer,
    project: projectReducer,
    stage: stageReducer
})