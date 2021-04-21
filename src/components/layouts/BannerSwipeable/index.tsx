import React from "react";
import Skeleton from "react-loading-skeleton";
import "./index.scss";
import SwiperItem from "./Swiper/SwiperItem";
import useGetBannerDataSwipeable from "./hooks/useGetBannerDataSwipeable";
import useSlider from "hooks/useSlider";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const BannerSwipeable = () => {
	const { data, loading } = useGetBannerDataSwipeable();
	const { ref, onMove } = useSlider({ autoSlide: true });
	if (loading === "loading") {
		return (
			<div className="spacing-skeleton-banner-loading">
				<Skeleton height={350} width="100%" />
			</div>
		);
	}

	return (
		<div className="banner-swipeable">
			<div className="swipeable" ref={ref}>
				{data.map((e, i) => (
					<div className="swipeable-item" key={i}>
						<SwiperItem
							image={e.bannerImage}
							title={e.bannerTitle}
							message={e.bannerDescription}
						/>
					</div>
				))}
			</div>
			<div className="button-swipeable prev" onClick={() => onMove(-1)}>
				<FiChevronLeft />
			</div>
			<div className="button-swipeable next" onClick={() => onMove(1)}>
				<FiChevronRight />
			</div>
		</div>
	);
};

export default BannerSwipeable;
