import React from "react";
import s from './Messages.module.scss'
import Message from "./Message/Message";
import {sendMessageActionCreator, updateMessageTextActionCreator} from "../../../Redux/dialogsReducer";


const Messages = (props) => {
	let elemValue = React.createRef()


	const onSendMessage = () => {
		props.dispatch(sendMessageActionCreator())
	}

	const onMessageTextChange = () => {
		let text = elemValue.current.value
		props.dispatch(updateMessageTextActionCreator(text))
	}

	return (
		<div className={s.messagesBlock}>
			<div className={s.messages}>
			{props.messagesData.map(message =>
				 <Message
					 key={message.toString()}
					 id={message.id}
					 userMessage={message.userMessage}
				 />
			)}
		</div>

			<div className={s.newMessage}>
				<textarea onChange={onMessageTextChange} ref={elemValue}  value={props.newMessageText}/><br/>
				<button onClick={onSendMessage}>Send</button>
			</div>
		</div>
	)
}


export default Messages










