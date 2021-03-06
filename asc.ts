let arr = [];

 class Locations {
 	created : string;
	image : string;
	name : string;
	address : string;
	zip : number;
	city : string;

	constructor(created, image, name, address, zip, city) {
		this.created = created;
		this.image = image;
		this.name = name;
		this.address = address;
		this.zip = zip;
		this.city = city;

		arr.push(this);
	}
	display() { 
		return `<div class="objects col-sm-12 col-md-6 col-lg-3 bg-success"> <p>Created: <span id="date">${this.created}</span</p> <img src="${this.image}"> <p>${this.name}</p> <p>${this.address}, ${this.zip} ${this.city}</p>`
	}
}

class Restaurant extends Locations {
	phone : string;
	cuisine : string;
	website : string;

	constructor(created, image, name,  address, zip, city, phone, cuisine, website) {
		super(created, image, name, address, zip, city);
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

	constructor(created, image, name, address, zip, city, website, date, price) {
		super(created, image, name, address, zip, city);
		this.website = website;
		this.date = date;
		this.price = price;
	}
	display() {
		return `${super.display()} <p>${this.website}<p>${this.date}</p> <p>${this.price} </p> </div>`
	}
}


let location1 = new Locations("12.03.2019 12:45", "img/st-charles-church.jpg", "St. Charles Church", "Karlsplatz 1", 1010, "Vienna");

let location2 = new Locations("19.11.2020 18:30", "img/zoo-vienna.jpg", "Zoo Vienna", "Maxingstraße 13b", 1130, "Vienna");

let restaurant1 = new Restaurant("04.12.2018 21:50", "img/lemon-leaf.png", "Lemon Leaf Thai Restaurant", "Kettenbrückengasse 19", 1050, "Vienna", "+43(1)5812308", "Thai cuisine", "www.lemonleaf.at");

let restaurant2 = new Restaurant("10.01.2019 11:15", "img/sixta.png", "SIXTA", "Schönbrunner Straße 21", 1050, "Vienna", "+43 1 58 528 56 | +43 1 58 528 56", "Viennese Cuisine", "www.sixta-restaurant.at")

let event1 = new Events("23.11.2021 12:10", "img/kris-kristofferson.jpg", "Kris Kristofferson", "Wiener Stadthalle, Halle F, Roland Rainer Platz 1", 1150, "Vienna", "kriskristofferson.com", "Fr., 15.11.2021 - 20:00", "58,50 €")

let event2 = new Events("31.12.2029 09:20", "img/lenny-kravitz.jpg", "Lenny Kravitz", "Wiener Stadthalle, Halle S, Roland Rainer Platz 1", 1150, "Vienna", "www.lennykravitz.com", "Sat., 09.12.2029 - 19:30", "47,80 €")

$(document).ready(function() {
	for (let index in arr) {
		$(".content").append(arr[index].display());
	}
		
		var date = new Array(arr[0].created);
		date.push(arr[1].created);
		date.push(arr[2].created);
		date.push(arr[3].created);
		date.push(arr[4].created);
		date.push(arr[5].created);
		console.log(date);
			
});
