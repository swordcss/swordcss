/**
 * Adds some neccessary actions on top of the functionality of a custom property
 * @param {string} ruleName - the name of the rule
 * @param {Function} callback - the callback
 * @returns {Function} rule - the rule processor function
 */
module.exports = (ruleName, callback) => (rule, ast) => {
  rule.findDeclarationsByProperty(ruleName, (declaration, index) => {
    rule.removeDeclaration(index);
    callback(rule, ast)(declaration, index);
  });
};
