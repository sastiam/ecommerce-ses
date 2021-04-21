import useSlider from "hooks/useSlider";
import React from "react";
import * as styled from "./styles";

const dataImages = Array(13)
	.fill(0)
	.map((e: number, i: number) => {
		let v = i + 1;
		let value = v < 10 ? "0" + v : v;
		return require(`images/bannerClients/LGclient${value}.png`);
	});

const ContainerScrollableClients = () => {
	const { ref } = useSlider({
		autoSlide : true,
		stepSize : 100
	});
	return (
		<styled.Scrollable ref={ref}>
			<styled.Grid>
				{dataImages.map((e, i) => (
					<styled.ItemClientDisplay key={i}>
						<styled.ItemClientImage src={e} />
					</styled.ItemClientDisplay>
				))}
			</styled.Grid>
		</styled.Scrollable>
	);
};

export default ContainerScrollableClients;
