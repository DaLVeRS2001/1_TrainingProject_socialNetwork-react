import React, {useRef, useState} from "react";
import useOnClickOutside from "../../../common/useOnClickOutside/useOnClickOutside";
import s from "./ContactsMenu.module.scss";
import axios from "axios";

const ContactsMenu = (props) => {
	const ref = useRef();
	let [isOpen, setIsOpen] = useState(false)
	useOnClickOutside(ref, () => setIsOpen(false));
	const prof = props.profile


	return (
		<div className={s.contacts}>
			{isOpen ? (
				<>
					<><button onClick={() => setIsOpen(false)}>Contacts</button></><br/>
					<div className={s.contactsMenu} ref={ref}>
						<a href={!prof.contacts.github ? prof.contacts.github : 'https://'+prof.contacts.github}
							 target="_blank"><i className="fab fa-github"/></a>
						<a href={!prof.contacts.vk ? prof.contacts.vk : 'https://' + prof.contacts.vk}
							 target="_blank"><i className="fab fa-vk"/></a>
						<a href={!prof.contacts.facebook ? prof.contacts.facebook : 'https://' + prof.contacts.facebook}
							 target="_blank"><i className="fab fa-facebook"/></a>
						<a href={!prof.contacts.twitter ? prof.contacts.twitter : 'https://' + prof.contacts.twitter}
							 target="_blank"><i className="fab fa-twitter-square"/></a>
						<a href={!prof.contacts.instagram ? prof.contacts.instagram : 'https://' + prof.contacts.instagram}
							 target="_blank"><i className="fab fa-instagram"/></a>
						<a href={!prof.contacts.youtube ? prof.contacts.youtube : 'https://' + prof.contacts.youtube}
							 target="_blank"><i className="fab fa-youtube"/></a>
					</div>
				</>
			) : (
				<button onClick={() => setIsOpen(true)}>Contacts</button>
			)}
		</div>
	)
}




export default ContactsMenu
