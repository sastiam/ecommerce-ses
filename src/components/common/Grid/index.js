import styled from "styled-components";

/**
 * @align -> alineacion
 * @gridGap -> espaciado
 * @gridRowGap -> espacio de filas
 * @gridColumnGap -> espaciado columnas
 * @grid -> Responsive[ { minWidth , columnNumber , columnSize } , ... ]
 */

const mediaQuery = grid => {
	let query = "";

	for(let _grid of grid.reverse()){
		const { minWidth , columnNumber , columnSize } = _grid;

		query += `
			@media screen and (min-width : ${minWidth}){
				grid-template-columns : repeat(${columnNumber},${columnSize === "fluid" ? "1fr" : columnSize});
			}
		`;
	}

	return query;
}

const gridGapStyles = props => {
	const { gridGap } = props;
	
	if(gridGap){ return `grid-gap : ${gridGap}`; }
	else{
		const { gridRowGap , gridColumnGap } = props;

		return `
			grid-row-gap : ${gridRowGap};
			grid-column-gap : ${gridColumnGap};
		`;
	}
}

const Grid = styled.div`
	display : grid;
	justify-content : ${props => props.align};

	${props => gridGapStyles(props)};
	${props => mediaQuery(props.grid)};
`;

export default Grid;