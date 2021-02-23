import React from "react";
import s from "./ProfileInfo.module.scss";

class ProfileStatus extends React.Component {
	state = {
		editMode: false
	}

	toggleEditMode = () => {
		this.setState({editMode: !this.state.editMode})
	}


	render() {
		return (
			<div  className={s.statusBlock}>
				{this.state.editMode
					? <div className={s.status}><input onBlur={this.toggleEditMode} autoFocus  value={this.props.status}/></div>
					: <div className={s.status} onClick={this.toggleEditMode}><span>{this.props.status}</span></div>
				}
			</div>
		)
	}
}


export default ProfileStatus