import React from "react";
import "./index.scss";
import useImagesLocal from "hooks/useImagesLocal";
import TitleBold from "components/common/TitleBold";
import GlobalButton from "components/common/GlobalButton";
import useParameters from "hooks/useParameters";
import { navigate } from "@reach/router";

const ScreenClassroomNotAvailable = () => {
	const { emptyVideo } = useImagesLocal();
	const { id } = useParameters();

	return (
		<div className="classroom">
			<img src={emptyVideo} alt="" className="classroom__image" />
			<TitleBold
				color="white"
				fontSize="3em"
				className="classroom__title"
			>
				Ups ! Sin acceso
			</TitleBold>
			<div className="classroom__empty-modules">
					<TitleBold
						color="white"
						textAlign="center"
						fontSize="2em"
						fontWeight="bold"
					>
						No puedes acceder a estas clases por el momento
					</TitleBold>
					<p className="classroom__message">
						Una vez comprado podrás tener acceso a las clases y comentarios
					</p>
					<div className="classroom__button" data-cy="go-course">
							<GlobalButton onClick={() => navigate(`/course/${id}`)}>
								ir al curso
							</GlobalButton>
					</div>
			</div>
		</div>
	);
};

export default ScreenClassroomNotAvailable;
