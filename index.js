const inquirer = require("inquirer");

const generateHTML = require("./src/utils/generateHTML");

const Manager = require("./src/lib/Manager");
const Employee = require("./src/lib/Employee");
const Engineer = require("./src/lib/Engineer");
const Intern = require("./src/lib/Intern");

const employees = [];

const getAnswers = async (questions) => {
  const answers = await inquirer.prompt(questions);
  return answers;
};

const init = async () => {
  await createManager();

  let isTeamComplete = false;
  while (!isTeamComplete) {
    const employeeTypeQuestion = [
      {
        type: "list",
        message: "Please select the employee type you wish to add:",
        name: "employeeType",
        choices: [
          { name: "Engineer", value: "engineer", short: "Engineer" },
          { name: "Intern", value: "intern", short: "Intern" },
          { name: "None", value: "none", short: "None" },
        ],
      },
    ];
    const { employeeType } = await inquirer.prompt(employeeTypeQuestion);
    if (employeeType === "none") {
      isTeamComplete = true;
      console.log(employees);
    } else {
      if (employeeType === "engineer") {
        await createEngineer();
      }
      if (employeeType === "intern") {
        await createIntern();
      }
    }
  }
};

const createManager = async () => {
  const managerQuestions = [
    {
      type: "input",
      message: "Enter manager name:",
      name: "name",
    },
    {
      type: "input",
      message: "Enter employee ID:",
      name: "id",
    },
    {
      type: "input",
      message: "Enter your office number:",
      name: "officeNumber",
    },
    {
      type: "input",
      message: "Enter work email:",
      name: "email",
    },
  ];
  const managerAnswers = await inquirer.prompt(managerQuestions);

  const manager = new Manager(managerAnswers);
  employees.push(manager);
};

const createEngineer = async () => {
  const engineerQuestions = [
    {
      type: "input",
      message: "Please enter engineer name:",
      name: "name",
    },
    {
      type: "input",
      message: "Please enter engineer ID:",
      name: "id",
    },
    {
      type: "input",
      message: "Please enter engineer email:",
      name: "email",
    },
    {
      type: "input",
      message: "Please enter engineer github profile:",
      name: "github",
    },
  ];
  const engineerAnswers = await inquirer.prompt(engineerQuestions);
  console.log(engineerAnswers);
  const engineer = new Engineer(engineerAnswers);
  employees.push(engineer);
};

const createIntern = async () => {
  const internQuestions = [
    {
      type: "input",
      message: "Enter intern name:",
      name: "name",
    },
    {
      type: "input",
      message: "Enter intern email:",
      name: "email",
      validate: function (email) {
        // Regex mail check (return true if valid mail)
        return (
          /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(
            email
          ) || "Error"
        );
      },
    },

    {
      type: "input",
      message: "Enter intern ID:",
      name: "id",
    },
    {
      type: "input",
      message: "Enter intern school name:",
      name: "school",
    },
  ];
  const internAnswers = await inquirer.prompt(internQuestions);

  console.log(internAnswers);
  const intern = new Intern(internAnswers);
  employees.push(intern);
};

init();
