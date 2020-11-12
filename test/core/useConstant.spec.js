const { expect } = require("chai");

const SwordCSS = require("../../src/index");

const sword = SwordCSS({ minify: true });

describe(".useConstant", () => {
  it("should compile correctly", () => {
    expect(
      sword.compile("@sw-constants{const1:red;}.elem{color:const1;}")
    ).to.equal(".elem{color:red;}");
  });

  it("should calculate numerical constants correctly", () => {
    expect(
      sword.compile(
        "@sw-constants{const1:30px;}#elem{width:calc(const1 * 20);}"
      )
    ).to.equal("#elem{width:calc(30px * 20);}");
  });

  it("should calculate numerical constants correctly when they appear multiple times", () => {
    expect(
      sword.compile(
        "@sw-constants{const1:30px;}#elem{width:calc(const1 * 20 + const1);}"
      )
    ).to.equal("#elem{width:calc(30px * 20 + 30px);}");
  });

  it("should replace constants correctly when they're part of a larger expression", () => {
    expect(
      sword.compile("@sw-constants{const1:red;}#elem{border:1px solid const1;}")
    ).to.equal("#elem{border:1px solid red;}");
  });

  // disabled option test
  it("shouldn't use the constant when option is disabled", () => {
    expect(
      SwordCSS({ useConstant: false, minify: true }).compile(
        "@sw-constants{const1:red;}.elem{color:const1;}"
      )
    ).to.equal("@sw-constants{const1:red;}.elem{color:const1;}");
  });
});
