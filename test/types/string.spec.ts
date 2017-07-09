import * as chai from "chai";
import * as types from "../../src/types/string";

const expect = chai.expect;

describe("basic types: string", () => {
  it("manages a string data type", () => {
    expect(types.color).to.equal("red");
  });
  it("manages a template string data type", () => {
    expect(types.sentence).to.equal(`Hello, my name is Bob Bobbington.
I'll be 38 years old next month.`);
  });
});
