//@ts-check
/**
 * Adds some necessary actions on top of the functionality of an @ rule
 * @param {string} ruleName - the rule name
 * @param {(rule: any, ast: any) => void} cb - the callback
 * @returns {(rule: any, ast: any) => void} rule - the rule processor function
 */

module.exports = (ruleName, cb) => (rule, ast) => {
  if (!rule.selectors.includes(`@${ruleName}`)) return;
  cb(rule, ast);
};
