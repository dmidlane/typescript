"use strict";
let id = 5;
let company = 'Domain Renovations';
let isPublished = true;
let x = 'Hello';
let ids = [1, 2, 3, 4, 5];
let arr = [true, 'hi', 1];
// Tuple
let person = [2, 'hello', false];
// Tuple Array
let employee;
employee = [
    [1, 'Dom'],
    [2, 'Harriet'],
    [3, 'Sky']
];
// Union -- if you want a variable to allow more than one type
let productId;
productId = 'sef1se6f54654';
productId = 654654654;
// Enum
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
var DirectionStrings;
(function (DirectionStrings) {
    DirectionStrings["Up"] = "Up";
    DirectionStrings["Down"] = "Down";
    DirectionStrings["Left"] = "Left";
    DirectionStrings["Right"] = "Right";
})(DirectionStrings || (DirectionStrings = {}));
// Objects - ugly way
const user = {
    id: 1,
    name: 'Harri'
};
const user2 = {
    id: 1,
    name: 'Harri'
};
// Type Assertion - explicitly telling the compiler to treat a variable as a particular type
let cid = 1;
let customerId = cid;
// or
let customerId2 = cid;
// Functions
// function return value is stated after the param brackets
function addNum(x, y) {
    return x + y;
}
// Void
function log(message) {
    console.log(message);
}
// using the interface
const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
// Classes - are in ES6 JS
class Person {
    constructor(id, name) {
        this.id = id,
            this.name = name;
        this.age = 99;
        this.height = 185;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const Dom = new Person(123, 'Dom');
const Harriet = new Person(321, 'Harri');
class Human {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
// extending classes
class StaffMember extends Human {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const staffMember = new StaffMember(9, 'Berty', 'VP of Bulls**t');
console.log(staffMember.register());
