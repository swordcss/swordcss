const fs = require("fs");
const path = require("path");

const addIterations = require("css-ast-iterations");
const css = require("css");

const Sword = () => ({
  compile(stylesheet) {
    const ast = css.parse(stylesheet);
    addIterations(ast);

    const core = fs.readdirSync(path.join(__dirname, "./core"));

    ast.findAllRulesByType("rule", (rule) => {
      core.forEach((coreFile) => {
        require(path.join(__dirname, "./core/", coreFile))(rule, ast);
      });
    });

    return css.stringify(ast);
  },
});

module.exports = Sword;
