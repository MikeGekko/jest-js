const subtract = require('../src/subtract')

test('Subtract two numbers', () => {
  expect(subtract(1, 2)).toBe(-1);
});
