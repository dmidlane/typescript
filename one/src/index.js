var id = 5;
var company = 'Domain Renovations';
var isPublished = true;
var x = 'Hello';
var ids = [1, 2, 3, 4, 5];
var arr = [true, 'hi', 1];
// Tuple
var person = [2, 'hello', false];
// Tuple Array
var employee;
employee = [
    [1, 'Dom'],
    [2, 'Harriet'],
    [3, 'Sky']
];
// Union -- if you want a variable to allow more than one type
var productId;
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
console.log(DirectionStrings.Right);
