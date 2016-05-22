/**
 * Created by wwm on 2016/5/22.
 */
class Greeter{
    greeting:string;
    constructor(message:string){
        this.greeting=message;
    }
    greet(){
        return "Hello, "+this.greeting;
    }
}
let greeter=new Greeter("world");
console.log(greeter);