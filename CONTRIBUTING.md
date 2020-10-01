# Contributing
This the guide to contributing to `swordcss`.

## Understanding the Codebase
The main enterance file is `src/index.js`. This dynamically loads the files under `src/core` and runs them as functions on every rule.

## Guidelines
 - Make sure every new file under `src/core` adds a change to the `src/defaultOptions.json` and to the Typescript declarations.