export default () => (time : number) => new Promise<void>((res, _) => {
	setTimeout(() => res(), time);
})