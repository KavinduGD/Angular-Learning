//interface are not exists in JS
export interface User {
  name: string;
  //optional
  age?: number;
  id: number;
  email: string;
}

let user: User = { name: "Kavindu", id: 1, email: "Kavidu@gmail.com" };
//console.log(user);

interface Employees extends User {
  salary: number;
}

let emp1: Employees = {
  name: "Kavindu",
  id: 1,
  email: "Kavindu@gmail.com",
  salary: 40000,
};
console.log(emp1);

interface Login {
  Login(): User;
}
