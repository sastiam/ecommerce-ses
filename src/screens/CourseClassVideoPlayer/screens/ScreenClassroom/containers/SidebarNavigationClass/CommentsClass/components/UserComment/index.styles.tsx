import styled from "styled-components";

export const Wrapper = styled.div`
	border-bottom:1px solid gray;
	padding:20px 0 30px;
	margin:20px 0 30px;
`;

export const UserDetail = styled.div`
	display: flex;
	align-items: center;
	.user-comment-class__avatar {
		width: 40px;
		height: 40px;
		border-radius: 100%;
		margin-right: 10px;
	}
	.user-comment-class__detail {
		font-weight: bold;
		display:flex;
		overflow:auto;
		flex-direction:column;
	}
	.user-comment-class__name {
		color: white;
		display: block;
		font-size:1rem;
		white-space:nowrap;
		margin-bottom:3px;
		text-overflow:ellipsis;
		overflow:hidden;	
		width:100%;
	}
	.user-comment-class__date {
		color: gray;
		font-size:.8rem;
	}
	.user-comments-class__delete {
		width:35px;
		height:35px;
		border-radius:100%;
		display:flex;
		font-size:1.1rem;
		cursor:pointer;
		align-items:center;
		justify-content:center;
		flex:none;
		margin-left:auto;
		background-color:rgba(200,200,200,.1);
		color:white;
		transition:transform .3s;
		&:hover {
			transform:scale(1.2);
		}
	}
`;

export const TextComment = styled.p`
	color:white;
	margin:13px 0;
`
export const Reactions = styled.div`
	display:flex;
	> * {
		margin-right:20px;
	}
`
