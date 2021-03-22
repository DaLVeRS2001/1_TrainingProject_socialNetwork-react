
//bundlesImports
import React from 'react'
import { useForm } from "react-hook-form";
//stylesImports
import s from "./Login.module.scss"
import formCtrl from "../common/FormControl/FormControl.module.scss"
import "./formStyle.scss"

//componentsImports
import {signInHookForm} from "../../Redux/authReducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import Particles from "../common/Particles/Particles";
//assetsImports
import emailIcon from "../../assets/images/icons/email.png"
import passIcon from "../../assets/images/icons/lock.png"
import {FieldHookForm} from "../common/FormControl/FieldHookForm";
//validators

let Input = FieldHookForm('input')

const LoginForm = (props) => {
	const {register, handleSubmit, reset, formState, errors, setError} = useForm()

	const onSubmit = (formData) => {
		(()=>reset())()

		props.signInHookForm(formData)
			.then((message)=> {
				message !== undefined && setError("commonError", {
					type: "manual",
					message: message
				})
			})
	}


	return (
		<>
			<Particles/>
			<div className="form-Page">
				<form onSubmit={handleSubmit(onSubmit)} id="signin">
					<div className="form-title">Sign in</div>

					<div className="input-field">
						<Input
							useForm={{register, errors}}
							elemProps={{placeholder: '', id: 'email', name: 'email', type: 'text'}}
							forOther={{iconSrc: emailIcon, classIcon: 'email-icon', labelName: 'Email'}}
							validators={{required: 'Field is required'/*...*/}}
						/>
					</div>

					<div className="input-field">
						<Input
							useForm={{register, errors}}
							elemProps={{placeholder: '', id: 'password', name: 'password', type: 'password'}}
							forOther={{iconSrc: passIcon, classIcon: 'pass-icon', labelName: 'Password'}}
							validators={{
								required: 'Field is required',
								minLength:{value: 6, message: 'Min length is 6'},
								maxLength: {value: 20, message: 'Min length is 20'}
							}}
						/>
					</div>

					<button name={'commonError'} ref={register} className="login">Login</button>
					{errors.commonError && <div className={formCtrl.formError}>{errors.commonError.message}</div>}
					{props.captchaUrl && <div className={s.captchaBlock}>
						<img src={props.captchaUrl} className={s.captchaImg} alt=""/><br/>
						<input  type={'text'} placeholder={'Captcha'} name={'captcha'} ref={register} />
					</div>}

				</form>
			</div>
		</>
	)
}


const Login = (props) => {

	if (props.isAuth) return <Redirect to={`/profile/${props.ownId}`}/>
	return (
		<div	className={s.login}>
			<LoginForm  signInHookForm={props.signInHookForm}
									captchaUrl={props.captchaUrl}  isAuth={props.isAuth} />
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


export default connect(mapStateToProps , {signInHookForm})(Login)