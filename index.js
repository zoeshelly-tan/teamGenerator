const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const Manager = require('./manager');
const Enginner = require('./engineer');
const Intern = require('./intern');



const questions = [
    {
        type: 'input',
        message: 'What is your name?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is your ID?',
        name: 'id',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
    {
        type: 'list',
        message: 'Whay is the role?',
        name: 'role',
        choices: ["Manager",
            "Engineer",
            "Intern"
        ]
    },
]

const managerQuestion = [
    {
        type: 'input',
        message: 'What is your Office number?',
        name: 'office',
    },
]

const EnginnerQuestion = [
    {
        type: 'input',
        message: 'What is your github username?',
        name: 'github',
    },
]

const InternQuestion = [
    {
        type: 'input',
        message: 'What is your School name?',
        name: 'school',
    },
]
const confirm = [
    {
        type: 'confirm',
        message: 'Do you want to input more employee information?',
        name: 'input',
    },
]

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            throw err;
        }
        console.log("html file has been created")
    })
}

async function init() {
    const employees = [];
    let adding = true;
    console.log("in init");
    while (adding) {
        const { name, id, email, role } = await inquirer.prompt(questions);
        console.log("in adding");
        if (role === "Manager") {
            const { office } = await inquirer.prompt(managerQuestion);
            console.log("in manager");

            employees.push(new Manager(name, id, email, office));
        }

        else if (role === "Engineer") {
            const { github } = await inquirer.prompt(EnginnerQuestion);
            employees.push(new Enginner(name, id, email, github));

        }

        else if (role === "Intern") {
            const { school } = await inquirer.prompt(InternQuestion);
            employees.push(new Intern(name, id, email, school));

        }


        const { input } = await inquirer.prompt(confirm);

        if (input === false) {
            adding = false;

            console.log("adding is false");

            let html = generateMarkdown(employees);

            return writeToFile("index.html", html);
        }
    }

}

function generateMarkdown(employees) {
    html= `
    <!doctype html>
    <html lang="en">
      <head>
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- Bootstrap CSS -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
        <title>Hello, world!</title>
      </head>
      <body>
          <div class="container">
    <div class="row">
        <div class="col-md-12" style="background-color:pink;padding-top: 2%; margin-bottom: 5%;">
            <h1 style="text-align: center;">Our Team</h1>
        </div>
    </div>
    <div class="row">
  `;

  for (let i=0; i < employees.length; i++) {
      let employee = employees[i];
      let role = employee.getRole();

      if (role === "Manager") {
          html += generateManager(employee);
      } else if (role === "Engineer") {
          html += generateEngineer(employee);
      } else {
          html += generateIntern(employee);
      }
  }

  // close html

  html += `</div>
  </div>
</body>

</html>`

  return html;
}

  function generateManager(employee){
      return `<div class="col-md-4">
      <div class="card" style="width: 18rem; padding-top: 2%;">
          <div class="card-body">
              <h5 class="card-title">${employee.getRole()}</h5>
          </div>
          <ul class="list-group list-group-flush">
              <li class="list-group-item">${employee.name}</li>
              <li class="list-group-item">${employee.id}</li>
              <li class="list-group-item">${employee.email}</li>
              <li class="list-group-item">${employee.officeNumber}</li>
          </ul>
      </div>
  </div>`
  }

  function generateEngineer(employee){
    return `<div class="col-md-4">
    <div class="card" style="width: 18rem; padding-top: 2%;">
        <div class="card-body">
            <h5 class="card-title">${employee.getRole()}</h5>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">${employee.name}</li>
            <li class="list-group-item">${employee.id}</li>
            <li class="list-group-item">${employee.email}</li>
            <li class="list-group-item">${employee.github}</li>
        </ul>
    </div>
</div>`
}
function generateIntern(employee){
    return `<div class="col-md-4">
    <div class="card" style="width: 18rem; padding-top: 2%;">
        <div class="card-body">
            <h5 class="card-title">${employee.getRole()}</h5>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">${employee.name}</li>
            <li class="list-group-item">${employee.id}</li>
            <li class="list-group-item">${employee.email}</li>
            <li class="list-group-item">${employee.school}</li>
        </ul>
    </div>
</div>`
}




init();