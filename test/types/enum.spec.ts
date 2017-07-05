import * as chai from "chai";
import * as types from "../../src/types/enum";

const expect = chai.expect;

describe("basic types: enum", () => {
  it("manages a enum data type", () => {
    expect(types.c).to.equal(1);
  });
  it("manages a enum data type by name", () => {
    expect(types.Color[1]).to.equal("Green");
  });
});
