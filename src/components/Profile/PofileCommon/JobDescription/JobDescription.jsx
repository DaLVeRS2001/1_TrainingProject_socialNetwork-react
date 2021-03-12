import React, {useState} from "react";
import s from "./JobDescription.module.scss";
import dontSearchJobImg from '../../../../assets/images/icons/dontSearchJob.png'
import searchJobImg from '../../../../assets/images/icons/searchJob.png'
import closingCrossImg from '../../../../assets/images/icons/closingCross.png'

const JobDescription = (props) => {
	let [isOpenJobDescription, openJobDescription] = useState(false)
	const prof = props.profile
	const toggleDescription = () => {
		openJobDescription(!isOpenJobDescription)
	}


	return (
		<div className={s.jobDescriptionBlock}>
			{!isOpenJobDescription
				? <img onClick={toggleDescription} src={!prof.lookingForAJob ? dontSearchJobImg : searchJobImg} alt=""/>
				: <div className={s.wrapper}>
					<img onClick={toggleDescription} src={closingCrossImg} alt=""/>
					<div className={s.jobDescription}>
						<p>{!prof.lookingForAJobDescription ? 'No Info' : prof.lookingForAJobDescription}</p>
					</div>
				</div>}
		</div>

	)
}

export default JobDescription