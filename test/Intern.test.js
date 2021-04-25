const Intern = require('../intern');
const intern = require('../intern');

//Create new intern 
test('create new intern',()=>{
    const intern = new Intern('shelly','22','shelly@email.com','school');

    expect(intern.name).toEqual('shelly');
    expect(intern.id).toEqual('22');
    expect(intern.email).toEqual('shelly@email.com');
    expect(intern.school).toEqual('school');
})

//testing getRole function 
test('testing getRole function',()=>{
    const intern = new Intern('shelly','22','shelly@email.com','school');

    expect(intern.getRole()).toEqual('Intern');
})

//testing getSchool function
test('testing getRole function',()=>{
    const intern = new Intern('shelly','22','shelly@email.com','school');

    expect(intern.getSchool()).toEqual('school');
})

