/**
 * Adds some neccessary actions on top of the functionality of an @ rule
 * @param {string} ruleName - the rule name
 * @param {Function} cb - the callback
 * @returns {Function} rule - the rule processor function
 */

module.exports = (ruleName, cb) => (rule, ast) => {
  if (!rule.selectors.includes(`@${ruleName}`)) return;
  cb(rule, ast);
};
