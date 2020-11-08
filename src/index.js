const SwordCSS = require("./swordcss");

const defaultOpts = require("./defaultOptions.json");

/**
 * Creates a SwordCSS object
 * @param {object} opts - the options
 * @return {SwordCSS} swordcss - the SwordCSS object
 */

const Sword = (opts = defaultOpts) => new SwordCSS(opts);

module.exports = Sword;
