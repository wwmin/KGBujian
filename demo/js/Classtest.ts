/**
 * Created by wwm on 2016/5/21.
 */
class Student{
    fullName:string;
    constructor(public firstName,public middleInitial,public lastName){
        this.fullName=firstName+" "+middleInitial+" "+lastName;
    }
}
interface Person{
    firstName:string;
    lastName:string;
}
function greeter(person:Person){
    return "Hello,"+person.firstName+" "+person.lastName;
}
var user=new Student("wang","wei","min");
console.log(greeter(user));

function f(){
    var a=10;
    return function g(){
        return a+1;
    }
}
var g=f();
g();

for(var a=0;a<10;a++){
    // console.log("用var声明变量"+a);
    setTimeout(function(){console.log("用var "+a);},100*a);
}
for(let ii=0;ii<10;ii++){
    // console.log("用let声明变量"+ii);
    setTimeout(function(){console.log("用let "+ii);},100*ii);
}

function sumMatix(matrix:number[][]){
    var sum=0;
    for(let i=0;i<matrix.length;i++){
        var currentRow=matrix[i];
        for(let i=0;i<currentRow.length;i++){
            sum+=currentRow[i];
        }
    }
    return sum;
}
console.log(sumMatix([[23,54,45,34,53,25,77]]));

for (let j=0;j<10;j++){
    setTimeout(function(){console.log(j);},100*j);
    (function(j){
        setTimeout(function(){console.log(j);},100*j);
    })(j);
}

function foo1(){
    return b;
}

console.log(foo1());
let b:number=100000;
console.log(foo1());

try{
    throw "oh no!"
}
catch (e){
    console.log("Oh well...");
    console.log(e);
}

for (let i=0;i<10;i++){
    setTimeout(function(){console.log(i);},100*i)
}
const numLivesForCat=9;
const kitty={
    name:"Aurora",
    numLives:numLivesForCat
};
let kettys={
    name:"Danilelle",
    numLives:numLivesForCat
};
kettys.name="wwmin";
// kettys.numLives=23;
console.log(kettys);

let input =[1,2];
let [first,second]=input;
console.log(first);
console.log(second);
function keepWholeObject(wholeObject:{a:string,b?:number}){
    let {a,b=1001}=wholeObject;
    return wholeObject;
}
console.log(keepWholeObject({a:"wwminsfsdfsdfsd",b:12}));

