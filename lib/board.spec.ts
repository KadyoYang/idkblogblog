import assert from "node:assert";
import test from "node:test";
import { getBoard } from "./board";

test("synchronous passing test", (t) => {
  // This test passes because it does not throw an exception.
  assert.strictEqual(1, 1);
});

test("board", (t) => {
  console.dir(getBoard("board"), { depth: null });
});

// test("test", (t) => {
//   assert.strictEqual(1, 2);
// });
