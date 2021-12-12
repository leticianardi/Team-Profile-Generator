const Employee = require('../lib/Employee');

test("create an employee object", () => {
 const employee = new Employee();
 
 expect(typeof(employee)).toBe('object');
});


test("get employee's name from constructor argument", () => {
 const name = "Cat"
 const employee = new Employee(name)
 expect(employee.name).toBe(name)
})

test("get employee's ID", () => {
 const testValue = 100;
 const employee = new Employee("name", testValue)
 expect(employee.id).toEqual(expect.any(Number))
})

test ("get employee's email", ()=> {
 const testValue = "email@any.com"
 const employee = new Employee("Cat", 1, testValue)
 expect(employee.email).toBe(testValue)
})

test('test getName()', () => {
 const testValue = "Cat"
 const employee = new Employee(testValue)
 expect(employee.getName()).toBe(testValue)
});

test('test getId()', () => {
 const testValue = 100;
 const employee = new Employee("Cat", testValue)
 expect(employee.getId()).toEqual(expect.any(Number))
});


test('test getEmail()', () => {
 const testValue = 'email@any.com'
 const employee = new Employee("Cat", 1, testValue)
 expect(employee.getEmail()).toBe(testValue)
});

test("getRole() should return \"Employee\"", () => {
 const testValue = "Employee"; 
 const employee = new Employee("Cat", 1, "email@nay.com");
 expect(employee.getRole()).toBe(testValue);
});