import {connect} from "react-redux";
import s from './Setting.module.scss'
import {FieldHookForm} from "../common/FormControl/FieldHookForm";
import {useForm} from "react-hook-form";
import {Redirect} from "react-router-dom";
import React, {useEffect, useState} from "react";
import Preloader from "../common/Preloader/Preloader";
import {getProfile, updateProfSetting} from "../../Redux/profileReducer";


const Textarea = FieldHookForm('Textarea')
const Input = FieldHookForm('Input')

const Setting = (props) => {
	let prof = props.profile
	const contactNames = ['facebook', 'github', 'instagram', 'twitter', 'vk', 'youtube']
	const {register, errors, handleSubmit} = useForm()


	useEffect(()=> {
		props.getProfile(props.ownId)
	}, [props.isAuth])

	if(!props.isAuth)  return <Redirect to={'/login'}/>
	if(!props.profile) return <Preloader/>

	let toIf = (el) => {
		return !el?null:el
	}

	let onSubmit = (data) => {
		let settingData = {
			"aboutMe": data.aboutMe,
			"contacts": {
				facebook: toIf(data.facebook),
				github: toIf(data.github),
				instagram: toIf(data.instagram),
				mainLink: null,
				twitter: toIf(data.twitter),
				vk: toIf(data.vk),
				website: null,
				youtube: toIf(data.youtube),
			},
			"lookingForAJob": data.isJob === 'true' ,
			"lookingForAJobDescription": data.jobInfo,
			"fullName": data.fullName
		}

		props.updateProfSetting(settingData, props.ownId)
		//console.log(settingData)
		//console.log(data)
		// var myValue = 'true'
		// console.log(myValue === 'true')
	}

	return (
		<div className={s.settingPage}>
			<header>
				<h1>Setting</h1>
			</header>
			<form onSubmit={handleSubmit(onSubmit)} className={s.setting}>


				<div className={s.nameBlock}>
					<Input
						useForm={{register, errors}} elemProps={{id: 'nameField', name: 'fullName', value: prof.fullName}}
						forOther={{upperSpan: {is: true, text: 'Name: '}}} parentBoxClassName={s.nameField}
						validators={{
							required: 'Field is required',
							maxLength: {value: 50, message: 'Max length is 50'}
						}}

					/>
				</div><hr/>

				<div  className={s.aboutMeBlock}>
					<Textarea
						useForm={{register, errors}} elemProps={{id: 'aboutMeField', name: 'aboutMe', value: prof.aboutMe}}
						forOther={{upperSpan: {is: true, text: 'About me: '}}}
						parentBoxClassName={s.aboutMeField}
						validators={{
							required: 'Field is required',
							maxLength: {value: 500, message: 'Max length is 500'}
						}}
					/>
				</div><hr/>

				<div className={s.contactsBlock}>
				<span className={s.titles} >Contacts: </span>
					<div className={s.contacts}>

						{contactNames.map((contactName)=> {
							return  (
								<div className={s.wrapper}>
									<Input
										useForm={{register, errors}} forOther={{upperSpan: {is: true, text: contactName + ': '}}}
										elemProps={{
											id: 'contactField', name: [contactName] , className: 'contact', value: prof.contacts[contactName],
											placeholder: contactName+'.com/'
										}}

										validators={{
											pattern: {
												value: new RegExp('^'+contactName +'.com/'+'\\w+.*'),
												message: `Field must start with: ${contactName}.com/...`}
										}}
									/>
								</div>
							)
						})}


					</div>
				</div><hr/>

				<div className={s.jobBlock}>
					<span className={s.titles} >Job Info: </span>
					<div className={s.jobInner}>
						<span>Looking for a job: </span>
						<div className={s.radios}>
							<Input
								useForm={{register, errors}} checked={prof.lookingForAJob && true}
								elemProps={{id: 'isJobFieldFirst', name: 'isJob', type: 'radio', value: true}}
							/>
							<label htmlFor="isJobFieldFirst">Yes</label>
							<Input
								useForm={{register, errors}} checked={!prof.lookingForAJob && true}
								elemProps={{id: 'isJobFieldSecond', name: 'isJob', type: 'radio', value: false}}
							/>
							<label htmlFor="isJobFieldSecond">No</label>
						</div>

							<Textarea
							useForm={{register, errors}} forOther={{upperSpan: {is: true, text: 'Job Info: '}}}
							elemProps={{id: 'jobInfoField', name: 'jobInfo',  value: prof.lookingForAJobDescription}}
							validators={{
								maxLength: {value: 100, message: 'Max length is 100'}
							}}
						/>
					</div>
				</div><hr/>

				<div className={s.buttonBlock}><button>Save</button></div>
			</form>
		</div>
	);
}


let mapStateToProps = (state) => {
	return{
		isAuth: state.authReducer.isAuth,
		profile: state.profileReducer.profile,
		ownId: state.authReducer.id
	}
}

export default connect(mapStateToProps, {getProfile, updateProfSetting})(Setting)