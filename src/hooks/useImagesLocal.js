const useImagesLocal = () => {
	const images = {
		// emptyImage: process.env.PUBLIC_URL + "/images/userEmpty.svg",
		emptyImage : "https://s5.postimg.cc/537jajaxj/default.png",
		emptyVideo : process.env.PUBLIC_URL + "/images/videoEmptyMessage.svg",
		emptyCourseImage : process.env.PUBLIC_URL + '/images/CourseErrorImage.png'
	};
	return images;
};

export default useImagesLocal;
