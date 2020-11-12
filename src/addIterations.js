module.exports = ({ addIterations }) => (ast) => {
    addIterations(ast);
    return ast;
};