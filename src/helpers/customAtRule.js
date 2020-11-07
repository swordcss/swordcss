module.exports = (ruleName, cb) => (rule, ast) => {
    if (!rule.selectors.includes(`@${ruleName}`)) return;
    cb(rule, ast);
};