import index = require("../src/index");
import * as chai from "chai";

const expect = chai.expect;

describe("index", () => {
  it("provides an application's description", () => {
    expect(index.message).to.equal("Sample application to play with TypeScript");
  });
});
