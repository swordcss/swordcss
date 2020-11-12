const { expect } = require("chai");

const SwordCSS = require("../src/index");

const sword = SwordCSS({ minify: true });

describe("#SwordCSS", () => {
  describe(".useQuery", () => {
    it("should compile correctly", () => {
      expect(
        sword.compile(".elem{sw-query:#elem;}#elem{width:100%;height:100%;}")
      ).to.equal(
        ".elem{height:100%;width:100%;}#elem{width:100%;height:100%;}"
      );
    });

    // disabled option test
    it("shouldn't use the query when option is disabled", () => {
      expect(
        SwordCSS({ useQuery: false, minify: true }).compile(
          ".elem{sw-query:#elem;}#elem{width:100%;height:100%;}"
        )
      ).to.equal(".elem{sw-query:#elem;}#elem{width:100%;height:100%;}");
    });

    it("should allow multiple queries", () => {
      expect(
        sword.compile(
          ".elem1{width:100%;height:100%;}#elem2{margin:auto;}#elem{sw-query:.elem1 #elem2;}"
        )
      ).to.equal(
        ".elem1{width:100%;height:100%;}#elem2{margin:auto;}#elem{margin:auto;height:100%;width:100%;}"
      );
    });
  });

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
        sword.compile(
          "@sw-constants{const1:red;}#elem{border:1px solid const1;}"
        )
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

  describe(".useVariable", () => {
    it("should compile correctly", () => {
      expect(
        sword.compile("@sw-variables{const1:red;}.elem{color:const1;}")
      ).to.equal(":root{--const1:red;}.elem{color:var(--const1);}");
    });

    it("should calculate numerical variables correctly when they appear multiple times", () => {
      expect(
        sword.compile(
          "@sw-variables{const1:30px;}.elem{width:calc(const1 * 20 + const1);}"
        )
      ).to.equal(
        ":root{--const1:30px;}.elem{width:calc(var(--const1) * 20 + var(--const1));}"
      );
    });

    it("should replace variables correctly when they're part of a larger expression", () => {
      expect(
        sword.compile(
          "@sw-variables{const1:red;}.elem{border:1px solid const1;}"
        )
      ).to.equal(":root{--const1:red;}.elem{border:1px solid var(--const1);}");
    });

    it("shouldn't use the variable when option is disabled", () => {
      expect(
        SwordCSS({ useVariable: false, minify: true }).compile(
          "@sw-variables{const1:red;}.elem{color:const1;}"
        )
      ).to.equal("@sw-variables{const1:red;}.elem{color:const1;}");
    });
  });
  it("should have minify working", () => {
    expect(
      SwordCSS({ minify: true }).compile("\n.elem{\n\twidth: 20px;\n}\n")
    ).to.equal(".elem{width:20px;}");
  });
});
