import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthData} from "../../Redux/authReducer";

class HeaderContainer extends React.Component{
	componentDidMount() {
		this.props.setAuthData()
	}

	render() {
		return <Header {...this.props}/>
	}
}


const mapStateToProps = (state) => {
	return {
		login: state.authReducer.login,
		isAuth: state.authReducer.isAuth
	}
}

export default connect(mapStateToProps, {
	setAuthData
})(HeaderContainer)











