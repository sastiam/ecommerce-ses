import { TCertificateData } from "./types";

import CertificateFormatDate from "./CertificateFormatDate";
import ConvertToPDF from "./ConvertToPDF";
import UploadImage from "./UploadImage";

class CertificateDownload {

  public async __invoke(data : TCertificateData) {
		try {
			const image_source = (await import("images/Certificado.png")).default;
			const uploadImage = new UploadImage(image_source);
			const image = await uploadImage.__invoke();

			const formated_date = new CertificateFormatDate(data.createdAt);
			const date = await formated_date.__invoke();

			const pdf_converter = new ConvertToPDF(image);
			pdf_converter.__invoke({ 
				...data,
				id : "000" + data.id,
				date
			});
		}catch(e){
			console.log(e);
		}
	};
	
}

export default CertificateDownload;