import React, { useEffect, useState } from "react";
import "./index.scss";
import CourseRepository from "application/requests/CourseRepostitory";
import Loading from "components/common/Loading";
import TitleBold from "components/common/TitleBold";
import ItemCard from "components/pages/Courses/ItemCard";

const MostPopular = () => {
	const [ isLoading , setIsLoading ] = useState(true);
	const [ mostPopular , setMostPopular ] = useState([]);

	//Request most Popular
	const requestMostPopular = async () => {
		const courseRepo = new CourseRepository();
		const data = await courseRepo.GetLastAdded();
		setMostPopular(data);
		setIsLoading(false);
	}

	useEffect(() => {
		requestMostPopular();
	},[])

	return <div className="most-popular">
		<div className="content">
			<header className="title">
				<TitleBold fontSize="1.3em">Nuestros Cursos mas Recientes</TitleBold>
			</header>
			<div className="list-courses">
				{ 
					isLoading ? 
						<Loading height="100%" center position="absolute" /> : 
						<div className="grid-most-popular">
							{
								mostPopular.map((v,i) => (
									<ItemCard
										key={v.id}
										simple={true}
										courseInformation={v}
									/>
								)) 
							}
						</div> 
				}
			</div>			
		</div>
	</div>
}

export default MostPopular;