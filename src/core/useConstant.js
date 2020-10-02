module.exports = (rule, ast) => {
  if (!rule.selectors.includes("@sw-constants")) return;
  rule.findDeclarations((declaration, index) => {
    ast.findAllDeclarations((dec) => {
      if (dec.value.match(declaration.property)) {
        if (dec.value.match(/ /)) {
          dec.value = dec.value.replace(
            new RegExp(declaration.property, "g"),
            declaration.value
          );
        } else {
          dec.value = declaration.value;
        }
      }
    });
    rule.removeDeclaration(index);
  });
};
