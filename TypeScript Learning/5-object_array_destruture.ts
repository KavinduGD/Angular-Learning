import { User } from "./4-interfaces";
//import * as UserInterface from "./4-interfaces";
let user: User = {
  name: "Kavindu",
  age: 23,
  id: 1,
  email: "Kavindu@gmail.com",
};

user.name;
user.email;

let { name: userName, email } = user;

console.log(userName, email);

let users: User[] = [
  {
    name: "Kavindu",
    age: 23,
    id: 1,
    email: "Kavindu@gmail.com",
  },
  {
    name: "Mahinda",
    age: 78,
    id: 2,
    email: "Mahinda@gmail.com",
  },
  {
    name: "Ranil",
    age: 81,
    id: 3,
    email: "Ranil@gmail.com",
  },
  {
    name: "Gota",
    age: 71,
    id: 4,
    email: "Gota@gmail.com",
  },
];
let [user1, user2, ...otherusers] = users;
console.log(user1, user2);
console.log(otherusers);

let result = otherusers.filter((user) => user.id > 2);
console.log("filteres array", result);
