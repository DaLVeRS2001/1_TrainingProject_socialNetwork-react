import React from "react";
import s from './Dialogs.module.scss'
import DialogItems from "./DialogItems/DialogItems";
import Messages from "./Messages/Messages";

const Dialogs = (props) => {
	return (
		<div className={s.dialogs}>
			<DialogItems dialogsData={props.dialogsPage.dialogsData}/>
			<Messages messagesData={props.dialogsPage.messagesData}/>
		</div>
	)
}


export default Dialogs










