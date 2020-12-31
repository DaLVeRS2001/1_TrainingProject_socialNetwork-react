import React from "react";
import s from "./Post.module.scss";

const Post = (props) => {
	return (
					<div className={s.item}>
						<img src={props.scr} alt=""/>
						<span>{props.message}</span>
					</div>
	)
}


export default Post






