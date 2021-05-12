const inquirer = require("inquirer");

const Manager = require("./utils/lib/Manager");
const Employee = require("./utils/lib/Employee");
const Engineer = require("./utils/lib/Engineer");
const Intern = require("./utils/lib/Intern");

const getAnswers = async (questions) => {
  const answers = await inquirer.prompt(questions);
  return answers;
};

const init = async () => {};

init();
