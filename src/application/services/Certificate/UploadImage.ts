class UploadImage {
	private image_url : string;

	constructor(url){
		this.image_url = url;
	}

	public __invoke = () : Promise<HTMLImageElement> => new Promise((res,rej) => {
    const image = new Image();
		image.src = this.image_url;
		image.width = 720;
		image.height = 480;
    image.onload = () => res(image);
    image.onerror = () => rej(new Error("Error."));
  });
}

export default UploadImage;