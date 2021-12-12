const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test('get Office number', () => {
    const name = 'newname'
    const id = 1
    const email = 'email@any.com' 
    const office = 80;
    const employee = new Manager(name, id, email, office)

    expect(employee.office).toEqual(expect.any(Number))
});

test(' test getRole() to render Manager', () => {
    const name = 'newname'
    const id = 1
    const email = 'email@any.com' 
    const office = 80;
    const role = 'Manager'
    const employee = new Manager(name, id, email, office, role)  

    expect(employee.getRole()).toBe(role)
});

test('test getOffice()', () => {
    const name = 'newname'
    const id = 1
    const email = 'email@any.com' 
    const office = 80;
    const employee = new Manager(name, id, email, office)
     
    expect(employee.getOffice()).toEqual(expect.any(Number))
});