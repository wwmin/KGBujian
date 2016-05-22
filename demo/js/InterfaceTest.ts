/**
 * Created by wwm on 2016/5/21.
 */

console.log("Created by wwm on 2016/5/21");
// 接口的实现
// function printeLabel(labelObj:{label:string}){
//     console.log(labelObj.label);
// }
// let myObj={size:10,label:"Hello TypeScript"};
// printeLabel(myObj);

//接口的实现2
interface LabelledValue{
    label:string;
}
function printLabel(labelledObj:LabelledValue){
    console.log(labelledObj.label);
}
let myObj ={size :10,label:"size 10 object"};
printLabel(myObj);

interface SquareConfig{
    color?:string;
    width?:number;
}
function createSquare(config:SquareConfig):{color:string;area:number}{
    let newSquare={color:"white",area:1000};
    if(config.color){
        newSquare.color=config.color;
    }
    if(config.width){
        newSquare.area=config.width*config.width;
    }
    return newSquare;
}
let mySquare=createSquare({color:"black"});
console.log(mySquare);

//定义一个传入参数和返回参数类型 接口
interface SearchFunc{
    (source:string,subString:string):boolean;
}
let mySearch:SearchFunc;
mySearch=function(source:string,subString:string){
    let result=source.search(subString);
    return result !=-1 ;
};
let mySearch2:SearchFunc;
mySearch2=function(src,sub){
    let result=src.search(sub);
    if(result==-1){
        return false;
    }else{
        return true;
    }
};
mySearch2("wwwwm","m");

interface stringArray{
    [index:number]:string;
}
let myArray:stringArray;
myArray=["sdfd","sdfsdfdf"];
let myStr:string=myArray[0];

class Animal{
    name:string;
}
class Dog extends Animal{
    bread:string;
}
interface NotKkay{
    [name:string]:Animal;
    [x:number]:Dog;
}

interface ClockInterface{
    currentTime:Date;
}
class Clock implements ClockInterface{
    currentTime:Date;
    constructor(h:number,m:number){}
}
interface Shape{
    color:string;
}
interface PenStroke{
    penWidth:number;
}
interface Square extends Shape,PenStroke{
    sideLength:number;
}
let square=<Square>{};
square.color="blue";
square.sideLength=10;
square.penWidth=4.5;