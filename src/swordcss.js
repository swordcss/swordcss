const path = require("path");
const fs = require("fs");

const css = require("css");
const addIterations = require("css-ast-iterations");

const defaultOpts = require("./defaultOptions.json");

/* Class which handles compiling */
/*class SwordCSS {
  constructor(opts) {
    this.opts = opts;
  }

  compile(stylesheet) {
    const ast = css.parse(stylesheet);
    addIterations(ast);
    const core = fs.readdirSync(path.join(__dirname, "./core"));

    const optionToCoreModule = {};
    core.forEach((coreFile) => {
      // if the option is enabled, apply desired function to the rule
      const currOption = coreFile.replace(".js", "");
      if (
        this.opts[currOption] != undefined
          ? this.opts[currOption]
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
      for (const coreModule of Object.values(optionToCoreModule)) {
        coreModule(rule, ast);
      }
    });

    return css.stringify(ast, {
      compress:
        this.opts.minify != undefined ? this.opts.minify : defaultOpts.minify,
    });
  }
}*/

const SwordCSS = (opts) => ({
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
      for (const coreModule of Object.values(optionToCoreModule)) {
        coreModule(rule, ast);
      }
    });

    return css.stringify(ast, {
      compress:
        opts.minify != undefined ? opts.minify : defaultOpts.minify,
    });
  }
});

module.exports = SwordCSS;
