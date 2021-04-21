import React, { memo, FC } from "react";
import { MdGolfCourse } from "react-icons/md";
import { ContainerCards , Header, Icon, Title , TitleContainer } from "./styles";

//Components
import Input from "components/common/Input";
import TargetCard from "components/pages/Courses/TargetCard";

//Hooks
import useActionSearch from "../../hooks/useActionSearch";
import { shallowEqual, useSelector } from "react-redux";
import { TReduxState } from "application/metadata/types";
import { IUserInterfaceStore } from "redux/UserInterface/types";

interface IProps {
	title : string
}

const HeaderSearch : FC<IProps> = ({ title }) => {
	const { courses : { categories } } = useSelector<TReduxState, IUserInterfaceStore>(s => s.userInterface, shallowEqual);
	const { searchCourse , searchByCategory } = useActionSearch();

	return <Header>
		<TitleContainer>
			<Icon>
				<MdGolfCourse />
			</Icon>
			<Title className="text">{title}</Title>
		</TitleContainer>
		<div>
			<Input.Search onChange={searchCourse} large placeholder="Busca un curso..." />
		</div>
		<ContainerCards>
			<TargetCard onClick={() => searchByCategory('todos')} title='todos' simple={true} />
			{ 
				categories.map((v,i) => (
					<TargetCard 
						key={i}
						onClick={() => searchByCategory(v.name)}
						title={v.name} 
						simple={true} 
					/>
				))
			}
		</ContainerCards>
	</Header>
}

export default memo(HeaderSearch);