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
  it("should not set the options it should only create a new instance", () => {
    const sword = SwordCSS({ minify: true });
    const sword2 = sword.setOpts({ minify: false });
    expect(sword.compile("\n.elem{\n\twidth: 20px;\n}\n")).to.equal(".elem{width:20px;}");
    expect(sword2.compile("\n.elem{\n\twidth: 20px;\n}\n")).to.not.equal(".elem{width:20px;}");
  });
});
