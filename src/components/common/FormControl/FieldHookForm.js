import React from "react";
import formCtrl from "./FormControl.module.scss";

export const FieldHookForm = (Element) =>  ({useForm, elemProps, forOther, validators, parentBoxClassName, ...props},) => {
	const inputNames = ['email', 'password']

	let hasError = useForm.errors[elemProps.name]
	let test = (elem, part) => {
		if (elem) return elem[part]
	}

	return(
		<div  className={formCtrl.formControl + ' ' + ( hasError && formCtrl.error)}>
			<div className={parentBoxClassName}>
				{test(forOther, 'upperSpan')?.is && <span>{forOther.upperSpan.text}</span>}
				<Element  {...elemProps} ref={useForm.register(validators&&validators)} {...props}/>

				{inputNames.map((t)=> {
					if(elemProps.name === t) {
						return <>
							<i><img className={test(forOther, 'classIcon')} src={test(forOther, 'iconSrc')}/></i>
							<label htmlFor={test(elemProps, 'id')}>{test(forOther, 'labelName')}</label>
						</>
					}
				})}


				{useForm.errors[elemProps.name] && <span >{useForm.errors[elemProps.name]?.message}</span>}
			</div>
		</div>
	)
}




//                                     HOW TO USE


// let Input = FieldHookForm('input')

//           <div className="input-field">
// 						<Input
// 							useForm={{register, errors}}
// 							elemProps={{
// 							  placeholder: '', id: 'email', name: 'email', type: 'text',
// 							  className: 'Element class'
// 							}}
// 							forOther={{
// 							  iconSrc: 'path to inner field icon',
// 							  classIcon: 'Icon class for inner field',
// 							  labelName: 'label name',
// 							  upperSpan:{is: 'boolean', text: 'spanText'}           //span over the element
// 							}}
//              parentBoxClassName={'the class of the main parent field'}
//              validators={{required: 'Field is required'/*...*/}}
// 						/>
// 					</div>
