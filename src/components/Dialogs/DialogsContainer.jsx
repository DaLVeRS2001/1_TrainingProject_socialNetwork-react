import Dialogs from "./Dialogs";
import {sendMessageActionCreator, updateMessageTextActionCreator} from "../../Redux/dialogsReducer";
import React from "react";
import {connect} from "react-redux";



let mapStateToProps = (state) => {
	return {
		dialogsPage: state.dialogsReducer
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


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)



export default DialogsContainer