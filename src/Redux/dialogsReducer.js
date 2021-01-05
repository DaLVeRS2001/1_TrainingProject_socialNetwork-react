const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT'


const dialogsReducer = (state, action) => {
	switch (action.type) {
		case SEND_MESSAGE:
			if (state.newMessageText === '') {
				return null
			} else {
				let id = state.messagesData.length + 1
				let newMessage = {
					id: id,
					userMessage: state.newMessageText
				}
				state.messagesData.push(newMessage)
				state.newMessageText = ''
			}

			return state;

		case UPDATE_MESSAGE_TEXT:
			state.newMessageText = action.newMessageText

			return state;

		default:
			return state;
	}


	return state
}

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})
export const updateMessageTextActionCreator = (text) =>
	({type: UPDATE_MESSAGE_TEXT, newMessageText: text})


export default dialogsReducer