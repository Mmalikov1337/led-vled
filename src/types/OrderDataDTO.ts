export default class OrderDataDTO {
	name: string;
	mail: string;
	phone: string;
	city: string;
	homeAdress: string;
	isHouse: boolean;
	postIndex: string;
	promocode: string | null;
	instagram: string | null;
	comment: string | null;

	constructor(
		name: string,
		mail: string,
		phone: string,
		city: string,
		homeAdress: string,
		isHouse: boolean,
		postIndex: string,
		promocode: string | null,
		instagram: string | null,
		comment: string | null
	) {
		this.name = name;
		this.mail = mail;
		this.phone = phone;
		this.city = city;
		this.homeAdress = homeAdress;
		this.isHouse = isHouse;
		this.postIndex = postIndex;
		this.promocode = promocode;
		this.instagram = instagram;
		this.comment = comment;
	}

    getPlainObject(){
        return {...this}
    }
}
