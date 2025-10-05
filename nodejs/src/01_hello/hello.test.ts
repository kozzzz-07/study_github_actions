import { describe, it } from "node:test";
import assert from "node:assert";
import { hello } from "./hello.ts";

describe("Hello()", () => {
  it("入力した名前に挨拶をする", async () => {
    const result = hello("田中");
    assert.strictEqual(result, "hello, 田中");
  });
});
