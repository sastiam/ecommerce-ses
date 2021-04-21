import React, { memo } from "react";

import GlobalDiv from "../../../../components/common/GlobalDiv";
import TargetCard from "../../../../components/pages/Courses/TargetCard";
import useTopContent from "screens/ConstructionNet/hooks/useTopContent";

const TopContent = () => {
	const { CardClickAction , isLoading , currentSelected , categories } = useTopContent();
	
	if(isLoading) return <></>;

	return (
		<GlobalDiv paddingTop="2em" className="container-types">
			{
				categories.map((v, i) => (
					<TargetCard
						key={i}
						title={v.name}
						selected={currentSelected === v.name}
						onClick={CardClickAction(v.name)}
					/>
				))
			}
		</GlobalDiv>
	);
};

export default memo(TopContent);
