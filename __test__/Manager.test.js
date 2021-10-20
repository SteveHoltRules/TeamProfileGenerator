const Manager = require("../lib/manager.js");

test("create a manager", () => {
  const manager = new Manager("Tim", 234, "email@email.com", 123);
  expect(manager.name).toBe("Tim");
  expect(manager.id).toEqual(expect.any(Number));
  expect(manager.email).toEqual(expect.stringMatching(/[@]+/));
  expect(manager.officeNumber).toEqual(expect.any(Number));
});