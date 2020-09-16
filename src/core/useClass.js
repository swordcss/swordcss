module.exports = (rule, ast) => {
  rule.findDeclarationsByProperty("sw-class", (declaration, index) => {
    if (
      declaration.getParam(0) === undefined ||
      declaration.getParam(0) === null
    )
      throw new SyntaxError(`Expected string, got none`);
    rule.removeDeclaration(index);
    ast.findAllDeclarationsBySelectors(`.${declaration.getParam(0)}`, (dec) => {
      if (typeof dec === "string") return;
      rule.addDeclaration(dec.property, dec.getParam(0), index);
    });
  });
};
