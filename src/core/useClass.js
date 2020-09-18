module.exports = (rule, ast) => {
  rule.findDeclarationsByProperty("sw-class", (declaration, index) => {
    rule.removeDeclaration(index);
    ast.findAllDeclarationsBySelectors(`.${declaration.getParam(0)}`, (dec) => {
      if (typeof dec === "string") return;
      rule.addDeclaration(dec.property, dec.getParam(0), index);
    });
  });
};
