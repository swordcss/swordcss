const { expect } = require("chai");

const SwordCSS = require("../src/index");

const sword = SwordCSS({ minify: true });

describe("#SwordCSS", () => {
  describe(".useClass", () => {
    it("should compile correctly", () => {
      expect(
        sword.compile(".elem{width:100%;height:100%;}#elem{sw-class:elem;}")
      ).to.equal(
        ".elem{width:100%;height:100%;}#elem{height:100%;width:100%;}"
      );
    });

    // disabled option test
    it("shouldn't use the class when option is disabled", () => {
      expect(
        SwordCSS({ useClass: false })
          .compile(".elem{width:100%;height:100%;}#elem{sw-class:elem;}")
          .replace(/[\r\n ]+/gm, "")
      ).to.equal(".elem{width:100%;height:100%;}#elem{sw-class:elem;}");
    });

    it("should allow multiple classes", () => {
      expect(
        sword.compile(".elem1{width:100%;height:100%;}.elem2{margin:auto;}#elem{sw-class:elem1 elem2;}")
      ).to.equal(
        ".elem1{width:100%;height:100%;}.elem2{margin:auto;}#elem{margin:auto;height:100%;width:100%;}"
      );
    });
  });

  describe(".useId", () => {
    it("should compile correctly", () => {
      expect(
        sword.compile(".elem{sw-id:elem;}#elem{width:100%;height:100%;}")
      ).to.equal(
        ".elem{height:100%;width:100%;}#elem{width:100%;height:100%;}"
      );
    });

    // disabled option test
    it("shouldn't use the id when option is disabled", () => {
      expect(
        SwordCSS({ useId: false })
          .compile(".elem{sw-id:elem;}#elem{width:100%;height:100%;}")
          .replace(/[\r\n ]+/gm, "")
      ).to.equal(".elem{sw-id:elem;}#elem{width:100%;height:100%;}");
    });

    it("should allow multiple id's", () => {
      expect(
        sword.compile("#elem1{width:100%;height:100%;}#elem2{margin:auto;}#elem{sw-id:elem1 elem2;}")
      ).to.equal(
        "#elem1{width:100%;height:100%;}#elem2{margin:auto;}#elem{margin:auto;height:100%;width:100%;}"
      );
    });
  });

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
        SwordCSS({ useQuery: false })
          .compile(".elem{sw-query:#elem;}#elem{width:100%;height:100%;}")
          .replace(/[\r\n ]+/gm, "")
      ).to.equal(".elem{sw-query:#elem;}#elem{width:100%;height:100%;}");
    });

    it("should allow multiple queries", () => {
      expect(
        sword.compile(".elem1{width:100%;height:100%;}#elem2{margin:auto;}#elem{sw-query:.elem1 #elem2;}")
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

    // disabled option test
    it("shouldn't use the constant when option is disabled", () => {
      expect(
        SwordCSS({ useConstant: false })
          .compile("@sw-constants{const1:red;}.elem{color:const1;}")
          .replace(/[\r\n ]+/gm, "")
      ).to.equal("@sw-constants{const1:red;}.elem{color:const1;}");
    });
  });
});
