//@ts-check
/**
 * @typedef {(rule: any, ast: any) => void} CoreModule
 */
/**
 * @typedef {Object} Helpers
 * @property {Function} customAtRule
 * @property {Function} customProp
 */
/**
 * @typedef {Object} Dependencies
 * @property {{ join: (...paths: string[]) => string }} path
 * @property {{ readdirSync: (path: string) => string[] }} fs
 * @property {Object} css
 * @property {Function} addIterations
 * @property {Object} defaultOpts
 * @property {Helpers} helpers
 */
/**
 * @typedef {Object} SwordCSS
 * @property {(stylesheet: string) => string} compile
 */
/**
 * Creates a SwordCSS generator
 * @param {Dependencies} deps - dependencies
 * @returns {(opts: any) => SwordCSS} creator - the SwordCSS creator
 */

const SwordCSS = ({ path: { join }, fs: { readdirSync }, css, addIterations, defaultOpts, helpers }) => (opts) => ({
  compile(stylesheet) {
    const ast = addIterations(css.parse(stylesheet));
    const core = readdirSync(join(__dirname, "./core"));

    /** 
     * @type {Record<string, CoreModule>}
    */
    const optionToCoreModule = {};
    core.map((coreFile) => {
      // if the option is enabled, apply desired function to the rule
      const currOption = coreFile.replace(".js", "");
      if (
        opts[currOption] != undefined
          ? opts[currOption]
          : defaultOpts[currOption]
      ) {
        optionToCoreModule[currOption] = require(join(
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
