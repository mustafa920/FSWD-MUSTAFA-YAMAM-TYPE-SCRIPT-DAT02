class track {
	name :"";
	kilometers :"";
	numberOfSeats:"";
	fuelType :"";
	yearOfProduction:"";
	hoursePower :number;
	image : "";
	constructor(i,z,a,b,c,d,e) {
		this.name = z;
		this.kilometers = a;
		this.numberOfSeats = b;
		this.fuelType = c;
		this.yearOfProduction = d ;
		this.hoursePower = e ;
		this.image = i;
	}

	show(){
			return `
			<img src='${this.image}'><br>
			category :  ${this.name}<br>
			 Mileage :  ${this.kilometers}<br>
			 Power : ${this.hoursePower}<br>
			 Fuel : ${this.fuelType}<br>
			 Year : ${this.yearOfProduction}<br>
			 Seat : ${this.numberOfSeats}<br>
			
			`
	}
}
var car = new track("https://cdn.pixabay.com/photo/2015/11/07/11/08/truck-1030846__340.jpg","Mercedes","100.000","4","Gas","2001","220");
document.getElementById('div3').innerHTML=car.show();
var car1 = new track("https://cdn.pixabay.com/photo/2018/07/25/13/19/truck-3561413__340.jpg","BMW","100.000","2","Gas","2001","300");
document.getElementById('div31').innerHTML=car1.show();
var car2 = new track("https://cdn.pixabay.com/photo/2015/01/03/21/05/truck-587819__340.jpg","Audi","230.000","2","Benzin","2001","400");
document.getElementById('div311').innerHTML=car2.show();
var car3 = new track("https://cdn.pixabay.com/photo/2018/09/14/18/46/truck-3677882__340.jpg","Old style","230.000","4","Benzin","1980","100");
document.getElementById('div3111').innerHTML=car3.show();

