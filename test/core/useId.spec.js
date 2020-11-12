const { expect } = require("chai");

const SwordCSS = require("../../src/index");

const sword = SwordCSS({ minify: true });

describe(".useId", () => {
  it("should compile correctly", () => {
    expect(
      sword.compile(".elem{sw-id:elem;}#elem{width:100%;height:100%;}")
    ).to.equal(".elem{height:100%;width:100%;}#elem{width:100%;height:100%;}");
  });

  // disabled option test
  it("shouldn't use the id when option is disabled", () => {
    expect(
      SwordCSS({ useId: false, minify: true }).compile(
        ".elem{sw-id:elem;}#elem{width:100%;height:100%;}"
      )
    ).to.equal(".elem{sw-id:elem;}#elem{width:100%;height:100%;}");
  });

  it("should allow multiple id's", () => {
    expect(
      sword.compile(
        "#elem1{width:100%;height:100%;}#elem2{margin:auto;}#elem{sw-id:elem1 elem2;}"
      )
    ).to.equal(
      "#elem1{width:100%;height:100%;}#elem2{margin:auto;}#elem{margin:auto;height:100%;width:100%;}"
    );
  });
});
