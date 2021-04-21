import React from 'react'
import "./index.scss";
import AvatarCircle from "../../../../../../components/pages/User/AvatarCircle";

const EnrolledCourseItem = (props) => {
	const { title , detail , image, onClick } = props;

	return (
		<article className="enrolled-course-item" onClick={onClick}>
		<div className="enrolled-row">
			<AvatarCircle
				sizeImage={80}
				image={image}
				isFeaturedSolid
			/>
		</div>
		<div className="enrolled-row">
			<div className="body">
				<h3 className="enrolled-row__title">{title}</h3>
				<p className="enrolled-row__detail">{detail}</p>
			</div>
		</div>
	</article>
)
}

export default EnrolledCourseItem
