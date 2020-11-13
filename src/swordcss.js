//@ts-check
/**
/**
 * @typedef {Object} Helpers
 * @property {Function} customAtRule
 * @property {Function} customProp
/** 
 * @typedef {(helpers: Helpers) => InjectedCoreModule} CoreModule
 * @typedef {(rule: any, ast: any) => void} InjectedCoreModule
*/
/**
 * @typedef {Object} Dependencies
 * @property {Record<string, CoreModule>} core
 * @property {{ parse: (stylesheet: string) => any, stringify: (ast: any, options?: any) => string }} css
 * @property {Function} addIterations
 * @property {Record<string, boolean>} defaultOpts
 * @property {Helpers} helpers
 */
/**
 * @typedef {Object} SwordCSS
 * @property {(stylesheet: string) => string} compile
 */
/**
 * Creates a SwordCSS generator
 * @param {Dependencies} deps - dependencies
 * @returns {(opts: Record<string, boolean>) => SwordCSS} creator - the SwordCSS creator
 */

const SwordCSS = ({ core, css, addIterations, defaultOpts, helpers }) => (
  opts
) => ({
  compile(stylesheet) {
    const ast = addIterations(css.parse(stylesheet));

    /**
     * @type {Record<string, InjectedCoreModule>}
     */
    const optionToCoreModule = {};
    Object.keys(core).map((coreModule) => {
      if (
        opts[coreModule] == undefined
          ? defaultOpts[coreModule]
          : opts[coreModule]
      ) {
        optionToCoreModule[coreModule] = core[coreModule](helpers);
      }
    });

    ast.findAllRulesByType("rule", (rule) => {
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
