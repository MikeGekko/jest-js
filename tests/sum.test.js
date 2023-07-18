const sum = require('../src/sum')

test('Add two numbers', () => {
  expect(sum(1, 2)).toBe(3);
});
