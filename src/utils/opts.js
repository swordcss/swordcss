//@ts-check
/**
 * @typedef {(opt: string) => any} OptionChecker
 */
/**
 * Creates an option checker
 * @param {any} opts
 * @param {any} defaultOpts
 * @returns {OptionChecker} optionChecker
 */
module.exports = (opts, defaultOpts) => (opt) => {
    return (opts[opt] == undefined ? defaultOpts[opt] : opts[opt]);
};