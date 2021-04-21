import React from "react";
import "./index.scss";
import { Img } from "react-image";
import classNames from "classnames";
import Skeleton from "react-loading-skeleton";
import { memo } from "react";

const AvatarCircle = (props) => {
	// propiedades
	const {
		image,
		rounded,
		isFeatured,
		isFeaturedSolid,
		sizeImage,
		isSquared,
		width,
		height,
		className,
		fromLocal,
		...restParams
	} = props;

	// clase dinamica para dar bordes de color destacado
	const classnamesImage = classNames("image-avatar", className, {
		isFeatured,
		isFeaturedSolid,
	});
	// permitir definir tamaño si se pasa isSquared se puede definir el width y height personalizado
	const size = {
		width: isSquared ? width : sizeImage,
		height: isSquared ? height : sizeImage,
	};
	const existsRounded = isSquared ? false : true;
	// estilos dinamicos
	const styleImage = {
		width: size.width + "px",
		height: size.height + "px",
		borderRadius: isSquared && "0%",
	};

	return (
		<div className="container-avatar">
			{fromLocal ? (
				<img alt="" src={image} className={classnamesImage}	style={styleImage}	{...restParams} />
			) : (
				<Img
					src={image}
					loader={ <Skeleton	circle={existsRounded}	width={size.width}	height={size.height} /> }
					className={classnamesImage}
					style={styleImage}
					{...restParams}
				/>
			)}
		</div>
	);
};

export default memo(AvatarCircle);
