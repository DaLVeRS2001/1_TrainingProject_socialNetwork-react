import React from "react";
import s from './Dialogs.module.scss'
import DialogItems from "./DialogItems/DialogItems";
import MessagesContainer from "./Messages/Message/MessagesContainer";


const Dialogs = (props) => {
	return (
		<div className={s.dialogs}>
			<DialogItems dialogsData={props.state}/>
			<MessagesContainer
				store={props.store}
			/>
		</div>
	)
}


export default Dialogs










