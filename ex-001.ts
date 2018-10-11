class carinfo {
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
var car = new carinfo("https://cdn.pixabay.com/photo/2016/12/07/21/50/audi-1890494__340.jpg","Mercedes","100.000","4","Gas","2001","220");
document.getElementById('div1').innerHTML=car.show();
var car1 = new carinfo("https://cdn.pixabay.com/photo/2018/02/21/03/15/bmw-m4-3169357__340.jpg","BMW","100.000","2","Gas","2001","300");
document.getElementById('div11').innerHTML=car1.show();
var car2 = new carinfo("https://cdn.pixabay.com/photo/2015/07/03/02/10/audi-r8-829800__340.jpg","Audi","230.000","2","Benzin","2001","400");
document.getElementById('div111').innerHTML=car2.show();
var car3 = new carinfo("https://cdn.pixabay.com/photo/2014/07/13/19/45/edsel-ranger-392745__340.jpg","Old style","230.000","4","Benzin","1980","100");
document.getElementById('div1111').innerHTML=car3.show();

