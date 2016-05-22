/**
 * Created by wwm on 2016/5/21.
 */
var Student = (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello," + person.firstName + " " + person.lastName;
}
var user = new Student("wang", "wei", "min");
console.log(greeter(user));
function f() {
    var a = 10;
    return function g() {
        return a + 1;
    };
}
var g = f();
g();
for (var a = 0; a < 10; a++) {
    // console.log("用var声明变量"+a);
    setTimeout(function () { console.log("用var " + a); }, 100 * a);
}
var _loop_1 = function(ii) {
    // console.log("用let声明变量"+ii);
    setTimeout(function () { console.log("用let " + ii); }, 100 * ii);
};
for (var ii = 0; ii < 10; ii++) {
    _loop_1(ii);
}
function sumMatix(matrix) {
    var sum = 0;
    for (var i = 0; i < matrix.length; i++) {
        var currentRow = matrix[i];
        for (var i_1 = 0; i_1 < currentRow.length; i_1++) {
            sum += currentRow[i_1];
        }
    }
    return sum;
}
console.log(sumMatix([[23, 54, 45, 34, 53, 25, 77]]));
var _loop_2 = function(j) {
    setTimeout(function () { console.log(j); }, 100 * j);
    (function (j) {
        setTimeout(function () { console.log(j); }, 100 * j);
    })(j);
};
for (var j = 0; j < 10; j++) {
    _loop_2(j);
}
function foo1() {
    return b;
}
console.log(foo1());
var b = 100000;
console.log(foo1());
try {
    throw "oh no!";
}
catch (e) {
    console.log("Oh well...");
    console.log(e);
}
var _loop_3 = function(i) {
    setTimeout(function () { console.log(i); }, 100 * i);
};
for (var i = 0; i < 10; i++) {
    _loop_3(i);
}
var numLivesForCat = 9;
var kitty = {
    name: "Aurora",
    numLives: numLivesForCat
};
var kettys = {
    name: "Danilelle",
    numLives: numLivesForCat
};
kettys.name = "wwmin";
// kettys.numLives=23;
console.log(kettys);
var input = [1, 2];
var first = input[0], second = input[1];
console.log(first);
console.log(second);
function keepWholeObject(wholeObject) {
    var a = wholeObject.a, _a = wholeObject.b, b = _a === void 0 ? 1001 : _a;
    return wholeObject;
}
console.log(keepWholeObject({ a: "wwminsfsdfsdfsd", b: 12 }));
//# sourceMappingURL=Classtest.js.map