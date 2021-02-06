import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import usersReducer from "./usersReducer";

let reducers = combineReducers({
	profileReducer,
	dialogsReducer,
	usersReducer
})
let store = createStore(reducers)


window.store = store

export default store