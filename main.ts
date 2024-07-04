// =========== Encapsulation =================

// 1

class User {
    public _fname: string;
    readonly _birthdate: number;
    private _username: string;
    constructor(fname: string, username: string, birthdate: number) {
        this._fname = fname;
        this._username = username;
        this._birthdate = birthdate;
    }
}

let user: User = new User("John", "john31", 2006);

// 2

class Animal {
    public name: string;
    readonly age: number;
    private isWild: boolean;
    constructor(name: string, age: number, isWild: boolean) {
        this.name = name;
        this.age = age;
        this.isWild = isWild;
    }
}

let animal: Animal = new Animal("Lion", 13, true);

// 3

class Car {
    public title: string;
    private hp: number;
    readonly color: string;
    constructor(title: string, hp: number, color: string) {
        this.title = title;
        this.hp = hp;
        this.color = color;
    }
}

let car: Car = new Car("Bugatti", 600, "red");

// 4

class Phone {
    private brand: string;
    color: string;
    readonly title: string;
    constructor(brand: string, color: string, title: string) {
        this.brand = brand;
        this.color = color;
        this.title = title;
    }
}

let phone: Phone = new Phone("Apple", "black", "iPhone");

// ============== Abstraction ==================

abstract class Shape {
    abstract getArea(): number;
    abstract getPerimeter(): number;
}

// 1, 2

class Rect extends Shape {
    a: number;
    b: number;
    constructor(son: number, son1: number) {
        super();
        this.a = son;
        this.b = son1;
    }
    getArea(): number {
        return this.a * this.b;
    }
    getPerimeter(): number {
        return 2 * (this.a + this.b);
    }
}

let rect: Rect = new Rect(2, 4);
// console.log(rect.getArea());
// console.log(rect.getPerimeter());

// 3

abstract class Person {
    abstract getAge(): number;
}

class Men extends Person {
    firstName: string;
    age: number;
    constructor(firstName: string, age: number) {
        super();
        this.firstName = firstName;
        this.age = age;
    }
    getAge(): number {
        return this.age;
    }
}

let men: Men = new Men("John", 32);

// console.log(men.getAge());

// 4

abstract class Computer {
    abstract getTitle(): string;
}

class Laptop extends Computer {
    title: string;
    storage: number;
    constructor(title: string, storage: number) {
        super();
        this.title = title;
        this.storage = storage;
    }
    getTitle(): string {
        return this.title;
    }
}

let laptop: Laptop = new Laptop("HP", 256);

// console.log(laptop.getTitle());

// ============== Inheritance ====================

class SuperCar {
    title: string;
    color: string;
    constructor(title: string, color: string) {
        this.title = title;
        this.color = color;
    }
}

class Ferarri extends SuperCar {
    hp: number;
    brand: string;
    constructor(title: string, color: string, hp: number, brand: string) {
        super(title, color);
        this.hp = hp;
        this.brand = brand;
    }
}

let ferarri: Ferarri = new Ferarri("Ferarri", "green", 500, "Ferarri");

class Audi extends SuperCar {
    hp: number;
    brand: string;
    constructor(title: string, color: string, hp: number, brand: string) {
        super(title, color);
        this.hp = hp;
        this.brand = brand;
    }
}

let audi: Audi = new Audi("Audi", "green", 500, "Audi");

class Lamborghini extends SuperCar {
    hp: number;
    brand: string;
    constructor(title: string, color: string, hp: number, brand: string) {
        super(title, color);
        this.hp = hp;
        this.brand = brand;
    }
}

let lamborghini: Lamborghini = new Lamborghini(
    "lamborghini",
    "green",
    500,
    "Lamborghini"
);

class Mers extends SuperCar {
    hp: number;
    brand: string;
    constructor(title: string, color: string, hp: number, brand: string) {
        super(title, color);
        this.hp = hp;
        this.brand = brand;
    }
}

let mers: Mers = new Mers("Mers", "green", 500, "Mers");

// =========== Polymorphism =============

class MathAdd {
    add(a: number, b: number): number;
    add(a: string, b: string): string;
    add(a: any, b: any): any {
        return a + b;
    }
}
class NumberAdd extends MathAdd {
    constructor() {
        super();
    }
    add(a: any, b: any): any {
        return a + b;
    }
}

let adding: NumberAdd = new NumberAdd();
// console.log(adding.add(2, 5));
// console.log(addingStr.add("hello", "world"));

class MathMinus {
    minus(a: number, b: number): number;
    minus(a: string, b: string): string;
    minus(a: any, b: any): any {
        return a - b;
    }
}

class NumberMinus extends MathMinus {
    constructor() {
        super();
    }
    minus(a: any, b: any): any {
        return a - b;
    }
}

let minus: NumberMinus = new NumberMinus();

console.log(minus.minus(2, 4));
