const fs = require("fs");
const path = require("path");

const addIterations = require("css-ast-iterations");
const css = require("css");

const defaultOpts = require("./defaultOptions.json");

const Sword = (opts = defaultOpts) => ({
  compile(stylesheet) {
    const ast = css.parse(stylesheet);
    addIterations(ast);
    const core = fs.readdirSync(path.join(__dirname, "./core"));

    ast.findAllRulesByType("rule", (rule) => {
      core.forEach((coreFile) => {
        // if the option is enabled, apply desired function to the rule
        const currOption = coreFile.replace('.js', '');
        if (opts[currOption]) {
          require(path.join(__dirname, "./core/", coreFile))(rule, ast);
        }
      });
    });

    return css.stringify(ast, { compress: (opts.minify) });
  },
});

module.exports = Sword;
