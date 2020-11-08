const path = require("path");
const fs = require("fs");

const css = require("css");
const addIterations = require("css-ast-iterations");

const defaultOpts = require("./defaultOptions.json");

/* Class which handles compiling */
class SwordCSS {
  constructor(opts) {
    this.opts = opts;
  }

  /**
   * Compiles the stylesheet
   * @param {string} stylesheet - the CSS stylesheet to compile
   * @return {string} compiled - the compiled CSS stylesheet
   */

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
        this.opts.minify != undefined
          ? this.opts.minify
          : this.defaultOpts.minify,
    });
  }
}

module.exports = SwordCSS;
