<img src="https://img.shields.io/coveralls/github/swordcss/swordcss?style=for-the-badge"><img src="https://img.shields.io/travis/swordcss/swordcss?style=for-the-badge"><br />

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

### Custom Classes

`sw-class` - Allows you to use the exact same styling that the class specified uses.
`sw-id` - Allows you to use the exact same styling that class specified uses.

### Documentation

[Documentation](https://swordcss.github.io/swordcss)
