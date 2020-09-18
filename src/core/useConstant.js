module.exports = (rule, ast) => {
  if (!rule.selectors.includes("@sw-constants")) return;
  rule.findDeclarations((declaration, index) => {
    ast.findAllDeclarationsByValue(declaration.property, (dec, i) => {
      dec.value = declaration.value;
    });
    rule.removeDeclaration(index);
  });
};
