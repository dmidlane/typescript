let id: number = 5;
let company: string = 'Domain Renovations'
let isPublished: boolean = true
let x: any = 'Hello'

let ids: number[] = [1,2,3,4,5]
let arr: any[] = [true, 'hi', 1]

// Tuple
let person: [number, string, boolean] = [2,'hello',false]

// Tuple Array
let employee: [number, string][]

employee = [
    [1,'Dom'],
    [2, 'Harriet'],
    [3, 'Sky']
]

// Union -- if you want a variable to allow more than one type

let productId: string | number

productId = 'sef1se6f54654'
productId = 654654654


// Enum
enum Direction {
    Up,
    Down,
    Left,
    Right
}

enum DirectionStrings {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
}

// Objects - ugly way
const user: {
    id: number,
    name: string
} = {
    id: 1,
    name: 'Harri'
}

// Objects
type User = {
    id: number,
    name: string
}

const user2: User = {
    id: 1,
    name: 'Harri'
}

// Type Assertion - explicitly telling the compiler to treat a variable as a particular type

let cid: any = 1
let customerId = <number>cid
// or
let customerId2 = cid as number


// Functions
// function return value is stated after the param brackets
function addNum(x: number, y: number): number {
    return x + y
}

// Void
function log(message: string | number): void {
    console.log(message)
}

// Interfaces
    // optional properties using ?
    // read only properties with readonly keyword
interface Employee {
    readonly id: number,
    name: string,
    age?: number
}

// Function Interfaces

interface SimpleMathFunc {
    (x: number, y: number): number
}

// using the interface
const add: SimpleMathFunc = (x: number, y: number): number => x + y
const subtract: SimpleMathFunc = (x: number, y: number): number => x- y


// Classes - are in ES6 JS

class Person {
    id: number
    name: string
    private age: number
    protected height: number

    constructor(id: number, name: string) {
        this.id = id,
        this.name = name
        this.age = 99
        this.height = 185
    }
    
    register() {
        return `${this.name} is now registered`
    }
}

const Dom = new Person(123, 'Dom')
const Harriet = new Person(321, 'Harri')

// Access Modifers
// Properties are public by default
// Private -- can only access the property from within the class
// Protected -- can only access it within the class or any class extended from that class
// Public - is the default so not much point in writing it


// Class Interfaces

interface HumanInterface {
    id: number
    name: string
    register():string
}

class Human implements HumanInterface {
    id: number
    name: string;

    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }
    register(): string {
        return `${this.name} is now registered`
    }

}


// extending classes - Subclasses

class StaffMember extends Human {
    position: string

    constructor(id: number, name: string, position: string) {
        super(id, name)
        this.position = position
    }

}

const staffMember = new StaffMember(9, 'Berty', 'VP of Bulls**t')
console.log(staffMember.register())


// Generics

function getArray<T>(items: T[]): T[] {
    return new Array().concat(items)
}

let numArray = getArray<number>([1,2,3,4])
let strArray = getArray<string>(['Dom', 'Harri', 'Sky'])

// numArray.push('a string') // wasn't allowed
strArray.push('a string')