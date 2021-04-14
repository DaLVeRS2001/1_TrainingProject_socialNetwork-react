import React from "react";
import formCtrl from "./FormControl.module.scss";

export const FieldHookForm =(Element) =>  ({useForm, elemProps, forOther, validators, parentBoxClassName, ...props},) => {
	const inputNames = ['email', 'password']

	let hasError = useForm.errors[elemProps.name]
	let test = (elem, part) => {
		if (elem) return elem[part]
	}

	return(
		<div  className={formCtrl.formControl + ' ' + ( hasError && formCtrl.error)}>
			<div data-box='parentBox'>
				{test(forOther, 'upperSpan')?.is && <span data-span='upperSpan'>{forOther.upperSpan.text}</span>}
				<div data-box='elementBox'>
					{Element === 'Textarea'
						? <Element {...elemProps} ref={useForm.register(validators&&validators)} {...props}>
							{elemProps?.value}
						</Element>
						: <Element {...elemProps} ref={useForm.register(validators&&validators)} {...props}/>
					}

					{useForm.errors[elemProps.name] && <span data-span='errSpan'>{useForm.errors[elemProps.name]?.message}</span>}
				</div>

				{inputNames.map((t)=> {
					if(elemProps.name === t) {
						return <>
							<i><img className={test(forOther, 'classIcon')} src={test(forOther, 'iconSrc')}/></i>
							<label htmlFor={test(elemProps, 'id')}>{test(forOther, 'labelName')}</label>
						</>
					}
				})}
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
//              validators={{required: 'Field is required'/*...*/}}
// 						/>
// 					</div>
