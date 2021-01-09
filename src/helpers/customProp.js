//@ts-check
/**
 * Adds some necessary actions on top of the functionality of a custom property
 * @param {string} ruleName - the name of the rule
 * @param {(rule: any, ast: any) => (declaration: any, index: number) => void} callback - the callback
 * @returns {(rule: any, ast: any) => void} rule - the rule processor function
 */
module.exports = (ruleName, callback) => (rule, ast) => {
  rule.findDeclarationsByProperty(ruleName, (declaration, index) => {
    rule.removeDeclaration(index);
    callback(rule, ast)(declaration, index);
  });
};
