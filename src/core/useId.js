module.exports = (rule, ast) => {
  rule.findDeclarationsByProperty("sw-id", (declaration, index) => {
    rule.removeDeclaration(index);
    const selectors = declaration.value.split(" ");
    selectors.forEach((selector) => {
      ast.findAllDeclarationsBySelectors(`#${selector}`, (dec) => {
        if (typeof dec === "string") return;
        rule.addDeclaration(dec.property, dec.getParam(0), index);
      });
    });
  });
};
