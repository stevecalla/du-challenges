/**
 * Heirarchical conversation example
 */

const inquirer = require("inquirer");
const employees = [];

 const directionsPrompt = {
   type: 'list',
   name: 'direction',
   message: 'Which direction would you like to go?',
   choices: ['Forward', 'Right', 'Left', 'Back'],
 };
 
 async function main() {
   console.log('Instructions');

   //GET EMPLOYEE INFO
   let role = await getEmployeeRole();

   let employee = await getEmployeeInfo();

   let employeeDetails = role.role === "Manager" ? await getManagerInfo() : role.role === "Engineer" ? await getEngineerInfo() : await getInternInfo();

  //  COMBINE EMPLOYEE INFO INTO ONE OBJECT
   employee.role = role.role;
   employee[Object.keys(employeeDetails)] = Object.values(employeeDetails).join('');
  //  console.log(employee);

   //PUSH EMPLOYEES INTO AN ARRAY
   employees.push(employee);

   //DETERMINE IF USER WOULD LIKE TO ADD MORE EMPLOYEES
   await confirmContinue();
 }

 getEmployeeInfo = async () => {
  const employeeAnswers = await inquirer.prompt(promptEmployeeInfo);
  // console.log(employeeAnswers);
  return employeeAnswers;
 }

 getEmployeeRole = async () => {
  const selectRole = await inquirer.prompt(promptEmployeeRole);
  // console.log(selectRole);
  return selectRole;
 }

 getManagerInfo = async () => {
  const managerInfo = await inquirer.prompt(promptManagerInfo);
  // console.log(managerInfo);
  return managerInfo;
 }

 getEngineerInfo = async () => {
  const engineerInfo = await inquirer.prompt(promptEngineerInfo);
  // console.log(engineerInfo);
  return engineerInfo;
 }

 getInternInfo = async () => {
  const internInfo = await inquirer.prompt(promptInternInfo);
  // console.log(internInfo);
  return internInfo;
 }

 confirmContinue = async () => {
  const confirm = await inquirer.prompt(promptConfirmContinue);
  console.log(confirm);
  if (confirm.confirmContinue) {
   main();
  }
  return confirm;
 }

 const promptEmployeeRole = [
   {
     prefix: "⠋🟡 1)",
     type: "rawlist",
     name: "role",
     message: "Please select the employee's role?",
     choices: ['Engineer', 'Intern', 'Manager'],
     // pageSize: 10,
     default: 2,
     suffix: " 🟡",
   },
 ]
 
 const promptEmployeeInfo = [
  {
    prefix: "⠋🟡 2)",
    type: "input",
    name: "firstName",
    message: `What is the employee's first name`,
    default: "steve",
    suffix: " 🟡",
    validate(answer) {
      if (!answer) {
        return "Please, provide a first name!";
      }
      return true;
    },
    filter(answer) {
      answer = answer.trim();
      // answer = //to uppercase
      return answer;
    },
  },
  {
    prefix: "⠋🟡 3)",
    type: "input",
    name: "lastName",
    message: `What is the employee's last name`,
    default: "calla",
    suffix: " 🟡",
    validate(answer) {
      if (!answer) {
        return "Please, provide a last name!";
      }
      return true;
    },
    filter(answer) {
      answer = answer.trim();
      // answer = //to uppercase
      return answer;
    },
  },
  {
    prefix: "⠋🟡 4)",
    name: "employeeId",
    type: "number",
    message: "Please enter the employee's ID?",
    default: "1",
    // validate(input) {
    //   console.log(input)
    //   if (typeof input !== 'number') {
    //     return "Please provide a number!";
    //   }
    //   return true;
    // },
    filter(answer) {
      // answer = answer.trim();
      return answer;
    },
  },
  {
    prefix: "⠋🟡 5)",
    name: "emailAddress",
    type: "input",
    message: "Please enter the employee's email address?",
    default: "callasteven@gmail.com",
    validate(answer) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(answer)) {
        return "Please provide a valid email address!";
      }
      return true;
    },
  },
];

const promptManagerInfo = [
  {
    prefix: "⠋🟡 6)",
    type: "input",
    name: "officeNumber",
    message: "Please enter the manager's office number?",
    default: "10",
    suffix: " 🟡",
    filter(answer) {
      return answer.trim();
    },
  },
]

const promptEngineerInfo = [
  {
    prefix: "⠋🟡 6)",
    type: "input",
    name: "gitHubUserName",
    message: "Please enter the engineer's GitHub user name?",
    default: "stevecalla",
    suffix: " 🟡",
    filter(answer) {
      return answer.trim();
    },
  },
]

const promptInternInfo = [
  {
    prefix: "⠋🟡 6)",
    type: "input",
    name: "internSchool",
    message: "Please enter the intern's school?",
    default: "Oxford",
    suffix: " 🟡",
    filter(answer) {
      //todo capitalize
      return answer.trim();
    },
  },
]

const promptConfirmContinue = [
  {
    prefix: "⠋🟡 1)",
    type: "confirm",
    name: "confirmContinue",
    message: `Would you like to add more employees?`,
    default: "true",
    suffix: " 🟡",
  },
]
 
 main();