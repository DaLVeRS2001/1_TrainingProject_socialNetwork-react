import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

let reducers = combineReducers({
	profileReducer,
	dialogsReducer
})
let store = createStore(reducers)

export default store