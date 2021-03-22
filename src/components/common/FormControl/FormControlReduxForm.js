import React from "react";
import s from './FormControl.module.scss'
import "../../login/formStyle.scss"

export const FormElement = (Element) =>  ({input, meta, ...props}) => {
	const inputNames = ['email', 'password']
	const hasError = meta.error && meta.touched
	return (
		<div  className={s.formControl + ' ' + (hasError && s.error)}>
			<div>
				<Element  {...input} {...props}/>

				{inputNames.map((t)=> {
					if(input.name === t) {
						return <>
							<i><img className={props.classIcon} src={props.iconSrc} alt=""/></i>
							<label htmlFor={props.id}>{props.labelName}</label>
						</>
					}
				})}
				{hasError && <span >{meta.error}</span>}
			</div>
		</div>
	)
}