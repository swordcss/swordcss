const { expect } = require("chai");

const SwordCSS = require("../../src/index");

const sword = SwordCSS({ minify: true });

describe(".useClass", () => {
  it("should compile correctly", () => {
    expect(
      sword.compile(".elem{width:100%;height:100%;}#elem{sw-class:elem;}")
    ).to.equal(".elem{width:100%;height:100%;}#elem{height:100%;width:100%;}");
  });

  // disabled option test
  it("shouldn't use the class when option is disabled", () => {
    expect(
      SwordCSS({ useClass: false, minify: true }).compile(
        ".elem{width:100%;height:100%;}#elem{sw-class:elem;}"
      )
    ).to.equal(".elem{width:100%;height:100%;}#elem{sw-class:elem;}");
  });

  it("should allow multiple classes", () => {
    expect(
      sword.compile(
        ".elem1{width:100%;height:100%;}.elem2{margin:auto;}#elem{sw-class:elem1 elem2;}"
      )
    ).to.equal(
      ".elem1{width:100%;height:100%;}.elem2{margin:auto;}#elem{margin:auto;height:100%;width:100%;}"
    );
  });
});
