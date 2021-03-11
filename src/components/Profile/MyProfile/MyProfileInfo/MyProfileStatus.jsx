import React, {useState, useEffect} from "react";
import s from "./MyProfileInfo.module.scss";

const MyProfileStatus = (props) => {
	let [editMode, setEditMode] = useState(false)
	let [status, setStatus] = useState(props.status)

	useEffect(()=> setStatus(props.status), [props.status])
	const toggleEditMode = () => {
		!editMode
			? setEditMode(true)
			: setEditMode(false)
		status.length < 1
			? props.updateStatus('no status')
			: props.updateStatus(status)
	}


	const onStatusChange = (e) => {
		setStatus(e.currentTarget.value)
	}

	return (
		<div className={s.statusBlock}>
			{editMode
				? <input  onBlur={toggleEditMode} autoFocus onChange={onStatusChange} value={status} maxLength={55}/>

				: <span onClick={toggleEditMode}>{props.status}</span>
			}
		</div>
	)
}



export default MyProfileStatus