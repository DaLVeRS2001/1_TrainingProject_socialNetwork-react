import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {signOut} from "../../Redux/authReducer";
import {compose} from "redux";
import {getPhoto} from "../../Redux/profileReducer";

class HeaderContainer extends React.Component{

	onLogout = () => {
		this.props.signOut()
	}


	render() {
		return <Header onLogout={this.onLogout} {...this.props}/>
	}
}


const mapStateToProps = (state) => {
	return {
		login: state.authReducer.login,
		isAuth: state.authReducer.isAuth,
		ownId: state.authReducer.id,
		ownPhoto: state.profileReducer.ownPhoto,

	}
}

export default compose(
	connect(mapStateToProps, {signOut, getPhoto}),
)(HeaderContainer)












