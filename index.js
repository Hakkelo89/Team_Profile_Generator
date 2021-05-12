const inquirer = require("inquirer");

const generateHTML = require("./src/utils/generateHTML");

const Manager = require("./utils/lib/Manager");
const Employee = require("./utils/lib/Employee");
const Engineer = require("./utils/lib/Engineer");
const Intern = require("./utils/lib/Intern");

const getAnswers = async (questions) => {
  const answers = await inquirer.prompt(questions);
  return answers;
};

// init function will generate html, write to file
const init = async () => {
  await createManager();

  while (!isTeamComplete) {
    const employeeTypeQuestion = [
      {
        type: "list",
        message: "Please select the employee type you wish to add:",
        name: "employeeType",
        choices: [
          { name: "Engineer", value: "engineer", short: "Engineer" },
          { name: "Intern", value: "intern", short: "Intern" },
          { name: "None", value: "none", short: "None" }, // only when there is 2 employees in the employees array, i.e. a manager + 1
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
      validate: validateInput,
    },
    {
      type: "input",
      message: "Enter employee ID:",
      name: "id",
      validate: validateInput,
    },
    {
      type: "input",
      message: "Enter your office number:",
      name: "officeNumber",
      validate: validateInput,
    },
    {
      type: "input",
      message: "Enter work email:",
      name: "email",
      validate: validateInput,
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
      validate: validateInput,
    },
    {
      type: "input",
      message: "Please enter engineer ID:",
      name: "id",
      validate: validateInput,
    },
    {
      type: "input",
      message: "Please enter engineer email:",
      name: "email",
      validate: validateInput,
    },
    {
      type: "input",
      message: "Please enter engineer github profile:",
      name: "github",
      validate: validateInput,
    },
  ];
  const engineerAnswers = await inquirer.prompt(engineerQuestions);
  console.log(engineerAnswers);
  const engineer = new Engineer(engineerAnswers);
  employees.push(engineer);
};

// create intern question array
const createIntern = async () => {
  const internQuestions = [
    {
      type: "input",
      message: "Enter intern name:",
      name: "name",
      validate: validateInput,
    },
    {
      type: "input",
      message: "Enter intern email:",
      name: "email",
      validate: validateInput,
    },
    {
      type: "input",
      message: "Enter intern ID:",
      name: "id",
      validate: validateInput,
    },
    {
      type: "input",
      message: "Enter intern school name:",
      name: "school",
      validate: validateInput,
    },
  ];
  const internAnswers = await inquirer.prompt(internQuestions);
  // The intern answers as pushed into the employees array
  console.log(internAnswers);
  const intern = new Intern(internAnswers);
  employees.push(intern);
};

// Function call to initialize app
init();
