import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthData, signOut} from "../../Redux/authReducer";

class HeaderContainer extends React.Component{

	onLogout = () => {
		this.props.signOut()
	}

	componentDidMount() {
		this.props.setAuthData()
	}

	render() {
		return <Header onLogout={this.onLogout} {...this.props}/>
	}
}



const mapStateToProps = (state) => {
	return {
		login: state.authReducer.login,
		isAuth: state.authReducer.isAuth
	}
}

export default connect(mapStateToProps, {
	setAuthData, signOut
})(HeaderContainer)











