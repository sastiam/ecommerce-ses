import style from "styles/index.scss";
import styled from "styled-components";

export default styled.div`
text-align: ${(props) => props.align};
font-size: ${(props) => props.fontSize || "14px"};
font-weight: ${(props) => props.weight};
user-select: none;
color: ${(props) =>
	({
		light: "var(--color-light)",
		smooth: "rgba(0,0,0,.6)",
	}[props.color])};
@media screen and (max-width:${style.mediaMobileBig}) {
		font-size : .8em;
		&.date{
			font-size : .7em;
		}
}
`;