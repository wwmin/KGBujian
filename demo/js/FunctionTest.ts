/**
 * Created by wwm on 2016/5/21.
 */
// function add(){
//     return "wwmin";
// }
// var myAdd=function(x,y){
//     return x+y;
// };

function add(x:number,y:number):string{
    return x+y+"";
}
var myAdd=function(x:number,y:string):string{
    return "Hello TypeScript "+x+y;
};
console.log(myAdd(1,"wwmin"));
var myAddts:(name:string,age:number)=>number=function(n:string,a:number):number{
    return a;
};