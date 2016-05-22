/**
 * Created by wwm on 2016/5/21.
 */
function Hello(arg) {
    console.log(arg);
    return arg;
}
var output = Hello(10);
// alert(output);
var isBoon = true;
function tell(bool) {
    console.log(bool);
}
tell(isBoon);
var num = 10;
function tell2() {
    console.log(num);
}
tell2();
var str = "wwmin";
function tell3() {
    console.log(str);
}
tell3();
var list = [1, 2, 3];
var list3 = [1, 2, 3];
function tell4() {
    console.log(list);
}
tell4();
var x;
x = ['hello', 20];
console.log(x);
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color[1];
console.log(c);
var notSure = 4;
notSure = "maybe a string instead";
console.log(notSure);
notSure = false;
console.log(notSure);
var list2 = [1, true, "string is OK"];
list2[0] = { "anem": "wwmin" };
list2[1] = 23;
// list2[2]=32;
// list2[3]=232;
// list2[4]="sdfsdfsd";
// list2[5]=false;
console.log(list2);
function warnUser() {
    console.log("This is my warning message");
}
warnUser();
var Person = (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    ;
    Person.prototype.Print = function () {
        // console.log(this.name+":"+this.age);
        return this.name + ":" + this.age;
    };
    return Person;
}());
var p = new Person("wwmin", 27);
console.log(p.Print());
//# sourceMappingURL=myTypeScript1.js.map