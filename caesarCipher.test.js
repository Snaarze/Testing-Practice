const caesarCipher = require("./caesarCipher");

test("xyz is equal to abc", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});
test("HeLLo is equal to KhOOr", () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});
test("hello is equal to khoor", () => {
  expect(caesarCipher("hello", 3)).toBe("khoor");
});
test("Hello, World! is equal to Khoor, Zruog!", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});
