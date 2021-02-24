import React from "react";
import s from "./ProfileInfo.module.scss";

class ProfileStatus extends React.Component {
	state = {
		editMode: false,
		status: this.props.status,
	}

	toggleEditMode = () => {
		new Promise(resolve => {
			this.setState({editMode: !this.state.editMode})
			resolve()
		})
			.then(()=> {
				if(!this.state.editMode){
					this.props.updateStatus(this.state.status)

				}
			})
	}

	onStatusChange = (e) => {
		this.setState({status: e.currentTarget.value})
	}
	componentDidUpdate(prevProps, prevState) {
		if (prevProps.status !== this.props.status){
			this.setState({status: this.props.status})
			// console.log('componentDidUpdate: ' + prevProps.status + '' +  this.props.status)
		}
	}

	render() {
		// console.log('local: '+this.state.status)
		// console.log('global: '+this.props.status)
		return (
			<div  className={s.statusBlock}>
				{this.state.editMode
					? (!this.props.userId
						? <div className={s.status}>
						   <input onBlur={this.toggleEditMode} autoFocus onChange={this.onStatusChange} value={this.state.status}/>
				      </div>
						: <div className={s.status}><span>{this.props.status}</span></div>)
					: <div className={s.status} onClick={this.toggleEditMode}><span>{this.props.status}</span></div>
				}
			</div>
		)
	}
}


export default ProfileStatus