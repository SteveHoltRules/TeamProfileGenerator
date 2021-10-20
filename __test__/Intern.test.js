const Intern = require("../lib/Intern.js");

test("create an intern", () => {
  const intern = new Intern("Tim", 234, "email@email.com", "school");
  expect(intern.name).toBe("Tim");
  expect(intern.id).toEqual(expect.any(Number));
  expect(intern.email).toEqual(expect.stringMatching(/[@]+/));
  expect(intern.school).toEqual(expect.any(String));
});