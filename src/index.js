//@ts-check
const { readdirSync } = require("fs");
const { join } = require("path");

const css = require("css");
const addIterations = require("css-ast-iterations-pure");

const SwordCSS = require("./swordcss");
const helpers = require("./helpers/index");

const defaultOpts = require("./defaultOptions");

/**
 * Creates a SwordCSS object
 * @param {object} opts - the options
 * @return {SwordCSS} swordcss - the SwordCSS object
 */
//@ts-ignore
const Sword = (opts = defaultOpts) => SwordCSS({ path: { join }, fs: { readdirSync }, css, addIterations: addIterations, defaultOpts, helpers })(opts);

module.exports = Sword;
