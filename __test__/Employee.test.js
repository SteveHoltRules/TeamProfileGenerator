const { TestWatcher } = require('@jest/core');
const Employee = require('../lib/Employee.js');

test('create an employee',() => {
  const employee = new Employee('Tim',234,'email@email.com');
  expect(employee.name).toBe('Tim');
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.stringMatching(/[@]+/));
});