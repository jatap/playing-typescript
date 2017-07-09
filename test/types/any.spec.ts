import * as chai from "chai";
import * as types from "../../src/types/any";

const expect = chai.expect;

describe("basic types: any", () => {
  it("manages an any data type", () => {
    expect(types.notSure).to.equal(false);
  });
});
