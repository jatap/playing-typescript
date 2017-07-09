import * as chai from "chai";
import * as types from "../../src/types/tuple";

const expect = chai.expect;

describe("basic types: tuple", () => {
  it("manages a tuple data type", () => {
    expect(types.x).to.deep.equal(["hello", 10]);
  });
});
