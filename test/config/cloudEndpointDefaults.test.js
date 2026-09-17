const assert = require("node:assert/strict");
const test = require("node:test");

test("local builds default to the public OpenWhispr Cloud API", async () => {
  const { OPENWHISPR_API_URL } = await import("../../src/config/constants.ts");

  assert.equal(OPENWHISPR_API_URL, "https://api.openwhispr.com");
});
