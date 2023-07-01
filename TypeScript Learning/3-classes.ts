class Employee {
  //By default all the properties and classes are public.
  //we can use # or private key word to make a property private
  //protected can use in class extending
  #id: number;
  protected name: string;
  protected address: string;

  //In typeScript we cannot define multiple constructors like other programming languages because it does not support multiple constructors. So we cannot have both default and parameterized constructors. we should only use one
  // constructor() {
  //   this.id = 1;
  //   this.name = "Kaviya";
  //   this.address = "Colombo";
  // }

  constructor(id: number, name: string, address: string) {
    this.#id = id;
    this.name = name;
    this.address = address;
  }

  //don't have to use fuction keyword
  getNameWithAddress(): string {
    return `${this.name} at ${this.address}`;
  }

  static getEmployeeCount(): number {
    return 50;
  }

  //setters and getters
  set empId(id: number) {
    this.#id = id;
  }
  get empId() {
    return this.#id;
  }

  set empName(name: string) {
    this.name = name;
  }
  get empName() {
    return this.name;
  }

  set empAddress(address: string) {
    this.address = address;
  }
  get empAddress() {
    return this.address;
  }
}

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
  constructor(id: number, name: string, address: string) {
    super(id, name, address);
  }

  getNameWithAddress(): string {
    return `${this.name} Manager at ${this.address}`;
  }
}

let manager1 = new Manager(3, "Kavindu", "Yakkala");
// console.log(manager1);
// console.log(manager1.getNameWithAddress());
//console.log(Manager.getEmployeeCount());
