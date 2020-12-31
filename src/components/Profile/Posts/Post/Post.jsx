import React from "react";
import s from "./Post.module.scss";

const Post = (props) => {
	return (
					<div id={props.id} className={s.item}>
						<img src={props.src} alt=""/>
						<span>{props.message}</span>
					</div>
	)
}


export default Post






