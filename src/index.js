const fs = require("fs");
const path = require("path");

const css = require("css");
const addIterations = require("css-ast-iterations");

const SwordCSS = require("./swordcss");

const defaultOpts = require("./defaultOptions.json");

/**
 * Creates a SwordCSS object
 * @param {object} opts - the options
 * @return {SwordCSS} swordcss - the SwordCSS object
 */

const Sword = (opts = defaultOpts) => SwordCSS(opts, { path, fs, css, addIterations, defaultOpts });

module.exports = Sword;
