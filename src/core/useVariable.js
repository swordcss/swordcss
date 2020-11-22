//@ts-check
const cb = (rule, ast) => {
  const declarations = [];
  rule.findDeclarations((declaration, index) => {
    declarations.push(declaration);
    ast.findAllDeclarations((dec) => {
      if (dec.value.match(declaration.property)) {
        dec.value = dec.value.match(/ /)
          ? dec.value.replace(
              new RegExp(declaration.property, "g"),
              `var(--${declaration.property})`
            )
          : `var(--${declaration.property})`;
      }
    });
    rule.removeDeclaration(index);
  });
  rule.selectors = [":root"];
  declarations.forEach((declaration) => {
    rule.addDeclaration(`--${declaration.property}`, declaration.value);
  });
};

module.exports = ({ customAtRule }) => customAtRule("sw-variables", cb);
