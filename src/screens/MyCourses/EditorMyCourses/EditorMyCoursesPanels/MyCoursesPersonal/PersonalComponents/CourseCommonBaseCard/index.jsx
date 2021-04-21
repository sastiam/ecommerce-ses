import React from 'react';
import * as S from './styles';
import { Link } from '@reach/router';
import GlobalDiv from 'components/common/GlobalDiv';
import useStarAmount from 'hooks/useStarAmount';

const CourseCommonBaseCard = ({ free, punctuation, title, idCourse, image, children, headerComponent, textGlobalButton, onClickGlobalButton }) => {
	const stars = useStarAmount(punctuation, ".8em");

	return (
		<S.Container>
			<S.Flex position="relative">
				<S.ContainerImage onClick={onClickGlobalButton} >
					<S.Image src={image} alt="image-course" />
				</S.ContainerImage>
				{
					free === 1 && (
						<S.ToolTipCard background="white" color="black" position="topLeft" margin>
							Gratis
						</S.ToolTipCard>
					)
				}
				<>
					{headerComponent}
				</>
			</S.Flex>
			<GlobalDiv paddingHorizontal="15px" paddingBottom="20px">
				<GlobalDiv paddingVertical="15px">
					<S.TextLink as={Link} to={`/course/${idCourse}`}>
						{title}
					</S.TextLink>
					<S.ContainerStars>
						{
							stars.map(v => <S.Star>{v}</S.Star>)
						}
					</S.ContainerStars>
				</GlobalDiv>
				<>
					{children}
				</>
				<S.ButtonCard onClick={onClickGlobalButton}>{textGlobalButton}</S.ButtonCard>
			</GlobalDiv>
		</S.Container>
	)
}

export default CourseCommonBaseCard
