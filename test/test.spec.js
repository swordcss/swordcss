const { expect } = require("chai");

const SwordCSS = require("../src/index");

const sword = SwordCSS();

describe("#SwordCSS", () => {
  describe(".useClass", () => {
    it("should compile correctly", () => {
      expect(
        sword
          .compile(".elem{width:100%;height:100%;}#elem{sw-class:elem;}")
          .replace(/[\r\n ]+/gm, "")
      ).to.equal(
        ".elem{width:100%;height:100%;}#elem{height:100%;width:100%;}"
      );
    });
  });
  describe(".useId", () => {
    it("should compile correctly", () => {
      expect(
        sword
          .compile(".elem{sw-id:elem;}#elem{width:100%;height:100%;}")
          .replace(/[\r\n ]+/gm, "")
      ).to.equal(
        ".elem{height:100%;width:100%;}#elem{width:100%;height:100%;}"
      );
    });
  });
  describe(".useQuery", () => {
    it("should compile correctly", () => {
      expect(
        sword
          .compile(".elem{sw-query:#elem;}#elem{width:100%;height:100%;}")
          .replace(/[\r\n ]+/gm, "")
      ).to.equal(
        ".elem{height:100%;width:100%;}#elem{width:100%;height:100%;}"
      );
    });
  });
});
