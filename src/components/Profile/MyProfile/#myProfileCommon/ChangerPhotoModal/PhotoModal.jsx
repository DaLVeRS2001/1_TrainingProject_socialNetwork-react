import s from './PhotoModal.module.scss'
import {Field, reduxForm} from "redux-form";
import {FormElement} from "../../../../common/FormControl/FormControlReduxForm";
import {updatePhoto} from "../../../../../Redux/profileReducer";
import {connect} from "react-redux";



const Input = FormElement("input")


const PhotoModalForm = (props) => {
	return <form onChange={props.handleChange} >
		<Field id={'uploader'} hidden={true} accept='.jpg, .png, .jpeg'
					 type="file" name={'filePhoto'} component={Input}/>
		<label  htmlFor='uploader'><span className={s.button}>Select photo</span></label>
	</form>
}

const PhotoModalReduxForm = reduxForm({
	form: 'photoModal'
})(PhotoModalForm)

const PhotoModal = (props) => {
	const onChange = (imgFile) => {
		let formData = new FormData();
		console.log(imgFile)
		formData.append("image", imgFile.filePhoto[0]);
		props.updatePhoto(formData);
	}

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

					<div className={s.footer}>''</div>
				</div>
			</div>
	)
}


let mapStateToProps = (state) => {
	return {
		ownPhoto: state.profileReducer.ownPhoto
	}
}

export default connect(mapStateToProps, {updatePhoto})(PhotoModal)