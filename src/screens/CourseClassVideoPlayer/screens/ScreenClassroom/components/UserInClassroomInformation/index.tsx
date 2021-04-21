import { Link } from "@reach/router";
import useImagesLocal from "hooks/useImagesLocal";
import React from "react";
import { FaRegBookmark } from "react-icons/fa";
import { FiHeart, FiUser } from "react-icons/fi";
import MediaQuery from "react-responsive";
import useAuth from "screens/CourseClassVideoPlayer/hooks/useAuth";
import styled from "styled-components";
import { media } from "styles/responsive";

const Wrapper = styled.div`
	display: flex;
	padding: 10px 20px;
	align-items: center;
	justify-content: space-between;
	color: white;
	font-size: 1.3rem;
	& .classroom__img {
		margin-left: 10px;
		width: 35px;
		height: 35px;
		border-radius: 100%;
		object-fit: cover;
	}
	& .external-link {
		position: relative;
		& .external-link__popup {
			position:absolute;
			background-color:white;
			border-radius:5px;
			color:black;
			font-size:15px;
			white-space:nowrap;
			padding:10px 20px;
			left:-20%;
			top:100%;
			z-index:10;
			visibility:hidden;
			opacity:0;
			transform:scale(0);
			transition:.3s;
		}
		&:hover .external-link__popup {
			visibility:visible;
			opacity:1;
			transform:scale(1);
		}
	}
`;

const ExternalLink = ({ to, text, icon }) => {
	return (
		<Link to={to} className="external-link">
			{icon}
			<span className="external-link__popup">{text}</span>
		</Link>
	);
};

export default function UserInClassroomInformation() {
	const { userAuthInformation } = useAuth();
	const { emptyImage } = useImagesLocal();
	return (
		<MediaQuery minWidth={media.mediaDesktopSmall}>
			<Wrapper>
				<ExternalLink to={`/users/${userAuthInformation?.idUser}`} text="Perfil" icon={<FiUser />} />
				<ExternalLink to="/panel" text="Mis cursos" icon={<FaRegBookmark />} />
				<ExternalLink to="/panel/favorites" text="Favoritos" icon={<FiHeart />} />
				<img
					src={userAuthInformation?.profileImage || emptyImage}
					alt=""
					className="classroom__img"
				/>
			</Wrapper>
		</MediaQuery>
	);
}
