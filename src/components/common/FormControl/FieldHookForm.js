import React from "react";
import "../../login/formStyle.scss"
import formCtrl from "./FormControl.module.scss";

export const FieldHookForm = (Element) =>  ({useForm, elemProps, forOther, validators, ...props}) => {
	return(
		<div  className={formCtrl.formControl + ' ' + (useForm.errors.email && formCtrl.error)}>
			<div>
				<Element id={elemProps.id} name={elemProps.name} type={elemProps.type}  ref={
					useForm.register(validators)
				}/>
				<i><img className={forOther.classIcon} src={forOther.iconSrc}/></i>
				<label htmlFor={elemProps.id}>{forOther.labelName}</label>
				{useForm.errors[elemProps.name] && <span >{useForm.errors[elemProps.name]?.message}</span>}
			</div>
		</div>
	)

}

