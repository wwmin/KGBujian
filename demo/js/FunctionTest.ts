/**
 * Created by wwm on 2016/5/21.
 */
function add(x,y){
    return x+y+z;
}
let myAdd=function(x,y){return x+y;};
let x=10;
let y=50;
let z=100;
function addToz(x,y){
    return x+y+this.x;
}
console.log(addToz(1,2));
function add1(x:number,y:number):number{
    return x+y;
}
let myAdd1=function(x:number,y:number):number{return x+y;};
let myAdd2:(x:number,y:number)=>number=function(x:number,y:number):number{return x+y;};
function buildName(firstName:string,lastName?:string){
    if(lastName) return firstName+" "+lastName;
    else return firstName;
}
let result1=buildName("Bob");
let result2=buildName("Bob","Adams");
function buildName2(firstName:string,lastName="min"){
    return firstName+" "+lastName;
}
let result3=buildName2("Bob"); //Bob min
