import React from "react";
import Messages from "../Messages/Messages";
import {sendMessageActionCreator, updateMessageTextActionCreator} from "../../../Redux/dialogsReducer";
import storeContext from "../../../storeContext";

const MessagesContainer = (props) => {
	return(
		<storeContext.Consumer>
			{

				store=> {


					return <Messages  />
				}

			}
		</storeContext.Consumer>
	)
}


export default MessagesContainer










