import React from "react";
import s from './DialogItems.module.scss'
import Dialog from "./Dialog/Dialog";


const DialogItems = (props) => {

	return (
		<div className={s.dialogItems}>
			{props.dialogsData.map(dialog =>
				<Dialog
					id={dialog.id}
					userName={dialog.userName}
				/>
			)}
		</div>
	)
}


export default DialogItems










