import React, {useState} from "react";
import s from "./JobDescription.module.scss";
import dontSearchJobImg from '../../../assets/images/icons/dontSearchJob.png'
import searchJobImg from '../../../assets/images/icons/searchJob.png'
import closingCrossImg from '../../../assets/images/icons/closingCross.png'

const JobDescription = (props) => {
	let [openedJobDescription, openJobDescription] = useState(false)
	const prof = props.profile
	let toggleDescription = () => {
		!openedJobDescription
			? openJobDescription(true)
			: openJobDescription(false)
	}


	return (
		<div className={s.jobDescriptionBlock}>
			{!openedJobDescription
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