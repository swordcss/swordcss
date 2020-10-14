<img src="https://img.shields.io/coveralls/github/swordcss/swordcss?style=for-the-badge"><img src="https://img.shields.io/travis/swordcss/swordcss?style=for-the-badge"><img src="https://img.shields.io/npm/v/swordcss?style=for-the-badge"><br />

# swordcss

Modular CSS superset

## Installation

`npm i swordcss`

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

You can check out the [documentation for this project here](https://swordcss.github.io/swordcss).

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
```

_Run both at the same time_

```
$ npm run format
```

#### Tests

Tests use `mocha` for test running and `chai` for assertions. We also use `nyc` with `Instanbul` to calculate code coverage.  

_Run tests with mocha_

```
$ npm test
```
