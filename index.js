const inquirer = require("inquirer");
const path = require("path");

const generateHTML = require("./src/utils/generateHTML");
const Manager = require("./src/lib/Manager");
const Engineer = require("./src/lib/Engineer");
const Intern = require("./src/lib/Intern");
const writeToFile = require("./writeToFile");

const employees = [];
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const getAnswers = async (questions) => {
  const answers = await inquirer.prompt(questions);
  return answers;
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

  const intern = new Intern(internAnswers);
  employees.push(intern);
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
      const HTML = generateHTML(employees);
      console.log(HTML);
      writeToFile(HTML, outputPath);
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

init();
