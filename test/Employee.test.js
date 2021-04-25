const Employee = require('../employee');


//create a new employee 
test('create a new emplyee', () =>{
const employee = new Employee('shelly','22','shelly@email.com')

    expect(employee.name).toEqual('shelly');
    expect(employee.id).toEqual('22');
    expect(employee.email).toEqual('shelly@email.com');
});

//testing the getName function
test('testing the getName function', ()=>{
    const employee = new Employee('shelly','22','shelly@email.com');
    expect(employee.getName()).toEqual(expect.stringContaining('shelly'));
});

//testing the getId function
test('testing the getId function', ()=>{
const employee = new Employee('shelly','22','shelly@email.com');
expect(employee.getId()).toEqual(expect.stringContaining('22'));
})

//testing the getEmail function
test('testing the getEmail function', ()=>{
const employee = new Employee('shelly','22','shelly@email.com')
expect(employee.getEmail()).toEqual(expect.stringContaining('shelly@email.com'));
})

//testing the getRole function
test('testing the getRole function',()=>{
const employee = new Employee('shelly','22','shelly@email.com')
    expect(employee.getRole()).toEqual(expect.stringContaining('Employee'));
})
