const { expect, test } = require("@jest/globals");
const sum = require("./sum");

test("Adds 2 + 3 to be 5", () => {
  expect(sum(2, 4)).toBe(6);
});
