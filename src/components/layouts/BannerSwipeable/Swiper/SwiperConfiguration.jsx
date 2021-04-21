import React from 'react'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const SwiperConfiguration = {
		autoplay : {
			delay : 2500,
			disableOnInteraction: false
		},
		navigation: {
			prevEl: ".swiper-button-prev",
			nextEl: ".swiper-button-next",
		},
		renderPrevButton: () => <button className="swiper-button-prev"><IoIosArrowBack color="white"/></button>,
		renderNextButton: () => <button className="swiper-button-next"><IoIosArrowForward color="white" /></button>,
		pagination : {
			el : ".swiper-pagination",
			clickeable : true,
			renderBullet: (index, className) => {
				return '<span class="' + className + '">' + (index + 1) + '</span>';
			}		
		}
}

export default SwiperConfiguration
