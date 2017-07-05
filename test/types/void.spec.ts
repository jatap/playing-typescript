import * as chai from "chai";
import * as types from "../../src/types/void";

const expect = chai.expect;

describe("basic types: void", () => {
  it("manages a void data type", () => {
    // tslint:disable-next-line:no-unused-expression
    expect(types.warnUser()).to.be.undefined;
  });
});
