//@ts-check
const cb = (rule, ast) => {
  rule.findDeclarations((declaration, index) => {
    ast.findAllDeclarations((dec) => {
      if (dec.value.match(declaration.property)) {
        dec.value = dec.value.match(/ /)
          ? dec.value.replace(
              new RegExp(declaration.property, "g"),
              declaration.value
            )
          : declaration.value;
      }
    });
    rule.removeDeclaration(index);
  });
};

module.exports = ({ customAtRule }) => customAtRule("sw-constants", cb);
