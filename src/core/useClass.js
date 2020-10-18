module.exports = (rule, ast) => {
  rule.findDeclarationsByProperty("sw-class", (declaration, index) => {
    rule.removeDeclaration(index);
    const selectors = declaration.value.split(" ");
    selectors.forEach((selector) => {
      ast.findAllDeclarationsBySelectors(`.${selector}`, (dec) => {
        rule.addDeclaration(dec.property, dec.getParam(0), index);
      });
    });
  });
};
