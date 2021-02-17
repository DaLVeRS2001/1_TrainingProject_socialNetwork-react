import React from "react";
import {Redirect} from "react-router-dom";
import s from './Dialogs.module.scss'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";



const Dialogs = (props) => {
	const dp = props.dialogsPage

	const onMessageSend = () => {
		props.onMessageSend()
	}

	const onMessageTextChange = (e) => {
		let text = e.target.value
		props.onMessageTextChange(text)
	}

	let dialogItems =
		dp.dialogsData.map(dialog =>
			<Dialog
				id={dialog.id}
				userName={dialog.userName}
				key={dialog.id}
			/>
		)

	let messageItems =
		dp.messagesData.map(message =>
			<Message
				id={message.id}
				userMessage={message.userMessage}
				key={message.id}
			/>
		)

	if(!props.isAuth) return <Redirect to='/login'/>

	return (
		<div className={s.dialogs}>

			<div className={s.dialogItems}>
				{dialogItems}
			</div>

			<div className={s.messagesBlock}>
				<div className={s.messages}>
					{messageItems}
				</div>
				<div className={s.newMessage}>
					<textarea onChange={onMessageTextChange}  value={dp.newMessageText}/><br/>
					<button onClick={onMessageSend}>Send</button>
				</div>
			</div>

		</div>
	)
}


export default Dialogs










