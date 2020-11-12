const fs = require("fs");
const path = require("path");

const css = require("css");
const addIterations = require("css-ast-iterations");

const SwordCSS = require("./swordcss");
const helpers = require("./helpers/index");

const defaultOpts = require("./defaultOptions.json");

/**
 * Creates a SwordCSS object
 * @param {object} opts - the options
 * @return {SwordCSS} swordcss - the SwordCSS object
 */

const Sword = (opts = defaultOpts) => SwordCSS(opts, { path, fs, css, addIterations, defaultOpts, helpers });

module.exports = Sword;
