const Intern = require("../lib/Intern");

test("set school via constructor", () => {
  const testValue = "UCLA";
  const e = new Intern("Cat", 1, "email@any.com", testValue);
  expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Cat", 1, "email@any.com", "UCLA");
  expect(e.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "UCLA";
  const e = new Intern("Cat", 1, "email@any.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});
