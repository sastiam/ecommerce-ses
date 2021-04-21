class CertificateFormatDate {
	private createdAt : Date;

	constructor(createdAt : Date){
		this.createdAt = createdAt;
	}

	public __invoke() {
		let day, month;

    day = Intl.DateTimeFormat('es-ES', { day : 'numeric' }).format(this.createdAt);
    month = Intl.DateTimeFormat('es-ES', { month : 'long' }).format(this.createdAt);

    month = month.split('');
    month[0] = month[0].toUpperCase();
    month = month.join('');

    return {
      day,
      month
    }
	}

}

export default CertificateFormatDate;