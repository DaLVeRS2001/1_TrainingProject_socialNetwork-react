import React from "react";
import s from './DialogItems.module.scss'
import Dialog from "./Dialog/Dialog";

let arr = [{name:'Alex', id:1}, {name:'Sam', id:2,}, {name:'Vlad', id:3}, {name:"Ilia", id:4}, {name:'Victor', id:5},]

const DialogItems = () => {
	return (
		<div className={s.dialogItems}>
			{arr.map(i => <Dialog  userName={i.name} dialogPath={'/dialogs/'+i.id}/>)}
		</div>
	)
}


export default DialogItems










