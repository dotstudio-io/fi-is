/**
 * Regexp checks.
 *
 * @module is/regexp
 * @see module:is
 */

/**
 * Checks for a valid domain name.
 *
 * @param {Mixed} val The value to check.
 * @returns {Boolean} Whether the value is a valid domain name.
 * @see https://github.com/johnotander/domain-regex
 * @example
 * is.domain('example.com'); // true
 * is.domain('subdomain.example.com'); // true
 * is.domain('sub.domain.example.website'); // true
 * is.domain('not_a_domain'); // false
 * is.domain(1234); // false
 * is.domain(true); // false
 */
module.exports.domain = val =>
  /^(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]$/
    .test(val);

/**
 * Checks for a valid URL.
 *
 * @param {Mixed} val The value to check.
 * @returns {Boolean} Whether the value is an URL.
 * @example
 * is.url('http://example.com'); // true
 * is.url('http://not url dot com'); // false
 * is.url(true); // false
 */
module.exports.url = val =>
  /^((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)(:\d+)?((?:\/[+~%/.\w\-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[.!/\\\w]*))?)$/
    .test(val);

/**
 * Checks for a valid email address.
 *
 * @param {Mixed} val The value to check.
 * @returns {Boolean} Whether the value is an email address.
 * @example
 * is.email('address@example.com'); // true
 * is.email('address@not email'); // false
 * is.email(true); // false
 */
module.exports.email = val =>
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i
    .test(val);

/**
 * Checks for a valid credit card number.
 *
 * @param {Mixed} val The value to check.
 * @returns {Boolean} Whether the value is a credit card number.
 * @example
 * is.creditCard(378282246310005); // true
 * is.creditCard(123); // false
 * is.creditCard(true); // false
 */
module.exports.creditCard = val =>
  /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/
    .test(val);

/**
 * Checks for an alphanumeric string.
 *
 * @param {Mixed} val The value to check.
 * @returns {Boolean} Whether the value is an alphanumeric string.
 * @example
 * is.alphaNumeric('abc123'); // true
 * is.alphaNumeric('*?'); // false
 * is.alphaNumeric(true); // false
 */
module.exports.alphaNumeric = val =>
  /^[A-Za-z0-9]+$/
    .test(val);

module.exports.alphanumeric = module.exports.alphaNumeric;

/**
 * Checks for a valid time string.
 *
 * @param {Mixed} val The value to check.
 * @returns {Boolean} Whether the value is a time string.
 * @example
 * is.timeString('13:45:30'); // true
 * is.timeString('12:12:90'); // false
 * is.timeString(true); // false
 */
module.exports.timeString = val =>
  /* Match hours, minutes, and seconds, 24-hour clock */
  /^(2[0-3]|[01]?[0-9]):([0-5]?[0-9]):([0-5]?[0-9])$/
    .test(val);

/**
 * Checks for a valid date string.
 *
 * Matches m/d/yy, m-d-yy, mm/dd/yyyy and mm/dd/yyyy, allowing any combination
 * of one or two digits for the day and month, and two or four digits for the
 * year.
 *
 * @param {Mixed} val The value to check.
 * @returns {Boolean} Whether the value is a date string.
 * @example
 * is.dateString('11/11/2011'); // true
 * is.dateString('1/5'); // false
 * is.dateString(true); // false
 */
module.exports.dateString = val =>
  /^(1[0-2]|0?[1-9])[/-](3[01]|[12][0-9]|0?[1-9])[/-](?:[0-9]{2})?[0-9]{2}$/
    .test(val);

/**
 * Checks for a valid base64 string.
 *
 * @param {Mixed} val The value to check.
 * @returns {Boolean} Whether the value is a base64 string.
 * @example
 * is.base64String('ZmktaXM='); // true
 * is.base64String('1'); // false
 * is.base64String(true); // false
 */
module.exports.base64 = val =>
  /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/
    .test(val);

/**
 * Checks for a valid US ZIP code.
 *
 * @param {Mixed} val The value to check.
 * @returns {Boolean} Whether the value is a US ZIP code.
 * @example
 * is.usZipCode('02201-1020'); // true
 * is.usZipCode('1'); // false
 * is.usZipCode(true); // false
 */
module.exports.usZipCode = val =>
  /^[0-9]{5}(?:-[0-9]{4})?$/
    .test(val);

/**
 * Checks for a valid Canada postal code.
 *
 * @param {Mixed} val The value to check.
 * @returns {Boolean} Whether the value is a Canada postal code.
 * @example
 * is.caPostalCode('L8V3Y1'); // true
 * is.caPostalCode('L8V 3Y1'); // true
 * is.caPostalCode('1'); // false
 * is.caPostalCode(true); // false
 */
module.exports.caPostalCode = val =>
  /^(?!.*[DFIOQU])[A-VXY][0-9][A-Z]\s?[0-9][A-Z][0-9]$/
    .test(val);

/**
 * Checks for a valid UK post code.
 *
 * @param {Mixed} val The value to check.
 * @returns {Boolean} Whether the value is a UK post code.
 * @example
 * is.ukPostCode('B184BJ'); // true
 * is.ukPostCode('1'); // false
 * is.ukPostCode(true); // false
 */
module.exports.ukPostCode = val =>
  /^[A-Z]{1,2}[0-9RCHNQ][0-9A-Z]?\s?[0-9][ABD-HJLNP-UW-Z]{2}$|^[A-Z]{2}-?[0-9]{4}$/
    .test(val);

/**
 * Checks for a valid north american number plan formatted value.
 *
 * @param {Mixed} val The value to check.
 * @returns {Boolean} Whether the value is in north american number
 * plan format.
 * @example
 * is.nanpPhone('609-555-0175'); // true
 * is.nanpPhone('1'); // false
 * is.nanpPhone(true); // false
 */
module.exports.nanpPhone = val =>
  /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
    .test(val);

/**
 * Checks for a valid extensible provisioning protocol formatted value.
 *
 * @param {Mixed} val The value to check.
 * @returns {Boolean} Whether the value is in extensible provisioning protocol
 * format.
 * @example
 * is.eppPhone('+90.2322456789'); // true
 * is.eppPhone('1'); // false
 * is.eppPhone(true); // false
 */
module.exports.eppPhone = val =>
  /^\+[0-9]{1,3}\.[0-9]{4,14}(?:x.+)?$/
    .test(val);

/**
 * Checks for a valid international phone number formatted value (WhatsApp, Telegram, etc.).
 *
 * @param {Mixed} val The value to check.
 * @returns {Boolean} Whether the value is a valid international phone number.
 * @example
 * is.intPhone('+140832245678901'); // true
 * is.intPhone('+297983652'); // true
 * is.intPhone('+126853653'); // true
 * is.intPhone('+0245673'); // false
 * is.intPhone('1'); // false
 * is.intPhone(true); // false
 */
module.exports.intPhone = val =>
  /^\+[1-9][0-9]{0,4}[0-9]{2,14}?$/
    .test(val);

/**
 * Checks for a valid social security number.
 *
 * @param {Mixed} val The value to check.
 * @returns {Boolean} Whether the value is a social security number.
 * @example
 * is.socialSecurityNumber('017-90-7890'); // true
 * is.socialSecurityNumber('1'); // false
 * is.socialSecurityNumber(true); // false
 */
module.exports.socialSecurityNumber = val =>
  /^(?!000|666)[0-8][0-9]{2}-(?!00)[0-9]{2}-(?!0000)[0-9]{4}$/
    .test(val);

/**
 * Checks for an affirmative value (case-insensitive).
 *
 * @param {Mixed} val The value to check.
 * @returns {Boolean} Whether the value affirmative.
 * @example
 * is.affirmative('yes'); // true
 * is.affirmative('true'); // true
 * is.affirmative('y'); // true
 * is.affirmative('1'); // true
 * is.affirmative('ok'); // true
 * is.affirmative('okay'); // true
 * is.affirmative(1); // true
 * is.affirmative(true); // true
 * is.affirmative('no'); // false
 * is.affirmative('N'); // false
 * is.affirmative(0); // false
 * is.affirmative(false); // false
 * is.affirmative({}); // false
 * is.affirmative(null); // false
 */
module.exports.affirmative = val =>
  /^(?:1|t(?:rue)?|y(?:es)?|o\.?k\.?(?:ay)?)$/i
    .test(val);

/**
 * Checks for a valid hexadecimal value.
 *
 * @param {Mixed} val The value to check.
 * @returns {Boolean} Whether the value is hexadecimal.
 * @example
 * is.hexadecimal('ff'); // true
 * is.hexadecimal('ffFF'); // true
 * is.hexadecimal('fF0'); // true
 * is.hexadecimal(0.287); // false
 * is.hexadecimal(true); // false
 */
module.exports.hexadecimal = val =>
  /^[0-9a-fA-F]+$/
    .test(val);

/**
 * Checks for a valid hex color value.
 *
 * @param {Mixed} val The value to check.
 * @returns {Boolean} Whether the value is hex color.
 * @example
 * is.hexColor('#333'); // true
 * is.hexColor('#444444'); // true
 * is.hexColor('#abc123'); // true
 * is.hexColor(0.287); // false
 * is.hexColor(true); // false
 */
module.exports.hexColor = val =>
  /^#?([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/
    .test(val);

/**
 * Checks for a valid IPv4 address.
 *
 * @param {Mixed} val The value to check.
 * @returns {Boolean} Whether the value is an IPv4 address.
 * @example
 * is.ipv4('127.0.0.1'); // true
 * is.ipv4('2001:db8::ff00:42:8329'); // false
 * is.ipv4('5555.555.5.5'); // false
 * is.ipv4(true); // false
 */
module.exports.ipv4 = val =>
  /^\s*((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))\s*$/
    .test(val);

/**
 * Checks for a valid IPv6 address.
 *
 * @param {Mixed} val The value to check.
 * @returns {Boolean} Whether the value is an IPv6 address.
 * @example
 * is.ipv6('2001:db8::ff00:42:8329'); // true
 * is.ipv6('127.0.0.1'); // false
 * is.ipv6('2001::::42:8329'); // false
 * is.ipv6(true); // false
 */
module.exports.ipv6 = val =>
  /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/
    .test(val);

/**
 * Checks for a valid IPv4 or IPv6 address.
 *
 * @param {Mixed} val The value to check.
 * @returns {Boolean} Whether the value is an IPv4 or IPv6 address.
 * @example
 * is.ip('2001:db8::ff00:42:8329'); // true
 * is.ip('127.0.0.1'); // true
 * is.ip('1.0.287.99'); // false
 * is.ip('2001::::42:8329'); // false
 * is.ip(true); // false
 */
module.exports.ip = val => module.exports.ipv4(val) || module.exports.ipv6(val);
