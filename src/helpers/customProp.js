module.exports = (ruleName, callback) => (rule, ast) => {
    rule.findDeclarationsByProperty(ruleName, (declaration, index) => {
        rule.removeDeclaration(index);
        callback(rule, ast)(declaration, index);
    });
};