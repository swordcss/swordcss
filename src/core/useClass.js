//@ts-check
const cb = (rule, ast) => (declaration, index) => {
  const selectors = declaration.value.split(" ");
  selectors.forEach((selector) => {
    ast.findAllDeclarationsBySelectors(`.${selector}`, (dec) => {
      rule.addDeclaration(dec.property, dec.getParam(0), index);
    });
  });
};

module.exports = ({ customProp }) => customProp("sw-class", cb);
