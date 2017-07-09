import * as chai from "chai";
import * as types from "../../src/types/array";

const expect = chai.expect;

describe("basic types: array", () => {
  const list: number[] = [1, 2, 3];

  it("manages a array data type", () => {
    expect(types.list).to.deep.equal(list);
  });
});
