/**
 * Created by wwm on 2016/5/22.
 */
class Greeter {
    greeting:string;

    constructor(message:string) {
        this.greeting = message;
    }

    greet() {
        return "Hello, " + this.greeting;
    }
}
let greeter = new Greeter("world");
console.log(greeter);

class Animal {
    name:string;

    constructor(theName:string) {
        this.name = theName
    }

    public  move(distanceInMeters:number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
        // console.log(this.name+" moved "+ distanceInMeters+"m.");
    }
}
class Snake extends Animal {
    constructor(name:string) {
        super(name);
    }

    move(distanceInMeters = 5) {
        console.log("Slithering....");
        super.move(distanceInMeters);
    }
}
class Horse extends Animal {
    constructor(name:string) {
        super(name);
    }

    move(distanceInMeters = 45) {
        console.log("Galloping...");
        super.move(distanceInMeters);
    }
}
let sam = new Snake("Sammy the python");
let tom:Animal = new Horse("Tommy the palomino");
sam.move();
tom.move(23);

let passcode="secret passcode";
class Employee{
    private _fullName:string;
    get fullName():string{
        return this._fullName;
    }
    set fullName(newName:string){
        if(passcode && passcode=="secret passcode"){
            this._fullName=newName;
        }else{
            console.warn("Error:Unauthorized update of employee!");
        }
    }
}
let employee=new Employee();
employee.fullName="Wwmin";
if(employee.fullName){
    console.log(employee.fullName);
}

class Grid{
    static origin ={x:0,y:0};
    private o=12;
    calculateDistanceFromOrigin(point:{x:number;y:number;}){
        let xDist=(point.x-Grid.origin.x);
        let yDist=(point.y-Grid.origin.y);
        let d=(point.x-this.o);
        return Math.sqrt(xDist*xDist+yDist*yDist)/this.scale;
    }
    constructor (public scale:number){}
}
let grid1=new Grid(1.0);
let grid2=new Grid(5.0);
console.log(grid1.calculateDistanceFromOrigin({x:10,y:10}));
console.log(grid2.calculateDistanceFromOrigin({x:10,y:10}));

class Greeter1{
    greeting:string;
    constructor(message:string){
        this.greeting=message;
    }
    greet(){
        return "Hello, "+this.greeting;
    }
}
let greeter1:Greeter1;
greeter1=new Greeter1("world");
console.log(greeter.greet());

class Point{
    x:number;
    y:number;
}
interface Point3d extends Point{
    z:number;
}
let point3d:Point3d={x:1,y:2,z:3};