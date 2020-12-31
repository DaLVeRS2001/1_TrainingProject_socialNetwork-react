import React from "react";
import s from './Dialogs.module.scss'
import DialogItems from "./DialogItems/DialogItems";
import Messages from "./Messages/Messages";

const Dialogs = () => {
	return (
		<div className={s.dialogs}>
			<DialogItems/>
			<Messages/>
		</div>
	)
}


export default Dialogs










