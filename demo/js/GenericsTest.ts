/**
 * 
 * Created by wwm on 2016/5/22.
 */
function identity(arg:number):number{
    return arg;
}
function identity2<T>(arg:T):T{
    return arg;
}
console.log(identity2([1,2]));
function identity3<T>(arg:T):T{
    return arg;
}
let myIdentity3:<T>(arg:T)=>T=identity3;

