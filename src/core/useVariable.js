module.exports = (rule, ast) => {
  if (!rule.selectors.includes("@sw-variables")) return;
  const declarations = [];
  rule.findDeclarations((declaration, index) => {
    declarations.push(declaration);
    ast.findAllDeclarations((dec) => {
      if (dec.value.match(declaration.property)) {
        if (dec.value.match(/ /)) {
          dec.value = dec.value.replace(
            new RegExp(declaration.property, "g"),
            `var(--${declaration.property})`
          );
        } else {
          dec.value = `var(--${declaration.property})`;
        }
      }
    });
    rule.removeDeclaration(index);
  });
  rule.selectors = [":root"];
  declarations.forEach((declaration) => {
    rule.addDeclaration(`--${declaration.property}`, declaration.value);
  });
};
