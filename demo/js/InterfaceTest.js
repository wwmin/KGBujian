/**
 * Created by wwm on 2016/5/21.
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
console.log("Created by wwm on 2016/5/21");
function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
var myObj = { size: 10, label: "size 10 object" };
printLabel(myObj);
function createSquare(config) {
    var newSquare = { color: "white", area: 1000 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare = createSquare({ color: "black" });
console.log(mySquare);
var mySearch;
mySearch = function (source, subString) {
    var result = source.search(subString);
    return result != -1;
};
var mySearch2;
mySearch2 = function (src, sub) {
    var result = src.search(sub);
    if (result == -1) {
        return false;
    }
    else {
        return true;
    }
};
mySearch2("wwwwm", "m");
var myArray;
myArray = ["sdfd", "sdfsdfdf"];
var myStr = myArray[0];
var Animal = (function () {
    function Animal() {
    }
    return Animal;
}());
var Dog = (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        _super.apply(this, arguments);
    }
    return Dog;
}(Animal));
var Clock = (function () {
    function Clock(h, m) {
    }
    return Clock;
}());
var square = {};
square.color = "blue";
square.sideLength = 10;
square.penWidth = 4.5;
//# sourceMappingURL=InterfaceTest.js.map