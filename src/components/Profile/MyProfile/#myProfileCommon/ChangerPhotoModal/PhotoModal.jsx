import s from './PhotoModal.module.scss'
import {getProfile, updatePhoto} from "../../../../../Redux/profileReducer";
import {connect} from "react-redux";
import {useForm} from "react-hook-form";



const PhotoModalForm = (props) => {
	const {register, handleSubmit} = useForm()

	return <form onChange={handleSubmit(props.onChange)} >

		<input ref={register} id={'uploader'} hidden={true} accept='.jpg, .png, .jpeg'  type="file" name={'filePhoto'}/>
		<label  htmlFor='uploader'><span className={s.button}>Select photo</span></label>
	</form>
}



const PhotoModal = (props) => {
	const onChange = (imgFile) => {
		let formData = new FormData();
		formData.append("image", imgFile.filePhoto[0]);
		props.updatePhoto(formData, props.ownId);
		console.log(imgFile)
		props.toggleIsPhotoModal()
	}

	return (
			<div  onClick={event => event.target === event.currentTarget && props.toggleIsPhotoModal()} className={s.modal}>
				<div className={s.window}>
					<div className={s.header}>
						<span>Upload new photo</span>
					</div>
					<div className={s.main}>
						<span>You can upload an image in JPG, JPEG, or PNG format.</span>
						<PhotoModalForm onChange={onChange}/>
					</div>

					<div className={s.footer}>''</div>
				</div>
			</div>
	)
}


let mapStateToProps = (state) => {
	return {
		ownPhoto: state.profileReducer.ownPhoto,
		isAuth: state.authReducer.isAuth,
		ownId: state.authReducer.id,
	}
}

export default connect(mapStateToProps, {updatePhoto, getProfile})(PhotoModal)