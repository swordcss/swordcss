# SwordCSS

> A powerful CSS compiler

<!--<img src="https://img.shields.io/coveralls/github/swordcss/swordcss">
<img src="https://img.shields.io/travis/swordcss/swordcss">
<img src="https://img.shields.io/npm/v/swordcss">
<img src="https://img.shields.io/codeclimate/maintainability-percentage/swordcss/swordcss">-->

[![Build Status](https://img.shields.io/travis/swordcss/swordcss)](https://travis-ci.org/swordcss/swordcss)
[![Coverage Status](https://img.shields.io/coveralls/github/swordcss/swordcss)](https://coveralls.io/github/swordcss/swordcss?branch=master)
[![Maintainability Percentage](https://img.shields.io/codeclimate/maintainability-percentage/swordcss/swordcss)](https://codeclimate.com/github/swordcss/swordcss)
[![Total alerts](https://img.shields.io/lgtm/alerts/g/swordcss/swordcss.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/swordcss/swordcss/alerts/)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/swordcss/swordcss.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/swordcss/swordcss/context:javascript)
[![npm version](https://img.shields.io/npm/v/swordcss)](https://npmjs.org/package/swordcss)

## What Does This Add?

- An easier systems for combining the styles of classes, ids, and other queries
- The equivalent of SCSS variables, constants that can be used throughout your CSS
- An easier way to write CSS variables

And **all** of that is added through valid CSS syntax!

## Installation

```
$ npm install swordcss
# Or use Yarn
$ yarn add swordcss
```

### Usage

```javascript
const SwordCSS = require("swordcss");

const sword = SwordCSS();

sword.compile(
  ".allElem {width: 100%; height: 100%;} #elem {sw-class: allElem;}"
); // .allElem {width: 100%; height: 100%;} #elem {width: 100%; height: 100%;}
```

### Options

```json
{
  "useClass": true,
  "useConstant": true,
  "useId": true,
  "useQuery": true,
  "useVariable": true,
  "minify": false
}
```

These options are used when you initialize the `SwordCSS` instance.

### Documentation

You can check out the [documentation for this project here](https://swordcss.js.org).

### Contributing

#### Code Style

The code style is enforced through `ESLint` with [the SwordCSS ESLint Config](https://github.com/swordcss/eslint-config-swordcss) and `prettier` with no config.

_Validate code with ESLint_

```
$ npm run lint
```

_Format code with prettier_

```
$ npm run prettier
# or you can use format
$ npm run format
```

#### Tests

Tests use `mocha` for test running and `chai` for assertions. We also use `nyc` with `Instanbul` to calculate code coverage.

_Run tests with mocha_

```
$ npm test
```

#### Typescript

We use Typescript and JSDoc for static typing of our project without build tooling.

_Check types_

```
$ npm run types
```

#### Rollup Bundling

We use Rollup to bundle our code into ESM and CJS before being uploaded to NPM.

_Bundle code_

```
$ npm run build
```

### Supporters

[![Stargazers repo roster for @swordcss/swordcss](https://reporoster.com/stars/swordcss/swordcss)](https://github.com/swordcss/swordcss/stargazers)

[![Forkers repo roster for @swordcss/swordcss](https://reporoster.com/forks/swordcss/swordcss)](https://github.com/swordcss/swordcss/network/members)
