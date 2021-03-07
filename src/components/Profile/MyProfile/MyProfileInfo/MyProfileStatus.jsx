import React, {useState, useEffect} from "react";
import s from "./MyProfileInfo.module.scss";

const MyProfileStatus = (props) => {
	let [editMode, setEditMode] = useState(false)
	let [status, setStatus] = useState(props.status)

	useEffect(()=> setStatus(props.status), [props.status])

	const toggleEditMode = () => {
		console.log('edit')
		// !editMode
		// 	? setEditMode(true)
		// 	: setEditMode(false)
		// props.updateStatus(status)
		if (!editMode){
			setEditMode(true)
		}else{
			setEditMode(false)
			props.updateStatus(status)
		}
	}

	const onStatusChange = (e) => {
		setStatus(e.currentTarget.value)
	}

	return (
		<div className={s.statusBlock}>
			{editMode
				? <div className={s.status}>
					 <input onBlur={toggleEditMode} autoFocus onChange={onStatusChange} value={status}/>
				  </div>
				: <div className={s.status} onClick={toggleEditMode}><span>{props.status}</span></div>
			}
		</div>
	)
}



export default MyProfileStatus