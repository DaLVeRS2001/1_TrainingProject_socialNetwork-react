import React from "react";
import s from './Dialogs.module.scss'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";


const DialogForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div><Field component={'textarea'} name={'textarea'} placeholder={'Enter your message'}/></div>
			<div><button>Send Message</button></div>
		</form>
	)
}

const DialogReduxForm = reduxForm({
	form: 'DialogMessageForm'
})(DialogForm)



const Dialogs = (props) => {
	const dp = props.dialogsPage

	const sendMessage = (values) => {
		props.sendMessage(values.textarea)
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
					<DialogReduxForm onSubmit={sendMessage}/>
				</div>
			</div>

		</div>
	)
}


export default Dialogs










