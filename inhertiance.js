function vechile(numofwheels,names){
	this.numofwheels=numofwheels;
	this.names=names;
	this.getwheels=function(){
		return "The vechile has"+" "+this.numofwheels+" "+"wheels";
	}
}
vechile.prototype.getModelName=function(){
	return "Name:" +this.names;
}
function car(numofwheels,color,names){
	vechile.call(this,numofwheels,names)
	this.numofwheels=numofwheels;
	this.color=color;
	this.names=names;
	this.getColor=function(){
	return "color:" +this.color;
	}	
}
car.prototype=Object.create(vechile.prototype);
car.prototype.constructor=car;
let c1=new car(4,"ash","BMW");
console.log(c1.getwheels());
console.log(c1.getModelName());
console.log(c1.getColor());



	
