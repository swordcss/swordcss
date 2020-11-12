const { expect } = require("chai");

const SwordCSS = require("../src/index");

describe("#SwordCSS", () => {
  it("should have minify working", () => {
    expect(
      SwordCSS({ minify: true }).compile("\n.elem{\n\twidth: 20px;\n}\n")
    ).to.equal(".elem{width:20px;}");
  });
});
