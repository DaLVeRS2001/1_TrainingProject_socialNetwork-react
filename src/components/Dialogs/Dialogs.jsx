import React from "react";
import s from './Dialogs.module.scss'
import DialogItems from "./DialogItems/DialogItems";
import Messages from "./Messages/Messages";

const Dialogs = (props) => {
	return (
		<div className={s.dialogs}>
			<DialogItems dialogsData={props.state.dialogsData}/>
			<Messages messagesData={props.state.messagesData}/>
		</div>
	)
}


export default Dialogs










