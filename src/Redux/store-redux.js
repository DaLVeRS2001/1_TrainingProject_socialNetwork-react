import {combineReducers, createStore, applyMiddleware} from "redux";
import thunkMiddleware from 'redux-thunk'
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer"
import {reducer as formReducer} from "redux-form"
import appReducer from "./appReducer";

let reducers = combineReducers({
	profileReducer,
	dialogsReducer,
	usersReducer,
	authReducer,
	form: formReducer,
	appReducer
})
let store = createStore(reducers, applyMiddleware(thunkMiddleware))


window.store = store

export default store