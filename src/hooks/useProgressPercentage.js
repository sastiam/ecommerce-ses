const useProgressPercentage = (current, total) => {
	const percentangeCurrent = Math.floor((current / total) * 100);
	
	return {
		maxPercentage: 100,
		currentPercentage: percentangeCurrent || 0,
		maxValue: total,
		currentValue: current,
	};
};

export default useProgressPercentage;
