import React from 'react'
import {Field, reduxForm, reset} from "redux-form";
import s from "./Login.module.scss"
import {signIn} from "../../Redux/authReducer";
import {compose} from "redux";
import {connect} from "react-redux";


const LoginForm = (props) => {
		return (
			<>
				{props.isAuth ||
				<form onSubmit={props.handleSubmit}>
					<div><Field component={'input'} placeholder={'Email'} name={'email'}/></div>
					<div><Field component={'input'} type={'password'} placeholder={'Password'} name={'password'}/></div>
					<div><Field name={'checkbox'} component={'input'} type={'checkbox'}/> Remember me</div>
					<div><button>Login</button></div>
				</form>
				}
			</>
		)
}

const LoginReduxForm =  reduxForm({
	form: 'Login'
})(LoginForm)


const Login = (props) => {
	const onSubmit = (formData, dispatch) => {
		dispatch(reset('Login'))
		props.signIn(formData)
	}

	return (
		<div	className={s.login}>
		<span>LOGIN</span>
		<LoginReduxForm  isAuth={props.isAuth} onSubmit={onSubmit}/>
		</div>
	)
}

let mapStateToProps = (state)=> {
	return{
		isAuth: state.authReducer.isAuth
	}
}


export default connect(mapStateToProps , {signIn})(Login)

// export default compose(
// 	reduxForm({form: 'Login'}),
// 	connect(null, {signIn})
// )(Login)