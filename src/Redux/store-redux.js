import {combineReducers, createStore} from "redux";
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
let store = createStore(reducers)


window.store = store

export default store