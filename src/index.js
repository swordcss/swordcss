const fs = require("fs");
const path = require("path");

const css = require("css");
const oldIterations = require("css-ast-iterations");

const addIterations = require("./addIterations");
const SwordCSS = require("./swordcss");
const helpers = require("./helpers/index");

const defaultOpts = require("./defaultOptions.json");

/**
 * Creates a SwordCSS object
 * @param {object} opts - the options
 * @return {SwordCSS} swordcss - the SwordCSS object
 */

const Sword = (opts = defaultOpts) => SwordCSS({ path, fs, css, addIterations: addIterations({ addIterations: oldIterations }), defaultOpts, helpers })(opts);

module.exports = Sword;
