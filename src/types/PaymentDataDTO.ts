export default class PaymentDataDTO {
	payment: string;

	constructor(
		payment: string,
	) {
		this.payment = payment;
	}

    getPlainObject(){
        return {...this}
    }
}
