import { MutableRefObject, useEffect, useRef } from "react";

type SliderProps = {
	autoSlide ?: boolean;
	duration ?: number;
	stepSize ?: number;
}

type DirectionMove = 1 | -1;

const useSlider = ({autoSlide = false,duration=5,stepSize=0} : SliderProps) => {
	const ref = useRef() as MutableRefObject<HTMLDivElement>;

	const scrollTo = (left : number) => {
		ref.current?.scrollTo({
			left,
			behavior : "smooth"
		})
	}
	const onMove = (direction:DirectionMove) => {
		let step = stepSize ? stepSize : (ref.current?.scrollWidth);
		scrollTo(step * direction);
	};	

	useEffect(() => {
		if (autoSlide) {
			const client = setInterval(() => {
				let step = ref.current?.scrollLeft  + (ref.current?.clientWidth - stepSize);
				if(step >= ref.current?.scrollWidth - stepSize) {
					step = 0;
				}
				scrollTo(step);
			},duration*1000)
			return () => clearInterval(client);
		}
	},[ref,autoSlide,duration]);

	return {
		onMove,
		ref
	}

}

export default useSlider;