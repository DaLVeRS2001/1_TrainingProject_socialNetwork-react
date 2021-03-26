import {connect} from "react-redux";
import s from './Setting.module.scss'
import {FieldHookForm} from "../common/FormControl/FieldHookForm";
import {useForm} from "react-hook-form";


const TextArea = FieldHookForm('textarea')
const Input = FieldHookForm('Input')

const Setting = () => {
	const contactNames = ['facebook', 'github', 'instagram', 'twitter', 'vk', 'youtube']
	const {register, errors, handleSubmit} = useForm()


	return (
		<div className={s.settingPage}>
			<header>
				<h1>Setting</h1>
			</header>
			<div className={s.setting}>


				<div className={s.nameBlock}>
					<Input
						useForm={{register, errors}} elemProps={{id: 'nameField', name: 'name', className: s.nameField}}
						validators={{required: 'Field is required'/*...*/}}
						forOther={{upperSpan: {is: true, text: 'Name: '}}}
					/>
				</div>

				<div  className={s.aboutMeBlock}>
					<TextArea
						useForm={{register, errors}} elemProps={{id: 'aboutMeField', name: 'aboutMe', className: s.aboutMeField}}
						validators={{required: 'Field is required'/*...*/}} style={{resize: 'none'}}
						forOther={{upperSpan: {is: true, text: 'About me: '}}}
					/>
				</div>

				<div className={s.contactsBlock}>
				<div><span className={s.contactTitle}>Contacts: </span></div>
					<div className={s.contacts}>
						{contactNames.map((contactName)=> {
							return (
									<Input
										useForm={{register, errors}} elemProps={{id: 'contactField', name: 'contact', className: s.contactField}}
										validators={{required: 'Field is required'/*...*/}} forOther={{upperSpan: {is: true, text: contactName + ': '}}}
									/>
							)
						})}
					</div>
				</div>

				<div className={s.jobBlock}>
					<span>Job Info: </span>
					<Input
						useForm={{register, errors}} elemProps={{id: 'isJobField', name: 'isJob', className: s.isJobField}}
						validators={{required: 'Field is required'/*...*/}}
						forOther={{upperSpan: {is: true, text: 'Looking for a job: '}}}
					/>
					<Input
						useForm={{register, errors}} elemProps={{id: 'jobInfoField', name: 'jobInfo', className: s.jobInfoField}}
						validators={{required: 'Field is required'/*...*/}}
						forOther={{upperSpan: {is: true, text: 'Job Info: '}}}
					/>
				</div>


			</div>
		</div>
	);
}


let mapStateToProps = (state) => {
	return{

	}
}

export default connect(mapStateToProps, {})(Setting)