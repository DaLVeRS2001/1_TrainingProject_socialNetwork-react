import React from "react";
import s from './Messages.module.scss'
import Message from "./Message/Message";

const Messages = (props) => {
	const onSendMessage = () => {
		props.onSendMessage()
	}

	const onMessageTextChange = (e) => {
		let text = e.target.value
		props.onMessageTextChange(text)
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
				<textarea onChange={onMessageTextChange}  value={props.newMessageText}/><br/>
				<button onClick={onSendMessage}>Send</button>
			</div>
		</div>
	)
}


export default Messages










