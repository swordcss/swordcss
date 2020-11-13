//@ts-check
/**
 * @typedef {(opt: string) => any} OptionChecker
 * @typedef {(opts: any, defaultOpts: any) => OptionChecker} OptionCheckerCreator
 */
/**
 * @typedef {Object} Dependencies
 */
/**
 * Creates an option checker creator
 * @returns {OptionCheckerCreator} optionCheckerCreator
 */
module.exports = () => (opts, defaultOpts) => (opt) => {
    return (opts[opt] == undefined ? defaultOpts[opt] : opts[opt]);
};