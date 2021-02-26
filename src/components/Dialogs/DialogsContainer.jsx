import Dialogs from "./Dialogs";
import {sendMessage} from "../../Redux/dialogsReducer";
import {connect} from "react-redux";
import {compose} from "redux";
import withAuthRedirect from "../../hocs/withAuthRedirect";



let mapStateToProps = (state) => {
	return {
		dialogsPage: state.dialogsReducer,
		isAuth: state.authReducer.isAuth
	}
}

export default compose(
	withAuthRedirect,
	connect(mapStateToProps, {sendMessage})
)(Dialogs)