const capitalize = require("./capitalize");

test("First character capitalized", () => {
  expect(capitalize("string")).toBe("String");
});
