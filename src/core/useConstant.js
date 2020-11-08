const customAtRule = require("../helpers/customAtRule");

const cb = (rule, ast) => {
  rule.findDeclarations((declaration, index) => {
    ast.findAllDeclarations((dec) => {
      if (dec.value.match(declaration.property)) {
        dec.value.match(/ /)
          ? (dec.value = dec.value.replace(
              new RegExp(declaration.property, "g"),
              declaration.value
            ))
          : (dec.value = declaration.value);
      }
    });
    rule.removeDeclaration(index);
  });
};

module.exports = customAtRule("sw-constants", cb);
