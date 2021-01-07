import React from "react";
import Messages from "../Messages";
import {sendMessageActionCreator, updateMessageTextActionCreator} from "../../../../Redux/dialogsReducer";


const MessagesContainer = (props) => {
	let state = props.store.getState().dialogsReducer

	const onSendMessage = () => {
		props.store.dispatch(sendMessageActionCreator())
	}

	const onMessageTextChange = (text) => {
		props.store.dispatch(updateMessageTextActionCreator(text))
	}
	return <Messages newMessageText={state.newMessageText}
									 messagesData={state.messagesData}
									 onMessageTextChange={onMessageTextChange}
									 onSendMessage={onSendMessage} />
}


export default MessagesContainer










