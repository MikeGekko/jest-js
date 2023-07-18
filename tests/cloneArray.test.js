const cloneArray = require('../src/cloneArray')

test('Clone array', () => {
  araay = [1, 2, 3];
  expect(cloneArray(array)).toEqual(array);
  expect(cloneArray(array)).not.toBe(array);
});
