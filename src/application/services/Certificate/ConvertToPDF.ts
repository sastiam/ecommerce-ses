import { jsPDF, TextOptionsLight } from "jspdf";
import { TCertificateDataFormated } from "./types";

class ConvertToPDF {
	private image_source : HTMLImageElement;

	constructor(image : HTMLImageElement) {
		this.image_source = image;
	}

	public __invoke(data : TCertificateDataFormated) : void {
		const{ width , height } = this.image_source;

		const pdf_converter = new jsPDF({
			orientation: "l",
			unit: 'pt',
			format : [width,height]
		});

		const x = (width / 2) + 70;
		const y = (height / 2) - 5;

		const alignment_configuration : TextOptionsLight = {
			align : "center"
		}

		pdf_converter.addImage(this.image_source, "JPEG", 0, 0, width, height);
		pdf_converter.setFont('calibri');
		pdf_converter.setFontSize(32);
		pdf_converter.text(data.user, x, y, alignment_configuration);

		pdf_converter.setFontSize(18);
		pdf_converter.text(`"${data.course_name}"`, x , y + 70, alignment_configuration);

		pdf_converter.setFontSize(12);
		pdf_converter.text(data.date.day, x + 20, y + 111, alignment_configuration);
		pdf_converter.text(data.date.month, x + 116, y + 111, alignment_configuration);
		pdf_converter.text(data.study_hours, x - 2, y + 128, alignment_configuration);

		pdf_converter.setFontSize(10);
		pdf_converter.setTextColor("#ffc000");
		pdf_converter.text(data.id, 94, height - 5, alignment_configuration);

		pdf_converter.save("certificate.pdf");
  }
}

export default ConvertToPDF;