# fi-is [![Build Status](https://travis-ci.org/FinalDevStudio/fi-is.svg?branch=master)](https://travis-ci.org/FinalDevStudio/fi-is)

A small general purpose check library with arithmetic, array, environments, object, presence, regexp, string, time and type check functions. Available for Node.js and the browser.

- No dependencies
- AMD, Node & browser ready

Originally meant as a drop-in replacement for and forked from [is.js](https://github.com/arasatasaygin/is.js).


### Usage
#### Node.js

Install with NPM:
```
npm install --save fi-is
```

Use in you application:
```js
const is = require('fi-is');

is.nodejs(); // true
is.number(0); // true
```

#### Browser
Install with Bower:
```
bower install --save fi-is
```

Include the non-minified script for testing and development:
```html
<script src="bower_components/fi-is/dist/fi-is.js"></script>
```

Or include the minified script for production:
```html
<script src="bower_components/fi-is/dist/fi-is.min.js"></script>
```

Or, better yet, bundle it with the rest of the scripts.

### Documentation
- [API](DOCUMENTATION.md)
- [Arithmetic checks](DOCUMENTATION.md#lib/arithmetic.md)
- [Array checks](DOCUMENTATION.md#lib/array.md)
- [Environment checks](DOCUMENTATION.md#lib/environment.md)
- [Object checks](DOCUMENTATION.md#lib/object.md)
- [Presence checks](DOCUMENTATION.md#lib/presence.md)
- [RegExp checks](DOCUMENTATION.md#lib/regexp.md)
- [String checks](DOCUMENTATION.md#lib/string.md)
- [Time checks](DOCUMENTATION.md#lib/time.md)
- [Type checks](DOCUMENTATION.md#lib/type.md)

### Contributing
Please keep you code tidy and readable and document appropriately using the following schema:

```js
/**
 * Checks for awesomeness.
 *
 * @param {String} str It receives a string or whatever.
 *
 * @returns {Boolean} It must return a boolean.
 *
 * @example
 * is.awesome('fi-is'); // true
 * is.awesome(1); // false
 */
is.awesome = function (str) {
 return is.string(str) && str === 'fi-is';
};
```

If the method has more than one argument or it's unnecessary to include all of them, define the method's interfaces below it:

```js
// ...

is.awesome.api['not'];
```

To build browser versions (dist):
```
gulp dist
```

To run tests:
```
npm test
```

To update the documentation files:
```
gulp docs
```

One-liner:
`gulp && npm test`

