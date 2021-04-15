//bundlesImports
import React from 'react'
import {Field, reduxForm} from "redux-form";
//stylesImports
import s from "./Login.module.scss"
import formCtrl from "../common/FormControl/FormControl.module.scss"
import "./formStyle.scss"
//componentsImports
import {signIn} from "../../Redux/authReducer";
import {connect} from "react-redux";
import {FormElement} from "../common/FormControl/FormControlReduxForm";
import {maxLength, required, minLength} from "../common/FormControl/validators";
import {Redirect} from "react-router-dom";
import Particles from "../common/Particles/Particles";
//assetsImports
import emailIcon from "../../assets/images/icons/email.png"
import passIcon from "../../assets/images/icons/lock.png"


//validators
const Input = FormElement("input"),
	maxLength20 = maxLength(20),
	minLength6 = minLength(6)


const LoginForm = (props) => {
	return (
		<>
			<Particles/>
			<div className="form-Page">

				<form onSubmit={props.handleSubmit} id="signin">
					<div className="form-title">Sign in</div>

					<div className="input-field">
						<Field
							classIcon={'email-icon'} labelName={'Email'}
							id={'email'} iconSrc={emailIcon}
							validate={[required]} component={Input}
							type={'email'} name={'email'}
						/>
					</div>

					<div className="input-field">
						<Field  validate={[required, maxLength20, minLength6]} component={Input}
										type={'password'} classIcon={'pass-icon'} labelName={'Password'}
										id={'password'} iconSrc={passIcon} name={'password'}
						/>
					</div>

					<button className="login">Login</button>
					{props.error && <div className={formCtrl.formError}>{props.error}</div>}
					{props.captchaUrl && <div className={s.captchaBlock}>
						<img src={props.captchaUrl} className={s.captchaImg} alt=""/>
						<Field component={Input} type={'text'} placeholder={'Captcha'} name={'captcha'}/>
					</div>}
				</form>
			</div>
		</>
	)
}

const LoginReduxForm =  reduxForm({
	form: 'Login'
})(LoginForm)


const Login = (props) => {
	const onSubmit = (formData) => {
		props.signIn(formData)
	}
	if (props.isAuth) return <Redirect to={`/profile/${props.ownId}`}/>
	return (

		<div	className={s.login}>
			<LoginReduxForm captchaUrl={props.captchaUrl}  isAuth={props.isAuth} onSubmit={onSubmit}/>
		</div>

	)
}

let mapStateToProps = (state)=> {
	return{
		isAuth: state.authReducer.isAuth,
		captchaUrl: state.authReducer.captchaUrl,
		ownId: state.authReducer.id
	}
}


export default connect(mapStateToProps , {signIn})(Login)