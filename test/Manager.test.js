const { TestScheduler } = require("jest");
const Manager = require("../manager");

//create a new manager
test('create a new manager', () => {
    const manager = new Manager('shelly', '22', 'shelly@email.com', '232');
    expect(manager.name).toEqual('shelly');
    expect(manager.id).toEqual('22');
    expect(manager.email).toEqual('shelly@email.com');
    expect(manager.officeNumber).toEqual('232');
})

//testing getRole function 
test('testing getRole function', () => {
    const manager = new Manager('shelly', '22', 'shelly@email.com', '232');
    expect(manager.getRole()).toEqual('manager');
})

test('testing getOfficeNumber function', () => {
    const manager = new Manager('shelly', '22', 'shelly@email.com', '232');
 expect(manager.getOfficeNumber()).toEqual('232');
})

