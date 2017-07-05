import * as chai from "chai";
import * as types from "../../src/types/null-and-undefined";

const expect = chai.expect;

describe("basic types: null and undefined", () => {
  it("manages an undefined data type", () => {
    // tslint:disable-next-line:no-unused-expression
    expect(types.u).to.be.undefined;
  });
  it("manages a null data type", () => {
    // tslint:disable-next-line:no-unused-expression
    expect(types.n).to.be.null;
  });
});
