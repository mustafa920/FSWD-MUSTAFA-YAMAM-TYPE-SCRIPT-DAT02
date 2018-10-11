class bus {
    constructor(i, z, a, b, c, d, e) {
        this.name = z;
        this.kilometers = a;
        this.numberOfSeats = b;
        this.fuelType = c;
        this.yearOfProduction = d;
        this.hoursePower = e;
        this.image = i;
    }
    show() {
        return `
			<img src='${this.image}'><br>
			category :  ${this.name}<br>
			 Mileage :  ${this.kilometers}<br>
			 Power : ${this.hoursePower}<br>
			 Fuel : ${this.fuelType}<br>
			 Year : ${this.yearOfProduction}<br>
			 Seat : ${this.numberOfSeats}<br>
			
			`;
    }
}
var car = new bus("https://cdn.pixabay.com/photo/2018/03/07/16/07/coach-3206326__340.png", "Mercedes", "100.000", "4", "Gas", "2001", "220");
document.getElementById('div2').innerHTML = car.show();
var car1 = new bus("https://cdn.pixabay.com/photo/2016/08/03/21/38/london-1567903__340.jpg", "BMW", "100.000", "2", "Gas", "2001", "300");
document.getElementById('div21').innerHTML = car1.show();
var car2 = new bus("https://cdn.pixabay.com/photo/2015/01/06/11/06/london-590114__340.jpg", "Audi", "230.000", "2", "Benzin", "2001", "400");
document.getElementById('div211').innerHTML = car2.show();
var car3 = new bus("https://cdn.pixabay.com/photo/2018/04/30/20/39/colorful-3363971__340.jpg", "Old style", "230.000", "4", "Benzin", "1980", "100");
document.getElementById('div2111').innerHTML = car3.show();
