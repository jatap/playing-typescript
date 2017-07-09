import * as chai from "chai";
import * as types from "../../src/types/never";

const expect = chai.expect;

describe("basic types: never", () => {
  it("manages a never return data type", () => {
    expect(types.error).to.throw(Error);
  });
  it("manages an infered never return data type", () => {
    expect(types.fail).to.throw(Error);
  });
});
