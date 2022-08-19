//data from inquirer
let employees = [
  {
    firstName: 'amanda',
    lastName: 'black',
    id: 5,
    email: 'a@a.com',
  },
  {
    firstName: 'giles',
    lastName: 'jones',
    id: 25,
    email: 'g@g.com',
  },
]

class Employee {
  constructor(firstName, lastName, id, email) {
    this.firstName = firstName; //use filter in inquirer to cap first letter
    this.lastName = lastName; ////use filter in inquirer to cap first letter
    this.fullName = "";
    this.id = id;
    this.email = email;
    this.role = "";
  }

  introduceSelf() {
    console.log(`Hi! I'm ${this.firstName}`);
  }

  getName() {
    this.fullName = `${this.firstName} ${this.lastName}`
    return this; //return the object for use
  }

  getId() {
    return this; //return the object for use
  }

  getRole() {
    return this.role = "Employee"
  }
}

class Manager extends Employee {
  constructor(firstName, lastName, id, email, officeNumber) {
    super(firstName, lastName, id, email);
    this.officeNumber = officeNumber;
  }

  getRole() {
    return this.role = "Manager"
  }
}

class Engineer extends Employee {
  constructor(firstName, lastName, id, email, gitHubUserName) {
    super(firstName, lastName, id, email);
    this.gitHubUserName = gitHubUserName;
  }

  getGitHubUserName() {
    // this.gitHubUserName = gitHubUserName;
  }

  getRole() {
    return this.role = "Engineer"
  }
}

class Intern extends Employee {
  constructor(firstName, lastName, id, email, school) {
    super(firstName, lastName, id, email);
    this.school = school;
  }

  getSchool() {
    // this.school = school;
  }

  getRole() {
    return this.role = "Intern"
  }
}

const giles = new Employee('giles', 'jones', 55, 'g@g.com');
giles.getRole();
const amanda = new Manager('amanda', 'black', 25, 'a@a.com', 1);
amanda.getRole();
const sam = new Engineer('sam', 'licken', 2, 's@s.com', 'slicken');
sam.getRole();
sam.getGitHubUserName()
const flora = new Intern('flora', 'green', 250, 'f@f.com', 'Oxford');
flora.getRole();
flora.getSchool();

console.log(amanda.getName());
console.log(giles.getName());
console.log(sam.getName());
console.log(flora.getName());

// let newEmployee = "";
// employees.forEach(element => {
//   element = new Employee(element.firstName, element.lastName, element.id, element.email);
//   console.log(element);
// })






