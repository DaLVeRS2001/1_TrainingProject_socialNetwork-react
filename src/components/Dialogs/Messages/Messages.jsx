import React from "react";
import s from './Messages.module.scss'
import Message from "./Message/Message";


const Messages = (props) => {
	return (
		<div className={s.messages}>
			{props.messagesData.map(message =>
				 <Message
					 key={message.toString()}
					 id={message.id}
					 userMessage={message.userMessage}
				 />
			)}
		</div>
	)
}


export default Messages










