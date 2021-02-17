import Dialogs from "./Dialogs";
import {sendMessageActionCreator, updateMessageTextActionCreator} from "../../Redux/dialogsReducer";
import {connect} from "react-redux";
import {compose} from "redux";
import withAuthRedirect from "../../hocs/withAuthRedirect";



let mapStateToProps = (state) => {
	return {
		dialogsPage: state.dialogsReducer,
		isAuth: state.authReducer.isAuth
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		onMessageTextChange(text){
			dispatch(updateMessageTextActionCreator(text))
		},
		onSendMessage(){
			dispatch(sendMessageActionCreator())
		}
	}
}


export default compose(
	withAuthRedirect,
	connect(mapStateToProps, mapDispatchToProps)
)(Dialogs)