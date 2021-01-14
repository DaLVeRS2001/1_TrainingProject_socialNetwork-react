const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT'

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
	newMessageText: ''
}


const dialogsReducer = (state = initialState, action) => {
	switch (action.type) {
		case SEND_MESSAGE:
			if (state.newMessageText === '') {}

				let id = state.messagesData.length + 1
				let newMessage = {
					id: id,
					userMessage: state.newMessageText
				}

				return {
					...state,
					messagesData: [...state.messagesData, newMessage],
					newMessageText: ''
				}

		case UPDATE_MESSAGE_TEXT:
			return {
				...state,
				newMessageText: action.newMessageText
			}

		default:
			return state;
	}

	return state
}

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})
export const updateMessageTextActionCreator = (text) =>
	({type: UPDATE_MESSAGE_TEXT, newMessageText: text})


export default dialogsReducer