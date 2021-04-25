const Enginner = require("../engineer");

//create a new enginner 
test('create a new enginner', () =>{
    const enginner = new Enginner('shelly','22','shelly@email.com','github');
        expect(enginner.name).toEqual('shelly');
        expect(enginner.id).toEqual('22')
        expect(enginner.email).toEqual('shelly@email.com');
        expect(enginner.github).toEqual('github');
    });

//testing getRole function
test('testing getRole function', ()=>{
    const enginner = new Enginner('shelly','22','shelly@email.com','github');
    expect(enginner.getRole()).toEqual('Engineer');
})

//testing getGithub function
test('testing getGithub function',()=>{
    const enginner = new Enginner('shelly','22','shelly@email.com','github');
    expect(enginner.getGithub()).toEqual('github');
})

