import * as chai from "chai";
import * as types from "../../src/types/boolean";

const expect = chai.expect;

describe("basic types: boolean", () => {
  it("manages a boolean data type", () => {
    expect(types.isDone).to.equal(false);
  });
});
