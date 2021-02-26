import {reset} from "redux-form";

const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
	dialogsData: [
		{id: 1, userName: 'Alex'},
		{id: 2, userName: 'Sam'},
		{id: 3, userName: 'Ilia'},
		{id: 4, userName: 'Victor'},
		{id: 5, userName: 'Vlad'},
	],
	messagesData: [
		{id: 1, userMessage: 'Hi'},
		{id: 2, userMessage: 'how are u'},
		{id: 3, userMessage: 'yo'},
		{id: 4, userMessage: 'good morning'},
		{id: 5, userMessage: "what's up"}
	],
}


const dialogsReducer = (state = initialState, action) => {
	switch (action.type) {
		case SEND_MESSAGE:
			if (action.newMessageText) {
				let id = state.messagesData.length + 1
				let newMessage = {
					id: id,
					userMessage: action.newMessageText
				}

				return {
					...state,
					messagesData: [...state.messagesData, newMessage],
				}
			}else{
				return state
			}

		default:
			return state;
	}

	return state
}


//                                       ACTION CREATORS
export const sendUserMessage = (newMessageText) => ({type: SEND_MESSAGE, newMessageText})


//                                           THUNKS
export const sendMessage = (newMessageText) => (dispatch) => {
	dispatch(reset('DialogMessageForm'))
	dispatch(sendUserMessage(newMessageText))
}


export default dialogsReducer