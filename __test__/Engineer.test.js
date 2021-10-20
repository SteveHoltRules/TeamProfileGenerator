const Employee = require("../lib/Employee.js");
const Engineer = require("../lib/Engineer.js");

test("create an employee", () => {
  const engineer = new Engineer("Tim", 234, "email@email.com","github");
  expect(engineer.name).toBe("Tim");
  expect(engineer.id).toEqual(expect.any(Number));
  expect(engineer.email).toEqual(expect.stringMatching(/[@]+/));
  expect(engineer.github).toEqual(expect.any);
});
