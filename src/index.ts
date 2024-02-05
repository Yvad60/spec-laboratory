import { add } from "./math";
import { expect, test } from "./jest";

test("add 2 to 3 to be 6", () => {
  expect(add(2, 3)).toBe(5);
});
