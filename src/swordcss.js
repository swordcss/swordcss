/**
 * Creates a SwordCSS object
 * @param {Object} opts - the options
 * @returns {Object} instance - the SwordCSS object
 */

const SwordCSS = ({ path, fs, css, addIterations, defaultOpts, helpers }) => (opts) => ({
  /**
   * Compiles a stylesheet
   * @param {string} stylesheet - the stylesheet to compile
   * @returns {string} compiled - the compiled stylesheet
   */
  compile(stylesheet) {
    const ast = addIterations(css.parse(stylesheet));
    const core = fs.readdirSync(path.join(__dirname, "./core"));

    const optionToCoreModule = {};
    core.map((coreFile) => {
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
        ))(helpers);
      }
    });

    ast.findAllRulesByType("rule", (rule) => {
      /*for (const coreModule of Object.values(optionToCoreModule)) {
        coreModule(rule, ast);
      }*/
      Object.values(optionToCoreModule).map((coreModule) => {
        coreModule(rule, ast);
      });
    });

    return css.stringify(ast, {
      compress: opts.minify != undefined ? opts.minify : defaultOpts.minify,
    });
  },
});

module.exports = SwordCSS;
