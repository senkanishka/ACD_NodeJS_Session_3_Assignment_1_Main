function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.sayCar = function(){
		console.log(this.make);
		console.log(this.model);
		console.log(this.year);
	};
}

var mycar = new Car("Eagle", "Talon TSi", 1993);
var kenscar = new Car("Nissan", "300ZX", 1992);

//calling the sayCar function for mycar object
mycar.sayCar();
//calling the sayCar function for kenscar object
kenscar.sayCar();