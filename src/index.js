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

    const optionToCoreModule = {};
    core.forEach((coreFile) => {
      // if the option is enabled, apply desired function to the rule
      const currOption = coreFile.replace(".js", "");
      if (
        opts[currOption] != undefined
          ? opts[currOption]
          : defaultOpts[currOption]
      ) {
        optionToCoreModule[currOption] = require(path.join(
          __dirname,
          "./core/",
          coreFile
        ));
      }
    });

    ast.findAllRulesByType("rule", (rule) => {
      for (let coreModule of Object.values(optionToCoreModule)) {
        coreModule(rule, ast);
      }
    });

    return css.stringify(ast, {
      compress: opts.minify ? opts.minify : defaultOpts.minify,
    });
  },
});

module.exports = Sword;
