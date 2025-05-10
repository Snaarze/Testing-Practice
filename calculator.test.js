const calculator = require("./calculator");

test("1  + 1 is equal to 2", () => {
  expect(calculator.add(1, 1)).toBe(2);
});

test("50  / 3 is equal to 10", () => {
  expect(calculator.divide(50, 5)).toBe(10);
});

test("5 * 6 is equal to 30", () => {
  expect(calculator.multiply(5, 6)).toBe(30);
});
test("99  - 22 is equal to 77", () => {
  expect(calculator.subtract(99, 22)).toBe(77);
});
