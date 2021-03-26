import React from "react";
import s from './FormControl.module.scss'
import "../../login/formStyle.scss"
import {Field} from "redux-form";
import emailIcon from "../../../assets/images/icons/email.png";
import {required} from "./validators";

export const FormElement = (Element) =>  ({input, meta, ...props}) => {
	const inputNames = ['email', 'password']
	const hasError = meta.error && meta.touched
	return (
		<div  className={s.formControl + ' ' + (hasError && s.error)}>
			<div>
				<Element  {...input} {...props}/>

				{inputNames.map((t)=> {
					if(input.name === t) {
						return <i><img className={props.classIcon} src={props.iconSrc} alt=""/></i>
					}
				})}
				<label htmlFor={props.id}>{props.labelName}</label>
				{hasError && <span >{meta.error}</span>}
			</div>
		</div>
	)
}


//                                     HOW TO USE


//const Input = FormElement("input"),

// <Field
// 	classIcon={'email-icon'} labelName={'Email'}
// 	id={'email'} iconSrc={emailIcon}
// 	validate={[required]} component={Input}
// 	type={'text'} name={'email'}
// />