type CertificateData = {
	id : string,
	course_name : string,
	user : string,
	study_hours : string
}

export type TCertificateData = CertificateData & {
	createdAt : Date
}

export type TCertificateDataFormated = CertificateData & {
	date : {
		day : string;
		month : string;
	}
}