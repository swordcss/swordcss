const { expect } = require("chai");

const SwordCSS = require("../src/index");

describe("#SwordCSS", () => {
  it("should have minify working", () => {
    expect(
      SwordCSS({ minify: true }).compile("\n.elem{\n\twidth: 20px;\n}\n")
    ).to.equal(".elem{width:20px;}");
  });
  it("should allow you to set options", () => {
    const sword = SwordCSS({ minify: true });
    expect(
      sword.setOpts({ minify: false }).compile("\n.elem{\n\twidth: 20px;\n}\n")
    ).to.not.equal(".elem{width:20px;}");
  });
});
