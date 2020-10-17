var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log("test");
var arr = [];
var Locations = /** @class */ (function () {
    function Locations(image, name, address, zip, city) {
        this.image = image;
        this.name = name;
        this.address = address;
        this.zip = zip;
        this.city = city;
        arr.push(this);
    }
    Locations.prototype.display = function () {
        return "<div class=\"col-sm-12 col-md-6 col-lg-3 bg-success\"> <img src=\"" + this.image + "\"> <p>" + this.name + "</p> <p>" + this.address + ", " + this.zip + " " + this.city + "</p>";
    };
    return Locations;
}());
var Restaurant = /** @class */ (function (_super) {
    __extends(Restaurant, _super);
    function Restaurant(image, name, address, zip, city, phone, cuisine, website) {
        var _this = _super.call(this, image, name, address, zip, city) || this;
        _this.phone = phone;
        _this.cuisine = cuisine;
        _this.website = website;
        return _this;
    }
    Restaurant.prototype.display = function () {
        return _super.prototype.display.call(this) + " <p>" + this.cuisine + "</p> <p>" + this.phone + "</p> <p>" + this.website + "</p> </div>";
    };
    return Restaurant;
}(Locations));
var Events = /** @class */ (function (_super) {
    __extends(Events, _super);
    function Events(image, name, address, zip, city, website, date, price) {
        var _this = _super.call(this, image, name, address, zip, city) || this;
        _this.website = website;
        _this.date = date;
        _this.price = price;
        return _this;
    }
    Events.prototype.display = function () {
        return _super.prototype.display.call(this) + " <p>" + this.website + "<p>" + this.date + "</p> <p>" + this.price + " </p> </div>";
    };
    return Events;
}(Locations));
console.log(arr);
var location1 = new Locations("img/st-charles-church.jpg", "St. Charles Church", "Karlsplatz 1", 1010, "Vienna");
var location2 = new Locations("img/zoo-vienna.jpg", "Zoo Vienna", "Maxingstraße 13b", 1130, "Vienna");
var restaurant1 = new Restaurant("img/lemon-leaf.png", "Lemon Leaf Thai Restaurant", "Kettenbrückengasse 19", 1050, "Vienna", "+43(1)5812308", "Thai cuisine", "www.lemonleaf.at");
var restaurant2 = new Restaurant("img/sixta.png", "SIXTA", "Schönbrunner Straße 21", 1050, "Vienna", "+43 1 58 528 56 | +43 1 58 528 56", "Viennese Cuisine", "www.sixta-restaurant.at");
var event1 = new Events("img/kris-kristofferson", "Kris Kristofferson", "Wiener Stadthalle, Halle F, Roland Rainer Platz 1", 1150, "Vienna", "kriskristofferson.com", "Fr., 15.11.2021, 20:00", "58,50 €");
var event2;
$(document).ready(function () {
    for (var index in arr) {
        console.log(index);
        $(".row").append(arr[index].display());
    }
});
