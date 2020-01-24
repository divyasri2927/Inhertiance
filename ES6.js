class vechile{
	constructor(numofwheels,names){
		this.numofwheels=numofwheels;
		this.names=this.names;
	this.VechileWheels=function(){
		console.log("the vechile has"+" "+this.numofwheels+" "+"wheels");
	}
}
}
class car extends vechile{
	constructor(numofwheels,color,names){
		super(numofwheels,names);
		this.color=color;
		this.names=names;
	this.CarName=function(){
		console.log("name: "+this.names);
	}
	this.CarColor=function(){
		console.log("color:" +this.color);
	}
}
}
var c1=new car(4,"blue","Toyoto");
console.log(c1);
c1.VechileWheels();
c1.CarName();
c1.CarColor();


