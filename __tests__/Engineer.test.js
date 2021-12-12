const Engineer = require("../lib/Engineer");

test("set GitHUb account via constructor", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Cat", 1, "email@any.com", testValue);
  expect(e.github).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
  const testValue = "Engineer";
  const e = new Engineer("Cat", 1, "email@any.com", "GitHubUser");
  expect(e.getRole()).toBe(testValue);
});

test("get GitHub username via getGithub()", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Cat", 1, "email@any.com", testValue);
  expect(e.getGithub()).toBe(testValue);
});
