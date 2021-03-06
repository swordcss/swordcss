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
 * @property {import("./utils/opts").OptionCheckerCreator} optsCreator
 * @property {Function} self
 */
/**
 * @typedef {Object} SwordCSS
 * @property {(stylesheet: string) => string} compile
 * @property {(opts: Record<string, boolean>) => SwordCSS} setOpts
 */
/**
 * Creates a SwordCSS generator
 * @param {Dependencies} deps - dependencies
 * @returns {(opts: Record<string, boolean>) => SwordCSS} creator - the SwordCSS creator
 */

const SwordCSS = ({
  optsCreator,
  core,
  css,
  addIterations,
  defaultOpts,
  helpers,
  self,
}) => (opts) => {
  const optsChecker = optsCreator(opts, defaultOpts);
  return {
    setOpts(newOpts) {
      return self({ ...opts, ...newOpts });
    },
    compile(stylesheet) {
      const ast = addIterations(css.parse(stylesheet));

      /**
       * @type {Record<string, InjectedCoreModule>}
       */
      const optionToCoreModule = {};
      Object.keys(core).map((coreModule) => {
        if (optsChecker(coreModule)) {
          optionToCoreModule[coreModule] = core[coreModule](helpers);
        }
      });

      ast.findAllRulesByType("rule", (rule) => {
        Object.values(optionToCoreModule).map((coreModule) => {
          coreModule(rule, ast);
        });
      });

      return css.stringify(ast, {
        compress: optsChecker("minify"),
      });
    },
  };
};

module.exports = SwordCSS;
