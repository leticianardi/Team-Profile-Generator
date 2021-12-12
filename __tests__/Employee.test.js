const Employee = require('../lib/Employee');

test("create an employee object", () => {
 const employee = new Employee();
 
 expect(typeof(employee)).toBe('object');
});


test("get employee's name from the object", () => {
 const name = 'newname'
 const employee = new Employee(name)
 expect(employee.name).toBe(name)
})

test("get employee's ID", () => {
 const name = 'newname'
 const id = 1;
 const employee = new Employee(name,id)
 expect(employee.id).toEqual(expect.any(Number))
})

test ("get employee's email", ()=> {
 const name = 'newname'
 const id = 1
 const email = 'email@any.com'
 const employee = new Employee(name, id, email)
 expect(employee.email).toBe(email)
})

test('test getName()', () => {
 const name = 'newname'
 const employee = new Employee(name)
 
 expect(employee.getName()).toBe(name)
});

test('test getId()', () => {
 const name = 'newname'
 const id = 1;
 const employee = new Employee(name,id)

 expect(employee.getId()).toEqual(expect.any(Number))
});


test('test getEmail()', () => {
 const name = 'newname'
 const id = 1
 const email = 'email@any.com'
 const employee = new Employee(name, id, email)

 expect(employee.getEmail()).toBe(email)
});

test('getRole()', () => {
 const employee = new Employee() 
 const role = "Employee";

 expect(employee.getRole()).toBe(role);
});