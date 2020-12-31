import React from "react";
import s from './Messages.module.scss'
import Message from "./Message/Message";

const userMessages = ['Hi', 'how are u', 'yo', "what's up", 'good morning']
const Messages = () => {
	return (
		<div className={s.messages}>
			{userMessages.map(i => {
				return <Message key={i.toString()} userMessage={i}/>

			})}
		</div>
	)
}


export default Messages










