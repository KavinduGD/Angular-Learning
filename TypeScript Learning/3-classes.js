"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Employee_id;
class Employee {
    //In typeScript we cannot define multiple constructors like other programming languages because it does not support multiple constructors. So we cannot have both default and parameterized constructors. we should only use one
    // constructor() {
    //   this.id = 1;
    //   this.name = "Kaviya";
    //   this.address = "Colombo";
    // }
    constructor(id, name, address) {
        //By default all the properties and classes are public.
        //we can use # or private key word to make a property private
        //protected can use in class extending
        _Employee_id.set(this, void 0);
        __classPrivateFieldSet(this, _Employee_id, id, "f");
        this.name = name;
        this.address = address;
    }
    //don't have to use fuction keyword
    getNameWithAddress() {
        return `${this.name} at ${this.address}`;
    }
    static getEmployeeCount() {
        return 50;
    }
    //setters and getters
    set empId(id) {
        __classPrivateFieldSet(this, _Employee_id, id, "f");
    }
    get empId() {
        return __classPrivateFieldGet(this, _Employee_id, "f");
    }
    set empName(name) {
        this.name = name;
    }
    get empName() {
        return this.name;
    }
    set empAddress(address) {
        this.address = address;
    }
    get empAddress() {
        return this.address;
    }
}
_Employee_id = new WeakMap();
// let emp1 = new Employee();
// emp1.id = 1;
// emp1.name = "Kavindu";
// emp1.address = "Gampaha";
// console.log(emp1);
let emp2 = new Employee(1, "Kavindu", "Gampaha");
emp2.empId = 100;
emp2.empName = "Mahinda";
emp2.empAddress = "galle";
// console.log(emp2);
// console.log(emp2.empId);
// console.log(emp2.getNameWithAddress());
//console.log(Employee.getEmployeeCount());
class Manager extends Employee {
    constructor(id, name, address) {
        super(id, name, address);
    }
    getNameWithAddress() {
        return `${this.name} Manager at ${this.address}`;
    }
}
let manager1 = new Manager(3, "Kavindu", "Yakkala");
// console.log(manager1);
// console.log(manager1.getNameWithAddress());
//console.log(Manager.getEmployeeCount());
