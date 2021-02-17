import {combineReducers, createStore, applyMiddleware} from "redux";
import thunkMiddleware from 'redux-thunk'
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer"

let reducers = combineReducers({
	profileReducer,
	dialogsReducer,
	usersReducer,
	authReducer
})
let store = createStore(reducers, applyMiddleware(thunkMiddleware))


window.store = store

export default store