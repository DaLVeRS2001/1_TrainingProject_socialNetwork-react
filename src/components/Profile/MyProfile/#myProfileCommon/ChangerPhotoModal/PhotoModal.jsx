import s from './PhotoModal.module.scss'
import {Field, reduxForm} from "redux-form";
import {FormElement} from "../../../../common/FormControl/FormControl";
import {updatePhoto} from "../../../../../Redux/profileReducer";
import {connect} from "react-redux";


const Input = FormElement("input")


const PhotoModalForm = (props) => {
	return <form onChange={props.handleChange} >
		<Field id={'uploader'} hidden={true} accept='.jpg, .png, .jpeg' type="file" name={'fileModal'} component={Input}/>
		<label  htmlFor='uploader'><span className={s.button}>Select photo</span></label>
	</form>
}

const PhotoModalReduxForm = reduxForm({
	form: 'photoModal'
})(PhotoModalForm)

const PhotoModal = (props) => {
	const onChange = (imageFile) => {
		let formData = new FormData();
		formData.append("image", imageFile.fileModal[0])
		props.updatePhoto(formData)
	}
//props.updatePhoto(formData)
	return (
			<div  onClick={event => event.target === event.currentTarget && props.toggleIsPhotoModal()} className={s.modal}>
				<div className={s.window}>
					<div className={s.header}>
						<span>Upload new photo</span>
					</div>
					<div className={s.main}>
						<span>You can upload an image in JPG, JPEG, or PNG format.</span>
						<PhotoModalReduxForm onChange={onChange}/>
					</div>

					<div className={s.footer}></div>
				</div>
			</div>
	)
}

export default connect(null, {updatePhoto})(PhotoModal)