import {connect} from "react-redux";
import s from './Setting.module.scss'
import {FieldHookForm} from "../common/FormControl/FieldHookForm";
import {useForm} from "react-hook-form";
import {Redirect} from "react-router-dom";
import React, {useEffect, useState} from "react";
import Preloader from "../common/Preloader/Preloader";
import {getProfile} from "../../Redux/profileReducer";


const TextArea = FieldHookForm('textarea')
const Input = FieldHookForm('Input')

const Setting = (props) => {
	let prof = props.profile
	const contactNames = ['facebook', 'github', 'instagram', 'twitter', 'vk', 'youtube']
	const {register, errors, handleSubmit} = useForm()

	let [aboutMeText, changeAboutMe] = useState()
	let [jobInfoText, changeJobInfo] = useState()

	useEffect(()=> {
		props.getProfile(props.ownId)
			.then((profile)=> {
				changeAboutMe(profile.aboutMe)
				changeJobInfo(profile.lookingForAJobDescription)
			})
	}, [props.isAuth])

	if(!props.isAuth)  return <Redirect to={'/login'}/>
	if(!props.profile) return <Preloader/>

	let onChangeAboutMeField = (e) => {
		changeAboutMe(e.currentTarget.value)
	}
	let onChangeJobInfoField = (e) => {
		changeJobInfo(e.currentTarget.value)
	}

	let onSubmit = (data) => {
		console.log(data)
	}

	return (
		<div className={s.settingPage}>
			<header>
				<h1>Setting</h1>
			</header>
			<form onSubmit={handleSubmit(onSubmit)} className={s.setting}>


				<div className={s.nameBlock}>
					<Input
						useForm={{register, errors}} elemProps={{id: 'nameField', name: 'name', value: prof.fullName}}
						forOther={{upperSpan: {is: true, text: 'Name: '}}} parentBoxClassName={s.nameField}
						validators={{
							required: 'Field is required',
							maxLength: {value: 30, message: 'Max length is 30'}
						}}

					/>
				</div><hr/>

				<div  className={s.aboutMeBlock}>
					<TextArea
						useForm={{register, errors}} elemProps={{id: 'aboutMeField', name: 'aboutMe',value: aboutMeText}}
						forOther={{upperSpan: {is: true, text: 'About me: '}}}
						parentBoxClassName={s.aboutMeField} onChange={onChangeAboutMeField}
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
							return (
								<div className={s.wrapper}>
									<Input
										useForm={{register, errors}}
										elemProps={{
											id: 'contactField', name: 'contact', className: 'contact', value: prof.contacts[contactName],
											placeholder: contactName+'.com/'
										}}
										forOther={{upperSpan: {is: true, text: contactName + ': '}}} parentBoxClassName={s.contactField}
										validators={{
											pattern: {value: new RegExp(contactName+'.com/'+'\\w+'), message: `Field must start with: ${contactName}.com/`}
										}}
									/>
								</div>
							)
						})}
					</div>
				</div><hr/>

				<div className={s.jobBlock}>
					<span className={s.titles} >Job Info: </span>
					<div className={s.jobFields}>
						<span>Looking for a job: </span>
						<div className={s.radioFields}>
							<Input
								useForm={{register, errors}} elemProps={{id: 'isJobFieldFirst', name: 'isJob', type: 'radio'}}
								parentBoxClassName={s.isJobField}
							/>
							<label htmlFor="isJobFieldFirst">Yes</label>
							<Input
								useForm={{register, errors}} elemProps={{id: 'isJobFieldSecond', name: 'isJob', type: 'radio'}}
								parentBoxClassName={s.isJobField}
							/>
							<label htmlFor="isJobFieldSecond">No</label>
						</div>

							<TextArea
							useForm={{register, errors}} elemProps={{id: 'jobInfoField', name: 'jobInfo', value: jobInfoText}}
							forOther={{upperSpan: {is: true, text: 'Job Info: '}}} parentBoxClassName={s.jobInfoField}
							validators={{
								maxLength: {value: 100, message: 'Max length is 100'}
							}}
							onChange={onChangeJobInfoField}
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

export default connect(mapStateToProps, {getProfile})(Setting)