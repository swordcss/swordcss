//@ts-check
const css = require("css");
const addIterations = require("css-ast-iterations-pure");

const SwordCSS = require("./swordcss");
const helpers = require("./helpers/index");

const optsCreator = require("./utils/opts");

const useClass = require("./core/useClass");
const useConstant = require("./core/useConstant");
const useId = require("./core/useId");
const useQuery = require("./core/useQuery");
const useVariable = require("./core/useVariable");

const defaultOpts = require("./defaultOptions");

/**
 * Creates a SwordCSS object
 * @param {object} opts - the options
 * @return {SwordCSS} swordcss - the SwordCSS object
 */
//@ts-ignore
const Sword = (opts = defaultOpts) =>
  //@ts-ignore
  SwordCSS({
    core: { useClass, useConstant, useId, useQuery, useVariable },
    css,
    addIterations: addIterations,
    defaultOpts,
    helpers,
    optsCreator,
  })(opts);

module.exports = Sword;
