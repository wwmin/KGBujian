/**
 * Created by wwm on 2016/5/21.
 */
function add(x, y) {
    return x + y + z;
}
var myAdd = function (x, y) { return x + y; };
var x = 10;
var y = 50;
var z = 100;
function addToz(x, y) {
    return x + y + this.x;
}
console.log(addToz(1, 2));
function add1(x, y) {
    return x + y;
}
var myAdd1 = function (x, y) { return x + y; };
var myAdd2 = function (x, y) { return x + y; };
function buildName(firstName, lastName) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
var result1 = buildName("Bob");
var result2 = buildName("Bob", "Adams");
function buildName2(firstName, lastName) {
    if (lastName === void 0) { lastName = "min"; }
    return firstName + " " + lastName;
}
var result3 = buildName2("Bob"); //Bob min
//# sourceMappingURL=FunctionTest.js.map