/**
 * Created by wwm on 2016/5/21.
 */
function Hello<T>(arg:T):T{
    console.log(arg);
    return  arg;
}
var output=Hello<number>(10);
// alert(output);

let isBoon:boolean=true;
function tell(bool){
    console.log(bool);
}
tell(isBoon);

let num:number=10;
function tell2(){
    console.log(num);
}
tell2();

var str:string="wwmin";
function tell3(){
    console.log(str);
}
tell3();

let list:number[]=[1,2,3];
let list3:Array<number>=[1,2,3];
function tell4(){
    console.log(list);
}
tell4();

var x:[string,number];
x=['hello',20];
console.log(x);

enum Color{red,Green,Blue}
var c:string=Color[1];
console.log(c);

let notSure:any=4;
notSure="maybe a string instead";
console.log(notSure);
notSure=false;
console.log(notSure);

let list2:any[]=[1,true,"string is OK"];
list2[0]={"anem":"wwmin"};
list2[1]=23;
// list2[2]=32;
// list2[3]=232;
// list2[4]="sdfsdfsd";
// list2[5]=false;
console.log(list2);

function warnUser():void{
    console.log("This is my warning message");
}
warnUser();

class Person{
    name:string;
    age:number;
    constructor(name:string,age:number){
        this.name=name;
        this.age=age;

    };
    Print(){
        // console.log(this.name+":"+this.age);
        return this.name+":"+this.age;
    }
}
var p=new Person("wwmin",27);
console.log(p.Print());