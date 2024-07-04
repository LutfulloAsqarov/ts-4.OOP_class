// =========== Encapsulation =================
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 1
var User = /** @class */ (function () {
    function User(fname, username, birthdate) {
        this._fname = fname;
        this._username = username;
        this._birthdate = birthdate;
    }
    return User;
}());
var user = new User("John", "john31", 2006);
// 2
var Animal = /** @class */ (function () {
    function Animal(name, age, isWild) {
        this.name = name;
        this.age = age;
        this.isWild = isWild;
    }
    return Animal;
}());
var animal = new Animal("Lion", 13, true);
// 3
var Car = /** @class */ (function () {
    function Car(title, hp, color) {
        this.title = title;
        this.hp = hp;
        this.color = color;
    }
    return Car;
}());
var car = new Car("Bugatti", 600, "red");
// 4
var Phone = /** @class */ (function () {
    function Phone(brand, color, title) {
        this.brand = brand;
        this.color = color;
        this.title = title;
    }
    return Phone;
}());
var phone = new Phone("Apple", "black", "iPhone");
// ============== Abstraction ==================
var Shape = /** @class */ (function () {
    function Shape() {
    }
    return Shape;
}());
// 1, 2
var Rect = /** @class */ (function (_super) {
    __extends(Rect, _super);
    function Rect(son, son1) {
        var _this = _super.call(this) || this;
        _this.a = son;
        _this.b = son1;
        return _this;
    }
    Rect.prototype.getArea = function () {
        return this.a * this.b;
    };
    Rect.prototype.getPerimeter = function () {
        return 2 * (this.a + this.b);
    };
    return Rect;
}(Shape));
var rect = new Rect(2, 4);
// console.log(rect.getArea());
// console.log(rect.getPerimeter());
// 3
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var Men = /** @class */ (function (_super) {
    __extends(Men, _super);
    function Men(firstName, age) {
        var _this = _super.call(this) || this;
        _this.firstName = firstName;
        _this.age = age;
        return _this;
    }
    Men.prototype.getAge = function () {
        return this.age;
    };
    return Men;
}(Person));
var men = new Men("John", 32);
// console.log(men.getAge());
// 4
var Computer = /** @class */ (function () {
    function Computer() {
    }
    return Computer;
}());
var Laptop = /** @class */ (function (_super) {
    __extends(Laptop, _super);
    function Laptop(title, storage) {
        var _this = _super.call(this) || this;
        _this.title = title;
        _this.storage = storage;
        return _this;
    }
    Laptop.prototype.getTitle = function () {
        return this.title;
    };
    return Laptop;
}(Computer));
var laptop = new Laptop("HP", 256);
// console.log(laptop.getTitle());
// ============== Inheritance ====================
var SuperCar = /** @class */ (function () {
    function SuperCar(title, color) {
        this.title = title;
        this.color = color;
    }
    return SuperCar;
}());
var Ferarri = /** @class */ (function (_super) {
    __extends(Ferarri, _super);
    function Ferarri(title, color, hp, brand) {
        var _this = _super.call(this, title, color) || this;
        _this.hp = hp;
        _this.brand = brand;
        return _this;
    }
    return Ferarri;
}(SuperCar));
var ferarri = new Ferarri("Ferarri", "green", 500, "Ferarri");
var Audi = /** @class */ (function (_super) {
    __extends(Audi, _super);
    function Audi(title, color, hp, brand) {
        var _this = _super.call(this, title, color) || this;
        _this.hp = hp;
        _this.brand = brand;
        return _this;
    }
    return Audi;
}(SuperCar));
var audi = new Audi("Audi", "green", 500, "Audi");
var Lamborghini = /** @class */ (function (_super) {
    __extends(Lamborghini, _super);
    function Lamborghini(title, color, hp, brand) {
        var _this = _super.call(this, title, color) || this;
        _this.hp = hp;
        _this.brand = brand;
        return _this;
    }
    return Lamborghini;
}(SuperCar));
var lamborghini = new Lamborghini("lamborghini", "green", 500, "Lamborghini");
var Mers = /** @class */ (function (_super) {
    __extends(Mers, _super);
    function Mers(title, color, hp, brand) {
        var _this = _super.call(this, title, color) || this;
        _this.hp = hp;
        _this.brand = brand;
        return _this;
    }
    return Mers;
}(SuperCar));
var mers = new Mers("Mers", "green", 500, "Mers");
// =========== Polymorphism =============
var MathAdd = /** @class */ (function () {
    function MathAdd() {
    }
    MathAdd.prototype.add = function (a, b) {
        return a + b;
    };
    return MathAdd;
}());
var NumberAdd = /** @class */ (function (_super) {
    __extends(NumberAdd, _super);
    function NumberAdd() {
        return _super.call(this) || this;
    }
    NumberAdd.prototype.add = function (a, b) {
        return a + b;
    };
    return NumberAdd;
}(MathAdd));
var adding = new NumberAdd();
// console.log(adding.add(2, 5));
// console.log(addingStr.add("hello", "world"));
var MathMinus = /** @class */ (function () {
    function MathMinus() {
    }
    MathMinus.prototype.minus = function (a, b) {
        return a - b;
    };
    return MathMinus;
}());
var NumberMinus = /** @class */ (function (_super) {
    __extends(NumberMinus, _super);
    function NumberMinus() {
        return _super.call(this) || this;
    }
    NumberMinus.prototype.minus = function (a, b) {
        return a - b;
    };
    return NumberMinus;
}(MathMinus));
var minus = new NumberMinus();
console.log(minus.minus(2, 4));
