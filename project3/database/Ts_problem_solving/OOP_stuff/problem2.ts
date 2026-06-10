//2. Write a TypeScript class called Bus with the properties make, model, and year. Add a method start() that prints a message indicating that the Bus is starting.  



class Bus{

make:string;
model:string;
year:string;

constructor(make:string,model:string,year:string){
                this.make=make;
                this.model=model;
                this.year=year;}
start(){
	console.log(`${this.make} ${this.model} ${this.year} is starting`);

}

}

const bus1=new Bus('BMW','23MM',"2004")
console.log(bus1.make,bus1.model,bus1.year);
bus1.start();
