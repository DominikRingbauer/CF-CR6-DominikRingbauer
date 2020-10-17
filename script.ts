console.log("test");

let arr = [];

 class Locations {
	image : string;
	name : string;
	address : string;
	zip : number;
	city : string;

	constructor(image, name, address, zip, city) {
		this.image = image;
		this.name = name;
		this.address = address;
		this.zip = zip;
		this.city = city;

		arr.push(this);
	}
	display() { 
		return `<div class="col-sm-12 col-md-6 col-lg-3 bg-success"> <img src="${this.image}"> <p>${this.name}</p> <p>${this.address}, ${this.zip} ${this.city}</p>`
	}
}

class Restaurant extends Locations {
	phone : string;
	cuisine : string;
	website : string;

	constructor(image, name,  address, zip, city, phone, cuisine, website) {
		super(image, name, address, zip, city);
		this.phone = phone;
		this.cuisine = cuisine;
		this.website = website;
	}
	display() {
		return `${super.display()} <p>${this.cuisine}</p> <p>${this.phone}</p> <p>${this.website}</p> </div>`
	}
}

class Events extends Locations {
	website : string;
	date : string;
	time : string;
	price : string

	constructor(image, name, address, zip, city, website, date, price) {
		super(image, name, address, zip, city);
		this.website = website;
		this.date = date;
		this.price = price;
	}
	display() {
		return `${super.display()} <p>${this.website}<p>${this.date}</p> <p>${this.price} </p> </div>`
	}
}

console.log(arr);

let location1 = new Locations("img/st-charles-church.jpg", "St. Charles Church", "Karlsplatz 1", 1010, "Vienna");

let location2 = new Locations("img/zoo-vienna.jpg", "Zoo Vienna", "Maxingstraße 13b", 1130, "Vienna");

let restaurant1 = new Restaurant("img/lemon-leaf.png", "Lemon Leaf Thai Restaurant", "Kettenbrückengasse 19", 1050, "Vienna", "+43(1)5812308", "Thai cuisine", "www.lemonleaf.at");

let restaurant2 = new Restaurant("img/sixta.png", "SIXTA", "Schönbrunner Straße 21", 1050, "Vienna", "+43 1 58 528 56 | +43 1 58 528 56", "Viennese Cuisine", "www.sixta-restaurant.at")

let event1 = new Events("img/kris-kristofferson", "Kris Kristofferson", "Wiener Stadthalle, Halle F, Roland Rainer Platz 1", 1150, "Vienna", "kriskristofferson.com", "Fr., 15.11.2021, 20:00", "58,50 €")

let event2

$(document).ready(function(){
	for (let index in arr) {
		console.log(index);
		$(".row").append(arr[index].display());
	}
	
});
