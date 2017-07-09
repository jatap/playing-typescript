import * as chai from "chai";
import * as types from "../../src/types/number";

const expect = chai.expect;

describe("basic types: number", () => {
  it("manages a decimal data type", () => {
    expect(types.decimal).to.equal(6);
  });
  it("manages a hex data type", () => {
    expect(types.hex).to.equal(0xf00d);
  });
  it("manages a binary data type", () => {
    expect(types.binary).to.equal(0b1010);
  });
  it("manages a octal data type", () => {
    expect(types.octal).to.equal(0o744);
  });
});
