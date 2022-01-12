import React, { Component } from 'react';

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;

  _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}var AsyncMode=l;var ConcurrentMode=m;var ContextConsumer=k;var ContextProvider=h;var Element=c;var ForwardRef=n;var Fragment=e;var Lazy=t;var Memo=r;var Portal=d;
var Profiler=g;var StrictMode=f;var Suspense=p;var isAsyncMode=function(a){return A(a)||z(a)===l};var isConcurrentMode=A;var isContextConsumer=function(a){return z(a)===k};var isContextProvider=function(a){return z(a)===h};var isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};var isForwardRef=function(a){return z(a)===n};var isFragment=function(a){return z(a)===e};var isLazy=function(a){return z(a)===t};
var isMemo=function(a){return z(a)===r};var isPortal=function(a){return z(a)===d};var isProfiler=function(a){return z(a)===g};var isStrictMode=function(a){return z(a)===f};var isSuspense=function(a){return z(a)===p};
var isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};var typeOf=z;

var reactIs_production_min = {
	AsyncMode: AsyncMode,
	ConcurrentMode: ConcurrentMode,
	ContextConsumer: ContextConsumer,
	ContextProvider: ContextProvider,
	Element: Element,
	ForwardRef: ForwardRef,
	Fragment: Fragment,
	Lazy: Lazy,
	Memo: Memo,
	Portal: Portal,
	Profiler: Profiler,
	StrictMode: StrictMode,
	Suspense: Suspense,
	isAsyncMode: isAsyncMode,
	isConcurrentMode: isConcurrentMode,
	isContextConsumer: isContextConsumer,
	isContextProvider: isContextProvider,
	isElement: isElement,
	isForwardRef: isForwardRef,
	isFragment: isFragment,
	isLazy: isLazy,
	isMemo: isMemo,
	isPortal: isPortal,
	isProfiler: isProfiler,
	isStrictMode: isStrictMode,
	isSuspense: isSuspense,
	isValidElementType: isValidElementType,
	typeOf: typeOf
};

var reactIs_development = createCommonjsModule(function (module, exports) {



if (process.env.NODE_ENV !== "production") {
  (function() {

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}
});

var reactIs = createCommonjsModule(function (module) {

if (process.env.NODE_ENV === 'production') {
  module.exports = reactIs_production_min;
} else {
  module.exports = reactIs_development;
}
});

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret;

var has = Function.call.bind(Object.prototype.hasOwnProperty);

var printWarning = function() {};

if (process.env.NODE_ENV !== 'production') {
  var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};
  var has$1 = has;

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) { /**/ }
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (has$1(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' +
              'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (process.env.NODE_ENV !== 'production') {
    loggedTypeFailures = {};
  }
};

var checkPropTypes_1 = checkPropTypes;

var printWarning$1 = function() {};

if (process.env.NODE_ENV !== 'production') {
  printWarning$1 = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bigint: createPrimitiveTypeChecker('bigint'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message, data) {
    this.message = message;
    this.data = data && typeof data === 'object' ? data: {};
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret_1) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning$1(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError(
          'Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'),
          {expectedType: expectedType}
        );
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!reactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (process.env.NODE_ENV !== 'production') {
        if (arguments.length > 1) {
          printWarning$1(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning$1('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? printWarning$1('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning$1(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      var expectedTypes = [];
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1);
        if (checkerResult == null) {
          return null;
        }
        if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
          expectedTypes.push(checkerResult.data.expectedType);
        }
      }
      var expectedTypesMessage = (expectedTypes.length > 0) ? ', expected one of type [' + expectedTypes.join(', ') + ']': '';
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function invalidValidatorError(componentName, location, propFullName, key, type) {
    return new PropTypeError(
      (componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' +
      'it must be a function, usually from the `prop-types` package, but received `' + type + '`.'
    );
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from props.
      var allKeys = objectAssign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (has(shapeTypes, key) && typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes_1;
  ReactPropTypes.resetWarningCache = checkPropTypes_1.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bigint: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

var propTypes = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var ReactIs = reactIs;

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = factoryWithThrowingShims();
}
});

var locationType = propTypes.shape({
  address: propTypes.string,
  postalCode: propTypes.string,
  city: propTypes.string,
  countryCode: propTypes.string,
  region: propTypes.string
}).isRequired;
var profileType = propTypes.shape({
  network: propTypes.string,
  username: propTypes.string,
  url: propTypes.string
}).isRequired;
var basicsType = propTypes.shape({
  name: propTypes.string,
  label: propTypes.string,
  picture: propTypes.string,
  email: propTypes.string,
  phone: propTypes.string,
  website: propTypes.string,
  summary: propTypes.string,
  location: propTypes.shape(locationType),
  profiles: propTypes.arrayOf(profileType)
}).isRequired;
var workType = propTypes.arrayOf(propTypes.shape({
  company: propTypes.string,
  position: propTypes.string,
  website: propTypes.string,
  startDate: propTypes.string,
  endDate: propTypes.string,
  summary: propTypes.string,
  highlights: propTypes.arrayOf(propTypes.string)
})).isRequired;
var volunteerType = propTypes.arrayOf(propTypes.shape({
  organization: propTypes.string,
  position: propTypes.string,
  website: propTypes.string,
  startDate: propTypes.string,
  endDate: propTypes.string,
  summary: propTypes.string,
  highlights: propTypes.arrayOf(propTypes.string)
})).isRequired;
var educationType = propTypes.arrayOf(propTypes.shape({
  institution: propTypes.string,
  area: propTypes.string,
  studyType: propTypes.string,
  startDate: propTypes.string,
  endDate: propTypes.string,
  gpa: propTypes.string,
  courses: propTypes.arrayOf(propTypes.string)
})).isRequired;
var awardsType = propTypes.arrayOf(propTypes.shape({
  title: propTypes.string,
  date: propTypes.string,
  awarder: propTypes.string,
  summary: propTypes.string
})).isRequired;
var publicationsType = propTypes.arrayOf(propTypes.shape({
  name: propTypes.string,
  publisher: propTypes.string,
  releaseDate: propTypes.string,
  website: propTypes.string,
  summary: propTypes.string
})).isRequired;
var skillsType = propTypes.arrayOf(propTypes.shape({
  name: propTypes.string,
  level: propTypes.string,
  keywords: propTypes.arrayOf(propTypes.string)
})).isRequired;
var languagesType = propTypes.arrayOf(propTypes.shape({
  name: propTypes.string,
  level: propTypes.string
})).isRequired;
var interestsType = propTypes.arrayOf(propTypes.shape({
  name: propTypes.string,
  keywords: propTypes.arrayOf(propTypes.string)
})).isRequired;
var referencesType = propTypes.arrayOf(propTypes.shape({
  name: propTypes.string,
  reference: propTypes.string
})).isRequired;
var resumeType = propTypes.shape({
  basics: basicsType,
  work: workType,
  volunteer: volunteerType,
  education: educationType,
  awards: awardsType,
  publications: publicationsType,
  skills: skillsType,
  languages: languagesType,
  interests: interestsType,
  references: referencesType
});

var iconSize = 50;
var iconSizePad = 30;
var leftRightDiff = 40;
var isMobile = function isMobile(cvWidth) {
  return cvWidth < 640;
};
var getLeftSideDivStyle = function getLeftSideDivStyle(cvWidth) {
  var width = isMobile(cvWidth) ? "100%" : iconSize + iconSizePad;
  return {
    width: width,
    display: "inline-block",
    textAlign: "center"
  };
};
var getRightSideDivStyle = function getRightSideDivStyle(cvWidth) {
  var width = isMobile(cvWidth) ? "100%" : cvWidth - iconSize - iconSizePad - leftRightDiff;
  return {
    width: width,
    display: "inline-block"
  };
};
var mixWithBorder = function mixWithBorder(style) {
  return Object.assign({
    borderLeft: "3px solid black",
    borderBottom: "1px solid black"
  }, style);
};
var mixWithBorderAndPadding = function mixWithBorderAndPadding(style) {
  var borderAndPadding = mixWithBorder({});
  return Object.assign(borderAndPadding, style);
};
var mixWithBorder2 = function mixWithBorder2(style) {
  return Object.assign({
    borderRight: "3px solid black",
    borderBottom: "1px solid black"
  }, style);
};
var mixWithBorder2AndPadding = function mixWithBorder2AndPadding(style) {
  var borderAndPadding = mixWithBorder2({});
  return Object.assign(borderAndPadding, style);
};

function Name (props) {
  return /*#__PURE__*/React.createElement("div", null, props.print && /*#__PURE__*/React.createElement(Name$1, {
    basics: props.basics
  }));
}

var Name$1 = function Name(props) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: "1px solid black",
      display: "flex",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      textAlign: "left"
    }
  }, props.basics.name)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Profiles, {
    profiles: props.basics.profiles
  })));
};

var Profiles = function Profiles(props) {
  var sTable = {
    textAlign: "right",
    "float": "right"
  };

  var profile = function profile(prof) {
    return /*#__PURE__*/React.createElement("tr", {
      key: prof.network
    }, /*#__PURE__*/React.createElement("td", {
      style: mixWithBorder({
        padding: 5
      })
    }, prof.network), /*#__PURE__*/React.createElement("td", {
      style: mixWithBorder({
        padding: 5
      })
    }, prof.username));
  };

  var profilesForPrintedCv = props.profiles.filter(function (x) {
    return x.network !== "Twitter";
  });
  return /*#__PURE__*/React.createElement("table", {
    style: sTable
  }, /*#__PURE__*/React.createElement("tbody", null, profilesForPrintedCv.map(function (x) {
    return profile(x);
  })));
};

var Interests = function Interests(props) {
  return /*#__PURE__*/React.createElement("svg", {
    x: "0px",
    y: "0px",
    width: props.size + "px",
    height: props.size + "px",
    viewBox: "0 0 72.371 72.372"
  }, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M22.57,2.648c-4.489,1.82-8.517,4.496-11.971,7.949C7.144,14.051,4.471,18.08,2.65,22.568C0.892,26.904,0,31.486,0,36.186 \t\tc0,4.699,0.892,9.281,2.65,13.615c1.821,4.489,4.495,8.518,7.949,11.971c3.454,3.455,7.481,6.129,11.971,7.949 \t\tc4.336,1.76,8.917,2.649,13.617,2.649c4.7,0,9.28-0.892,13.616-2.649c4.488-1.82,8.518-4.494,11.971-7.949 \t\tc3.455-3.453,6.129-7.48,7.949-11.971c1.758-4.334,2.648-8.916,2.648-13.615c0-4.7-0.891-9.282-2.648-13.618 \t\tc-1.82-4.488-4.496-8.518-7.949-11.971s-7.479-6.129-11.971-7.949C45.467,0.891,40.887,0,36.187,0 \t\tC31.487,0,26.906,0.891,22.57,2.648z M9.044,51.419c-1.743-1.094-3.349-2.354-4.771-3.838c-2.172-6.112-2.54-12.729-1.101-19.01 \t\tc0.677-1.335,1.447-2.617,2.318-3.845c0.269-0.379,0.518-0.774,0.806-1.142l8.166,4.832c0,0.064,0,0.134,0,0.205 \t\tc-0.021,4.392,0.425,8.752,1.313,13.049c0.003,0.02,0.006,0.031,0.01,0.049l-6.333,9.93C9.314,51.579,9.177,51.503,9.044,51.419z \t\t M33.324,68.206c1.409,0.719,2.858,1.326,4.347,1.82c-6.325,0.275-12.713-1.207-18.36-4.447L33,68.018 \t\tC33.105,68.085,33.212,68.149,33.324,68.206z M33.274,65.735L17.12,62.856c-1.89-2.295-3.59-4.723-5.051-7.318 \t\tc-0.372-0.66-0.787-1.301-1.102-1.99l6.327-9.92c0.14,0.035,0.296,0.072,0.473,0.119c3.958,1.059,7.986,1.812,12.042,2.402 \t\tc0.237,0.033,0.435,0.062,0.604,0.08l7.584,13.113c-1.316,1.85-2.647,3.69-4.007,5.51C33.764,65.155,33.524,65.446,33.274,65.735z \t\t M60.15,60.149c-1.286,1.287-2.651,2.447-4.08,3.481c-0.237-1.894-0.646-3.75-1.223-5.563l8.092-15.096 \t\tc2.229-1.015,4.379-2.166,6.375-3.593c0.261-0.185,0.478-0.392,0.646-0.618C69.374,46.561,66.104,54.196,60.15,60.149z \t\t M59.791,40.571c0.301,0.574,0.598,1.154,0.896,1.742l-7.816,14.58c-0.045,0.01-0.088,0.02-0.133,0.026 \t\tc-4.225,0.789-8.484,1.209-12.779,1.229l-7.8-13.487c1.214-2.254,2.417-4.517,3.61-6.781c0.81-1.536,1.606-3.082,2.401-4.627 \t\tl16.143-1.658C56.29,34.495,58.163,37.457,59.791,40.571z M56.516,23.277c-0.766,2.023-1.586,4.025-2.401,6.031l-15.726,1.615 \t\tc-0.188-0.248-0.383-0.492-0.588-0.725c-1.857-2.103-3.726-4.193-5.592-6.289c0.017-0.021,0.034-0.037,0.051-0.056 \t\tc-0.753-0.752-1.508-1.504-2.261-2.258l4.378-13.181c0.302-0.08,0.606-0.147,0.913-0.18c2.38-0.242,4.763-0.516,7.149-0.654 \t\tc1.461-0.082,2.93-0.129,4.416-0.024l10.832,12.209C57.314,20.943,56.95,22.124,56.516,23.277z M60.15,12.221 \t\tc2.988,2.99,5.302,6.402,6.938,10.047c-2.024-1.393-4.188-2.539-6.463-3.473c-0.354-0.146-0.717-0.275-1.086-0.402L48.877,6.376 \t\tc0.074-0.519,0.113-1.039,0.129-1.563C53.062,6.464,56.864,8.936,60.15,12.221z M25.334,4.182c0.042,0.031,0.062,0.057,0.086,0.064 \t\tc2.437,0.842,4.654,2.082,6.744,3.553l-4.09,12.317c-0.021,0.006-0.041,0.012-0.061,0.021c-0.837,0.346-1.69,0.656-2.514,1.031 \t\tc-3.395,1.543-6.705,3.252-9.823,5.301l-8.071-4.775c0.012-0.252,0.055-0.508,0.141-0.736c0.542-1.444,1.075-2.896,1.688-4.311 \t\tc0.472-1.09,1.01-2.143,1.597-3.172c0.384-0.424,0.782-0.844,1.192-1.254c3.833-3.832,8.363-6.553,13.186-8.162 \t\tC25.384,4.098,25.358,4.139,25.334,4.182z"
  })));
};

var Education = function Education(props) {
  return /*#__PURE__*/React.createElement("svg", {
    x: "0px",
    y: "0px",
    width: props.size + "px",
    height: props.size + "px",
    viewBox: "0 0 398.97 398.97"
  }, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", {
    id: "Layer_5_59_"
  }, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M225.092,276.586c-7.101,4.355-16.195,6.754-25.607,6.754c-9.412,0-18.506-2.398-25.607-6.754L57.946,205.484 c0,0-10.464-6.414-10.464,8.116c0,16.5,0,66,0,66c0,0.66,0,3.973,0,5c0,37.402,68.053,77.723,152,77.723s152-40.32,152-77.723 c0-1.027,0-4.34,0-5c0,0,0-52.502,0-70.003c0-11.663-7.439-5.964-7.439-5.964L225.092,276.586z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M392.289,148.927c8.908-5.463,8.908-14.403,0-19.867L215.681,40.745c-8.908-5.463-23.485-5.463-32.393,0L6.681,129.06 c-8.908,5.463-8.908,14.403,0,19.867l176.607,108.315c8.908,5.463,23.485,5.463,32.393,0"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M384.985,309.475c0-29.906,0-119.625,0-119.625s0.083-5.666-3.279-3.795c-2.697,1.501-9.308,5.186-11.637,7.212 c-2.689,2.337-2.083,7.583-2.083,7.583s0,81.469,0,108.625c0,1.542-1.325,2.278-1.957,2.65 c-6.105,3.589-10.21,10.214-10.21,17.809c0,11.414,9.252,20.667,20.667,20.667c11.414,0,20.666-9.253,20.666-20.667 c0-7.624-4.135-14.27-10.279-17.85C386.262,311.728,384.985,311.016,384.985,309.475z"
  })))));
};

var TeamWork = function TeamWork(props) {
  return /*#__PURE__*/React.createElement("svg", {
    x: "0px",
    y: "0px",
    viewBox: "0 0 512 512",
    width: props.size + "px",
    height: props.size + "px"
  }, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M179.2,341.333c-2.475,0-9.472-7.68-14.106-12.774c-13.935-15.3-34.995-38.426-71.228-38.426 c-35.268,0-42.667,9.276-42.667,17.067c0,4.71,3.814,8.533,8.533,8.533c3.447,0,6.426-2.048,7.765-4.992 c1.681-0.93,8.055-3.541,26.368-3.541c28.689,0,45.286,18.219,58.607,32.853c9.335,10.249,16.708,18.347,26.726,18.347h110.933 c4.719,0,8.533-3.823,8.533-8.533s-3.814-8.533-8.533-8.533H179.2z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M201.267,67.499c0.922,1.69,3.533,8.055,3.533,26.368c0,28.689-18.219,45.278-32.862,58.607 C161.69,161.809,153.6,169.182,153.6,179.2v110.933c0,4.71,3.814,8.533,8.533,8.533s8.533-3.823,8.533-8.533V179.2 c0-2.475,7.68-9.472,12.766-14.106c15.309-13.935,38.434-34.995,38.434-71.228c0-35.26-9.284-42.667-17.067-42.667 c-4.719,0-8.533,3.823-8.533,8.533C196.267,63.181,198.315,66.159,201.267,67.499z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M0,162.133c0,4.71,3.814,8.533,8.533,8.533h41.421c0.708,3.243,1.246,6.238,1.246,8.533v85.333 \t\t\t\tc0,4.71,3.814,8.533,8.533,8.533s8.533-3.823,8.533-8.533V179.2c0-8.96-3.533-20.361-7.629-33.562 \t\t\t\tC56.218,131.371,51.2,115.2,51.2,102.4V25.6c0-4.702,3.823-8.533,8.533-8.533s8.533,3.831,8.533,8.533 \t\t\t\tc0,4.71,3.814,8.533,8.533,8.533s8.533-3.823,8.533-8.533c0-4.702,3.823-8.533,8.533-8.533c4.71,0,8.533,3.831,8.533,8.533 \t\t\t\tc0,4.71,3.814,8.533,8.533,8.533s8.533-3.823,8.533-8.533c0-4.702,3.823-8.533,8.533-8.533s8.533,3.831,8.533,8.533 \t\t\t\tc0,4.71,3.814,8.533,8.533,8.533S153.6,30.31,153.6,25.6c0-4.702,3.823-8.533,8.533-8.533c4.71,0,8.533,3.831,8.533,8.533v68.267 \t\t\t\tc0,4.71,3.814,8.533,8.533,8.533s8.533-3.823,8.533-8.533V25.6c0-14.114-11.486-25.6-25.6-25.6 \t\t\t\tc-6.554,0-12.535,2.475-17.067,6.537C140.535,2.475,134.554,0,128,0s-12.535,2.475-17.067,6.537C106.402,2.475,100.42,0,93.867,0 \t\t\t\tC87.313,0,81.331,2.475,76.8,6.537C72.269,2.475,66.287,0,59.733,0c-14.114,0-25.6,11.486-25.6,25.6v25.6h-25.6 \t\t\t\tC3.814,51.2,0,55.023,0,59.733s3.814,8.533,8.533,8.533h25.6V102.4c0,15.386,5.427,32.87,10.206,48.299 \t\t\t\tc0.307,0.981,0.597,1.929,0.896,2.901H8.533C3.814,153.6,0,157.423,0,162.133z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M346.906,183.441c13.935,15.3,34.995,38.426,71.228,38.426c35.268,0,42.667-9.276,42.667-17.067 \t\t\t\tc0-4.71-3.814-8.533-8.533-8.533c-3.447,0-6.426,2.048-7.765,4.992c-1.681,0.93-8.055,3.541-26.368,3.541 \t\t\t\tc-28.689,0-45.286-18.219-58.607-32.853c-9.336-10.249-16.708-18.347-26.726-18.347H221.867c-4.719,0-8.533,3.823-8.533,8.533 \t\t\t\tc0,4.71,3.814,8.533,8.533,8.533H332.8C335.275,170.667,342.272,178.347,346.906,183.441z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M264.533,443.733H179.2c-8.969,0-20.369,3.533-33.562,7.629c-14.259,4.42-30.438,9.438-43.238,9.438H25.6 \t\t\t\tc-4.71,0-8.533-3.831-8.533-8.533c0-4.702,3.823-8.533,8.533-8.533c4.719,0,8.533-3.823,8.533-8.533s-3.814-8.533-8.533-8.533 \t\t\t\tc-4.71,0-8.533-3.831-8.533-8.533S20.89,409.6,25.6,409.6c4.719,0,8.533-3.823,8.533-8.533s-3.814-8.533-8.533-8.533 \t\t\t\tc-4.71,0-8.533-3.831-8.533-8.533c0-4.702,3.823-8.533,8.533-8.533c4.719,0,8.533-3.823,8.533-8.533S30.319,358.4,25.6,358.4 \t\t\t\tc-4.71,0-8.533-3.831-8.533-8.533s3.823-8.533,8.533-8.533h68.267c4.719,0,8.533-3.823,8.533-8.533 \t\t\t\tc0-4.71-3.814-8.533-8.533-8.533H25.6c-14.114,0-25.6,11.486-25.6,25.6c0,6.554,2.475,12.535,6.537,17.067 \t\t\t\tC2.475,371.465,0,377.446,0,384c0,6.554,2.475,12.536,6.537,17.067C2.475,405.598,0,411.58,0,418.133 \t\t\t\tc0,6.554,2.475,12.535,6.537,17.067C2.475,439.731,0,445.713,0,452.267c0,14.114,11.486,25.6,25.6,25.6h25.6v25.6 \t\t\t\tc0,4.71,3.814,8.533,8.533,8.533s8.533-3.823,8.533-8.533v-25.6H102.4c15.386,0,32.87-5.419,48.29-10.206 \t\t\t\tc0.99-0.307,1.937-0.589,2.91-0.887v36.693c0,4.71,3.814,8.533,8.533,8.533s8.533-3.823,8.533-8.533v-41.421 \t\t\t\tc3.251-0.717,6.238-1.246,8.533-1.246h85.333c4.719,0,8.533-3.823,8.533-8.533C273.067,447.556,269.252,443.733,264.533,443.733z \t\t\t\t"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M505.464,76.8C509.525,72.269,512,66.287,512,59.733c0-14.114-11.486-25.6-25.6-25.6h-25.6v-25.6 \t\t\t\tc0-4.71-3.814-8.533-8.533-8.533c-4.719,0-8.533,3.823-8.533,8.533v25.6H409.6c-15.386,0-32.87,5.419-48.29,10.206 \t\t\t\tc-0.99,0.307-1.937,0.589-2.91,0.887V8.533c0-4.71-3.814-8.533-8.533-8.533s-8.533,3.823-8.533,8.533v41.421 \t\t\t\tc-3.251,0.717-6.238,1.246-8.533,1.246h-85.333c-4.719,0-8.533,3.823-8.533,8.533s3.814,8.533,8.533,8.533H332.8 \t\t\t\tc8.969,0,20.369-3.533,33.562-7.629C380.621,56.218,396.8,51.2,409.6,51.2h76.8c4.71,0,8.533,3.831,8.533,8.533 \t\t\t\ts-3.823,8.533-8.533,8.533c-4.719,0-8.533,3.823-8.533,8.533s3.814,8.533,8.533,8.533c4.71,0,8.533,3.831,8.533,8.533 \t\t\t\tc0,4.702-3.823,8.533-8.533,8.533c-4.719,0-8.533,3.823-8.533,8.533s3.814,8.533,8.533,8.533c4.71,0,8.533,3.831,8.533,8.533 \t\t\t\ts-3.823,8.533-8.533,8.533c-4.719,0-8.533,3.823-8.533,8.533c0,4.71,3.814,8.533,8.533,8.533c4.71,0,8.533,3.831,8.533,8.533 \t\t\t\tc0,4.702-3.823,8.533-8.533,8.533h-68.267c-4.719,0-8.533,3.823-8.533,8.533s3.814,8.533,8.533,8.533H486.4 \t\t\t\tc14.114,0,25.6-11.486,25.6-25.6c0-6.554-2.475-12.535-6.536-17.067C509.525,140.535,512,134.554,512,128 \t\t\t\ts-2.475-12.535-6.536-17.067c4.062-4.531,6.536-10.513,6.536-17.067C512,87.313,509.525,81.331,505.464,76.8z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M310.733,444.501c-0.922-1.69-3.533-8.055-3.533-26.368c0-28.689,18.219-45.278,32.862-58.607 c10.249-9.336,18.338-16.708,18.338-26.726V221.867c0-4.71-3.814-8.533-8.533-8.533s-8.533,3.823-8.533,8.533V332.8 c0,2.475-7.68,9.472-12.766,14.106c-15.309,13.935-38.434,34.995-38.434,71.228c0,35.26,9.284,42.667,17.067,42.667 c4.719,0,8.533-3.823,8.533-8.533C315.733,448.819,313.685,445.841,310.733,444.501z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M512,349.867c0-4.71-3.814-8.533-8.533-8.533h-41.421c-0.708-3.243-1.246-6.238-1.246-8.533v-85.333 c0-4.71-3.814-8.533-8.533-8.533c-4.719,0-8.533,3.823-8.533,8.533V332.8c0,8.96,3.533,20.361,7.629,33.562 c4.42,14.268,9.438,30.438,9.438,43.238v76.8c0,4.702-3.823,8.533-8.533,8.533c-4.71,0-8.533-3.831-8.533-8.533 c0-4.71-3.814-8.533-8.533-8.533s-8.533,3.823-8.533,8.533c0,4.702-3.823,8.533-8.533,8.533s-8.533-3.831-8.533-8.533 c0-4.71-3.814-8.533-8.533-8.533c-4.719,0-8.533,3.823-8.533,8.533c0,4.702-3.823,8.533-8.533,8.533s-8.533-3.831-8.533-8.533 c0-4.71-3.814-8.533-8.533-8.533s-8.533,3.823-8.533,8.533c0,4.702-3.823,8.533-8.533,8.533s-8.533-3.831-8.533-8.533v-68.267 c0-4.71-3.814-8.533-8.533-8.533c-4.719,0-8.533,3.823-8.533,8.533V486.4c0,14.114,11.486,25.6,25.6,25.6 c6.554,0,12.535-2.475,17.067-6.536C371.465,509.525,377.446,512,384,512c6.554,0,12.536-2.475,17.067-6.536 c4.531,4.062,10.513,6.536,17.067,6.536c6.554,0,12.535-2.475,17.067-6.536c4.531,4.062,10.513,6.536,17.067,6.536 c14.114,0,25.6-11.486,25.6-25.6v-25.6h25.6c4.719,0,8.533-3.823,8.533-8.533c0-4.71-3.814-8.533-8.533-8.533h-25.6V409.6 c0-15.386-5.427-32.87-10.206-48.299c-0.307-0.981-0.597-1.929-0.896-2.901h36.702C508.186,358.4,512,354.577,512,349.867z"
  })))));
};

var Tools = function Tools(props) {
  return /*#__PURE__*/React.createElement("svg", {
    x: "0px",
    y: "0px",
    width: props.size + "px",
    height: props.size + "px",
    viewBox: "0 0 486.924 486.924"
  }, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M13.361,409.063c-17.814,17.814-17.814,46.663,0,64.477c8.907,8.907,20.58,13.345,32.254,13.345 \t\t\t\t\ts23.347-4.438,32.254-13.345l149.717-149.748l-64.508-64.447L13.361,409.063z"
  }), "     ", /*#__PURE__*/React.createElement("polygon", {
    points: "387.548,131.577 452.755,97.863 486.893,31.866 455.065,0.038 389.098,34.207  \t\t\t\t\t355.324,99.353 276.012,178.756 308.175,210.98 \t\t\t\t"
  }), "     ", /*#__PURE__*/React.createElement("path", {
    d: "M401.835,304.641l-6.141-0.608c-11.126,0-21.675,2.28-31.524,5.928l-187.17-187.2 \t\t\t\t\tc3.648-9.849,5.928-20.398,5.928-31.524l-0.608-6.141c-3.222-47.454-42.316-85.058-90.59-85.058 \t\t\t\t\tc-14.045,0-27.208,3.435-39.094,9.12l60.586,60.586c3.192,3.192,5.381,6.961,6.84,10.944c3.982,10.761,1.824,23.347-6.84,32.041 \t\t\t\t\tc-5.928,5.928-13.71,8.907-21.492,8.907c-3.587,0-7.144-0.79-10.549-2.067c-3.982-1.52-7.752-3.648-10.944-6.87L9.652,52.143 \t\t\t\t\tc-5.685,11.886-9.12,25.049-9.12,39.094c0,48.274,37.604,87.368,85.058,90.59l6.141,0.608c11.126,0,21.675-2.28,31.524-5.897 \t\t\t\t\tl187.139,187.17c-3.587,9.849-5.867,20.398-5.867,31.524l0.638,6.141c3.162,47.484,42.286,85.058,90.56,85.058 \t\t\t\t\tc14.045,0,27.238-3.374,39.094-9.12l-60.586-60.586c-3.162-3.162-5.381-6.961-6.901-10.913 \t\t\t\t\tc-3.982-10.761-1.824-23.377,6.901-32.071c5.867-5.928,13.71-8.907,21.492-8.907c3.587,0,7.113,0.76,10.579,2.067 \t\t\t\t\tc3.982,1.49,7.782,3.618,10.913,6.84l60.586,60.586c5.715-11.917,9.12-25.049,9.12-39.094 \t\t\t\t\tC486.893,346.957,449.289,307.863,401.835,304.641z"
  }))))));
};

var BriefCase = function BriefCase(props) {
  return /*#__PURE__*/React.createElement("svg", {
    version: "1.1",
    x: "0px",
    y: "0px",
    width: props.size + "px",
    height: props.size + "px",
    viewBox: "0 0 512 512"
  }, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M488.727,279.273c-6.982,0-11.636,4.655-11.636,11.636v151.273c0,6.982-4.655,11.636-11.636,11.636H46.545 \t\t\tc-6.982,0-11.636-4.655-11.636-11.636V290.909c0-6.982-4.655-11.636-11.636-11.636s-11.636,4.655-11.636,11.636v151.273 \t\t\tc0,19.782,15.127,34.909,34.909,34.909h418.909c19.782,0,34.909-15.127,34.909-34.909V290.909 \t\t\tC500.364,283.927,495.709,279.273,488.727,279.273z"
  }))), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M477.091,116.364H34.909C15.127,116.364,0,131.491,0,151.273v74.473C0,242.036,11.636,256,26.764,259.491l182.691,40.727 \t\t\tv37.236c0,6.982,4.655,11.636,11.636,11.636h69.818c6.982,0,11.636-4.655,11.636-11.636v-37.236l182.691-40.727 \t\t\tC500.364,256,512,242.036,512,225.745v-74.473C512,131.491,496.873,116.364,477.091,116.364z M279.273,325.818h-46.545v-46.545 \t\t\th46.545V325.818z M488.727,225.745c0,5.818-3.491,10.473-9.309,11.636l-176.873,39.564v-9.309c0-6.982-4.655-11.636-11.636-11.636 \t\t\th-69.818c-6.982,0-11.636,4.655-11.636,11.636v9.309L32.582,237.382c-5.818-1.164-9.309-5.818-9.309-11.636v-74.473 \t\t\tc0-6.982,4.655-11.636,11.636-11.636h442.182c6.982,0,11.636,4.655,11.636,11.636V225.745z"
  }))), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M314.182,34.909H197.818c-19.782,0-34.909,15.127-34.909,34.909v11.636c0,6.982,4.655,11.636,11.636,11.636 s11.636-4.655,11.636-11.636V69.818c0-6.982,4.655-11.636,11.636-11.636h116.364c6.982,0,11.636,4.655,11.636,11.636v11.636 c0,6.982,4.655,11.636,11.636,11.636c6.982,0,11.636-4.655,11.636-11.636V69.818C349.091,50.036,333.964,34.909,314.182,34.909z"
  }))));
};

var ExperienceIcon = function ExperienceIcon(props) {
  return /*#__PURE__*/React.createElement("svg", {
    x: "0px",
    y: "0px",
    width: props.size + "px",
    height: props.size + "px",
    viewBox: "0 0 481.291 481.291"
  }, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", {
    id: "Layer_2_16_"
  }, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M138.814,146.22c3.12,40.976,19.417,23.314,22.779,41.27c5.59,29.848,32.016,51.436,48.466,58.893 c9.597,4.348,19.48,6.53,29.871,6.704v0.009c0.036,0,0.072-0.004,0.108-0.004s0.072,0.004,0.108,0.004v-0.009 c10.39-0.174,20.272-2.355,29.871-6.704c16.45-7.457,42.876-29.045,48.466-58.893c3.362-17.955,19.659-0.294,22.779-41.27 c0-16.33-8.898-20.394-8.898-20.394s4.523-24.171,6.295-42.77C340.854,59.877,325.129,0,241.25,0 c-0.367,0-0.707,0.02-1.065,0.024c-0.013,0-0.025,0-0.038-0.001V0.019c-0.036,0.001-0.072,0.002-0.108,0.002 s-0.072-0.001-0.108-0.002v0.005c-0.013,0.001-0.025,0.001-0.038,0.001c-0.358-0.005-0.698-0.024-1.065-0.024 c-83.878,0-99.604,59.877-97.409,83.056c1.771,18.599,6.295,42.77,6.295,42.77S138.814,129.89,138.814,146.22z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M430.313,347.371c-42.308-21.523-103.63-48.406-106.573-49.355c-0.033-0.012-0.058-0.014-0.09-0.024 \t\t\t\tc-1.721-0.613-3.571-0.953-5.504-0.953c-7.188,0-13.285,4.604-15.547,11.021c-0.012-0.008-0.024-0.013-0.036-0.021 \t\t\t\tc-10.92,26.315-30.979,73.223-43.434,95.842l-3-63.413c0,0,18.705-39.699,20.752-43.336c4.82-8.525,0.479-15.783-8.557-15.783 \t\t\t\tc-4.482,0-15.695,0-26.926,0c-0.013,0-0.025,0-0.038,0c-0.072,0-0.144,0-0.216,0c-0.013,0-0.025,0-0.038,0 \t\t\t\tc-0.154,0-0.308,0-0.462,0s-0.308,0-0.462,0c-0.013,0-0.025,0-0.038,0c-0.072,0-0.144,0-0.216,0c-0.013,0-0.025,0-0.038,0 \t\t\t\tc-11.23,0-22.442,0-26.926,0c-9.036,0-13.376,7.258-8.557,15.783c2.048,3.637,20.752,43.336,20.752,43.336l-2.999,63.413 \t\t\t\tc-12.455-22.619-32.514-69.524-43.434-95.842c-0.012,0.008-0.024,0.013-0.036,0.021c-2.262-6.414-8.359-11.021-15.547-11.021 \t\t\t\tc-1.933,0-3.783,0.34-5.504,0.953c-0.032,0.012-0.057,0.015-0.09,0.024c-2.942,0.949-64.265,27.832-106.573,49.355 \t\t\t\tc-19,9.666-30.467,21.688-30.467,34.34c0,41.826,0,99.58,0,99.58h219.227h0.191h0.105h0.006h0.107h0.191h0.309h0.309h0.191h0.105 \t\t\t\th0.006h0.105h0.191H460.78c0,0,0-57.754,0-99.58C460.779,369.059,449.313,357.037,430.313,347.371z"
  })))));
};

var Icons = {
  ExperienceIcon: ExperienceIcon,
  BriefCase: BriefCase,
  Tools: Tools,
  TeamWork: TeamWork,
  Education: Education,
  Interests: Interests
};

function LeftRight (props) {
  var isMob = isMobile(props.cvWidth);
  var initialLeftStyle = isMob ? {
    borderLeft: "3px solid black"
  } : {};
  var initialRightStyle = isMob ? {
    borderRight: "3px solid black"
  } : {};
  var initialStyle = props.isLeft ? initialLeftStyle : initialRightStyle;
  var childFuncLeftStyle = {
    borderRight: "3px solid black"
  };
  var childFuncRightStyle = {
    borderLeft: "3px solid black"
  };
  var childFuncStyle = props.isLeft ? childFuncLeftStyle : childFuncRightStyle;
  var borderStyleDecorator = props.isLeft ? mixWithBorderAndPadding : mixWithBorder2AndPadding;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: Object.assign(getLeftSideDivStyle(props.cvWidth), initialStyle)
  }, props.leftSide(isMob)), /*#__PURE__*/React.createElement("div", {
    style: borderStyleDecorator(getRightSideDivStyle(props.cvWidth))
  }, props.childFactory(childFuncStyle)));
}

function Profile (props) {
  return /*#__PURE__*/React.createElement(Summary, {
    basics: props.basics,
    cvWidth: props.cvWidth,
    cvType: props.cvType
  });
}

var Summary = function Summary(props) {
  var leftSide = function leftSide(isMob) {
    return isMob ? /*#__PURE__*/React.createElement("h4", null, "Profile") : /*#__PURE__*/React.createElement(Icons.ExperienceIcon, {
      size: iconSize
    });
  };

  var summary = props.basics.summary;
  var summaryOverride = props.basics["summary-" + props.cvType];

  if (summaryOverride) {
    summary = summaryOverride;
  }

  var childFactory = function childFactory(childStyle) {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 10,
        textAlign: "justify"
      }
    }, summary));
  };

  return /*#__PURE__*/React.createElement(LeftRight, {
    isLeft: true,
    leftSide: leftSide,
    childFactory: childFactory,
    cvWidth: props.cvWidth
  });
};

var selected = {
  HighlightedAndSelected: "HighlightedAndSelected",
  Highlighted: "Highlighted",
  Visible: "Visible",
  Hidden: "Hidden"
};
var types = {
  Skill: "Skill",
  SkillType: "SkillType",
  Setting: "Setting"
};
var selectedTypes = types;
var isSelectedFunc = function isSelectedFunc(stateType, stateValue, currentType, currentValue, skillsObj) {
  if (stateType === undefined || stateType === null || stateValue === undefined || stateValue === null || !currentType || !currentValue) {
    throw new Error("Bad input - '" + stateType + "' '" + stateValue + "' '" + currentType + "' '" + currentValue + "'");
  }

  var getSettingId = function getSettingId(settingName) {
    var settingVals = Object.values(skillsObj.settings);
    var settingWithName = settingVals.filter(function (s) {
      return s.name === settingName;
    });

    if (settingWithName.length < 1) {
      throw new Error("Bad setting name - " + settingName);
    }

    return settingWithName[0].id;
  };

  var getSkillTypeId = function getSkillTypeId(skillTypeName) {
    var skillTypeVals = Object.values(skillsObj.skillTypes);
    var skillsTypesWithName = skillTypeVals.filter(function (s) {
      return s.name === skillTypeName;
    });

    if (skillsTypesWithName.length < 1) {
      throw new Error("Bad skill type name - " + skillTypeName);
    }

    return skillsTypesWithName[0].id;
  };

  var selectedIsBlank = function selectedIsBlank() {
    return selected.Visible;
  };

  var selectedIsSkill = function selectedIsSkill() {
    if (currentType === types.Skill) {
      if (currentValue === stateValue) {
        return selected.HighlightedAndSelected;
      } else {
        return selected.Hidden;
      }
    }

    var skill = skillsObj.skills[stateValue];

    if (currentType === types.SkillType) {
      var skillTypeId = getSkillTypeId(currentValue);

      if (skill.skillTypesIds.includes(skillTypeId)) {
        return selected.Highlighted;
      } else {
        return selected.Hidden;
      }
    }

    if (currentType === types.Setting) {
      var settingId = getSettingId(currentValue);

      if (skill.settingsIds.includes(settingId)) {
        return selected.Highlighted;
      } else {
        return selected.Hidden;
      }
    }

    throw new Error("is bad type - " + currentType);
  };

  var selectedIsWork = function selectedIsWork() {
    if (currentType === types.SkillType) {
      return selected.Hidden;
    }

    if (currentType === types.Setting) {
      if (currentValue === stateValue) {
        return selected.HighlightedAndSelected;
      } else {
        return selected.Hidden;
      }
    }

    if (currentType === types.Skill) {
      var skill = skillsObj.skills[currentValue];
      var settingId = getSettingId(stateValue);

      if (skill.settingsIds.includes(settingId)) {
        return selected.Highlighted;
      } else {
        return selected.Hidden;
      }
    }

    throw new Error("is bad type - " + currentType);
  };

  var selectedIsSkillType = function selectedIsSkillType() {
    if (currentType === types.Setting) {
      return selected.Hidden;
    }

    if (currentType === types.SkillType) {
      if (currentValue === stateValue) {
        return selected.HighlightedAndSelected;
      } else {
        return selected.Hidden;
      }
    }

    if (currentType === types.Skill) {
      var skill = skillsObj.skills[currentValue];
      var skillTypeId = getSkillTypeId(stateValue);

      if (skill.skillTypesIds.includes(skillTypeId)) {
        return selected.Highlighted;
      } else {
        return selected.Hidden;
      }
    }

    throw new Error("is bad type - " + currentType);
  };

  if (stateType === "" && stateValue === "") return selectedIsBlank();
  if (stateType === types.Skill) return selectedIsSkill();
  if (stateType === types.SkillType) return selectedIsSkillType();
  if (stateType === types.Setting) return selectedIsWork();
  return selected.Visible;
};
var getSkillClass = function getSkillClass(s) {
  switch (s) {
    case selected.HighlightedAndSelected:
      return "skill-to-s";

    case selected.Highlighted:
      return "skill-to-h";

    case selected.Visible:
      return "skill-to-v";

    case selected.Hidden:
      return "skill-to-i";

    default:
      throw new Error("Bad value get class - " + s);
  }
};
var getSettingClass = function getSettingClass(s) {
  switch (s) {
    case selected.HighlightedAndSelected:
      return "setting-to-s";

    case selected.Highlighted:
      return "setting-to-h";

    case selected.Visible:
      return "setting-to-v";

    case selected.Hidden:
      return "setting-to-i";

    default:
      throw new Error("Bad value get class - " + s);
  }
};

var formatDate = function formatDate(date) {
  return date.match(/20\d\d/);
};

var df = {
  formatDate: formatDate,
  formatDiff: function formatDiff(startDate, endDate) {
    function monthDiff(d1, d2) {
      var months;
      months = (d2.getFullYear() - d1.getFullYear()) * 12;
      months -= d1.getMonth();
      months += d2.getMonth();
      return months <= 0 ? 0 : months;
    }

    var diffInMonths = monthDiff(new Date(startDate), endDate ? new Date(endDate) : new Date());
    var diffInYears = 0;

    if (diffInMonths > 11) {
      diffInYears = Math.floor(diffInMonths / 12.0);
      diffInMonths -= diffInYears * 12;
    }

    var formatDiff = function formatDiff() {
      var years = diffInYears > 0 ? diffInYears + "y" : "";
      var months = diffInMonths > 0 ? diffInMonths + "m" : "";

      if (years !== "" && months !== "") {
        return years + ", " + months;
      } else {
        return years + months;
      }
    };

    return formatDiff();
  }
};

var Experience = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Experience, _React$Component);

  function Experience() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Experience.prototype;

  _proto.render = function render() {
    var that = this;

    var leftSide = function leftSide(isMob) {
      return isMob ? /*#__PURE__*/React.createElement("h4", null, "Experience") : /*#__PURE__*/React.createElement(Icons.BriefCase, {
        size: iconSize
      });
    };

    var childFactory = function childFactory(childStyle) {
      return /*#__PURE__*/React.createElement("div", null, that.props.work.map(function (x) {
        return /*#__PURE__*/React.createElement(WorkPlace, {
          key: x.company,
          work: x,
          childStyle: childStyle
        });
      }));
    };

    return /*#__PURE__*/React.createElement(LeftRight, {
      isLeft: true,
      leftSide: leftSide,
      childFactory: childFactory,
      cvWidth: this.props.cvWidth
    });
  };

  return Experience;
}(React.Component);

var WorkPlace = /*#__PURE__*/function (_React$Component2) {
  _inheritsLoose(WorkPlace, _React$Component2);

  function WorkPlace() {
    return _React$Component2.apply(this, arguments) || this;
  }

  var _proto2 = WorkPlace.prototype;

  _proto2.render = function render() {
    var containerStyle = Object.assign({}, this.props.childStyle, {
      padding: 10,
      margin: 10
    });
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: containerStyle
    }, /*#__PURE__*/React.createElement(WorkPlaceTitle, {
      work: this.props.work
    }), this.props.work.summary !== "" && /*#__PURE__*/React.createElement(WorkPlaceDescription, {
      work: this.props.work
    }), this.props.work.highlights && this.props.work.highlights.length > 0 && /*#__PURE__*/React.createElement(WorkPlaceHighlights, {
      work: this.props.work
    })));
  };

  return WorkPlace;
}(React.Component);

var WorkPlaceTitle = /*#__PURE__*/function (_React$Component3) {
  _inheritsLoose(WorkPlaceTitle, _React$Component3);

  function WorkPlaceTitle() {
    return _React$Component3.apply(this, arguments) || this;
  }

  var _proto3 = WorkPlaceTitle.prototype;

  _proto3.render = function render() {
    var startDateFormatted = df.formatDate(this.props.work.startDate);
    var endDateFormatted = this.props.work.endDate ? df.formatDate(this.props.work.endDate) : "Present";
    var diff = df.formatDiff(this.props.work.startDate, this.props.work.endDate);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, this.props.work.company)), " - ", /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("i", null, this.props.work.position))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, startDateFormatted), " - ", /*#__PURE__*/React.createElement("span", null, endDateFormatted), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("i", null, "  (", diff, ")"))));
  };

  return WorkPlaceTitle;
}(React.Component);

var WorkPlaceDescription = /*#__PURE__*/function (_React$Component4) {
  _inheritsLoose(WorkPlaceDescription, _React$Component4);

  function WorkPlaceDescription() {
    return _React$Component4.apply(this, arguments) || this;
  }

  var _proto4 = WorkPlaceDescription.prototype;

  _proto4.render = function render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 10,
        textAlign: "justify"
      }
    }, this.props.work.summary));
  };

  return WorkPlaceDescription;
}(React.Component);

var WorkPlaceHighlights = /*#__PURE__*/function (_React$Component5) {
  _inheritsLoose(WorkPlaceHighlights, _React$Component5);

  function WorkPlaceHighlights() {
    return _React$Component5.apply(this, arguments) || this;
  }

  var _proto5 = WorkPlaceHighlights.prototype;

  _proto5.render = function render() {
    var toHighlight = function toHighlight(h, i) {
      return /*#__PURE__*/React.createElement("li", {
        key: i
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          padding: 3
        }
      }, h));
    };

    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 10,
        textAlign: "justify"
      }
    }, /*#__PURE__*/React.createElement("ul", {
      type: "square",
      style: {
        marginTop: 0,
        marginBottom: 0
      }
    }, this.props.work.highlights.map(function (x, i) {
      return toHighlight(x, i);
    }))));
  };

  return WorkPlaceHighlights;
}(React.Component);

var transitions = "\n.skill-to-s {\n  animation-duration: 500ms;\n  animation-name: toSelectedSkill;\n  animation-fill-mode: forwards;    \n}\n\n.skill-to-h {\n  animation-duration: 500ms;\n  animation-name: toHighlightedSkill;\n  animation-fill-mode: forwards;    \n}\n\n.skill-to-v {\n  animation-duration: 500ms;\n  animation-name: toVisibleSkill;\n  animation-fill-mode: forwards;    \n}\n\n.skill-to-i {\n  animation-duration: 500ms;\n  animation-name: toInvisibleSkill;\n  animation-fill-mode: forwards;    \n}\n\n@keyframes toHighlightedSkill {\n  to {\n      color: black;\n      font-size: 1.2em;\n      padding: 10;\n      border: 1px solid black;\n      border-radius: 5px;\n      margin: 2px;\n  }\n}\n\n\n@keyframes toSelectedSkill {\n  to {\n      color: red;\n      font-size: 1.4em;\n      padding: 10;\n      border: 2px solid red;\n      border-radius: 5px;\n      margin: 2px;\n  }\n}\n\n@keyframes toInvisibleSkill {\n  to {\n      color: grey;\n      font-size: 0.8em;\n      padding: 2;\n      margin: 2px;\n  }\n}\n\n@keyframes toVisibleSkill {\n  to {\n      color: black;\n      font-size: 1.0em;\n      padding: 5;\n      border: 1px solid black;\n      border-radius: 5px;\n      margin: 2px;\n  }\n}\n\n.setting-to-s {\n  animation-duration: 500ms;\n  animation-name: toSelectedSetting;\n  animation-fill-mode: forwards;    \n}\n\n.setting-to-h {\n  animation-duration: 500ms;\n  animation-name: toHighlightedSetting;\n  animation-fill-mode: forwards;    \n}\n\n.setting-to-v {\n  animation-duration: 500ms;\n  animation-name: toVisibleSetting;\n  animation-fill-mode: forwards;    \n}\n\n.setting-to-i {\n  animation-duration: 500ms;\n  animation-name: toInvisibleSetting;\n  animation-fill-mode: forwards;    \n}\n\n@keyframes toHighlightedSetting {\n  to {\n      padding: 10;\n      opacity: 1.0\n  }\n}\n\n\n@keyframes toSelectedSetting {\n  to {\n      padding: 10;\n      opacity: 1.0\n  }\n}\n\n@keyframes toInvisibleSetting {\n  to {\n      padding: 10;\n      opacity: 0.2\n  }\n}\n\n@keyframes toVisibleSetting {\n  to {\n      padding: 10;\n      opacity: 1.0\n  }\n}\n";
var Transitions = (function () {
  return /*#__PURE__*/React.createElement("style", {
    dangerouslySetInnerHTML: {
      __html: transitions
    }
  });
});

var SkillLogos = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(SkillLogos, _React$Component);

  function SkillLogos(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.clickSelect = _this.props.clickSelect.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = SkillLogos.prototype;

  _proto.render = function render() {
    var _this2 = this;

    var len = 40;
    var that = this;

    var toLogo = function toLogo(skillId, clickSelect) {
      var png = that.props.logoPrefix + "/logos/skills/" + skillId + ".png";
      return /*#__PURE__*/React.createElement("div", {
        key: skillId,
        style: {
          padding: 2
        }
      }, /*#__PURE__*/React.createElement("img", {
        height: len,
        width: len,
        src: png,
        alt: skillId,
        onClick: function onClick() {
          return clickSelect(selectedTypes.Skill, skillId);
        }
      }));
    };

    var dontShowComponent = isMobile(this.props.cvWidth);
    var tooltipStyle = {
      display: this.props.show ? 'flex' : 'none',
      flexWrap: "wrap",
      position: "absolute",
      padding: 10,
      backgroundColor: "white",
      border: "1px solid black",
      borderRadius: 10,
      maxWidth: 500,
      opacity: 1.0
    };
    return dontShowComponent ? /*#__PURE__*/React.createElement("div", null) : /*#__PURE__*/React.createElement("div", {
      style: tooltipStyle
    }, this.props.skillIds.map(function (s) {
      return toLogo(s, _this2.clickSelect);
    }));
  };

  return SkillLogos;
}(React.Component);

var SkillType = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(SkillType, _React$Component);

  function SkillType(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.clickSelect = _this.props.clickSelect.bind(_assertThisInitialized(_this));
    _this.isSelected = _this.props.isSelected.bind(_assertThisInitialized(_this));
    _this.state = {
      hover: false
    };
    return _this;
  }

  var _proto = SkillType.prototype;

  _proto.handleMouseIn = function handleMouseIn() {
    this.setState({
      hover: true
    });
  };

  _proto.handleMouseOut = function handleMouseOut() {
    this.setState({
      hover: false
    });
  };

  _proto.render = function render() {
    var _this2 = this;

    var selected = this.isSelected(selectedTypes.SkillType, this.props.skill.name);
    var skillClass = getSkillClass(selected);
    var basicStyle = {
      display: "inline-block",
      padding: 3
    };
    return /*#__PURE__*/React.createElement("div", {
      className: skillClass,
      style: basicStyle,
      onMouseOver: this.handleMouseIn.bind(this),
      onMouseOut: this.handleMouseOut.bind(this)
    }, /*#__PURE__*/React.createElement("span", {
      onClick: function onClick() {
        return _this2.clickSelect(selectedTypes.SkillType, _this2.props.skill.name);
      }
    }, this.props.skill.name), /*#__PURE__*/React.createElement(SkillLogos, {
      skillIds: this.props.skill.keywords,
      show: this.state.hover,
      clickSelect: this.clickSelect,
      cvWidth: this.props.cvWidth,
      logoPrefix: this.props.logoPrefix
    }));
  };

  return SkillType;
}(React.Component);

var Setting = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Setting, _React$Component);

  function Setting(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.clickSelect = _this.props.clickSelect.bind(_assertThisInitialized(_this));
    _this.isSelected = _this.props.isSelected.bind(_assertThisInitialized(_this));
    _this.state = {
      hover: false
    };
    return _this;
  }

  var _proto = Setting.prototype;

  _proto.handleMouseIn = function handleMouseIn() {
    this.setState({
      hover: true
    });
  };

  _proto.handleMouseOut = function handleMouseOut() {
    this.setState({
      hover: false
    });
  };

  _proto.render = function render() {
    var _this2 = this;

    var company = this.props.work.company;
    var selected$1 = this.isSelected(selectedTypes.Setting, company);
    var basicStyle = {
      display: "inline-block",
      padding: 3
    };
    var settingClass = getSettingClass(selected$1);

    if (this.state.hover) {
      settingClass = getSettingClass(selected.HighlightedAndSelected);
    }

    var slug = company.replace(" ", "");
    var png = this.props.logoPrefix + "/logos/settings/" + slug + ".png";
    var imgStyle = {
      width: 160
    };
    return /*#__PURE__*/React.createElement("div", {
      className: settingClass,
      onMouseOver: this.handleMouseIn.bind(this),
      onMouseOut: this.handleMouseOut.bind(this),
      style: basicStyle
    }, /*#__PURE__*/React.createElement("img", {
      src: png,
      alt: company,
      style: imgStyle,
      onClick: function onClick() {
        return _this2.clickSelect(selectedTypes.Setting, company);
      }
    }), /*#__PURE__*/React.createElement(SkillLogos, {
      skillIds: this.props.work.skills,
      show: this.state.hover,
      clickSelect: this.clickSelect,
      cvWidth: this.props.cvWidth,
      logoPrefix: this.props.logoPrefix
    }));
  };

  return Setting;
}(React.Component);

var Skill = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Skill, _React$Component);

  function Skill(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.clickSelect = _this.props.clickSelect.bind(_assertThisInitialized(_this));
    _this.isSelected = _this.props.isSelected.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = Skill.prototype;

  _proto.render = function render() {
    var _this2 = this;

    var selected = this.isSelected(selectedTypes.Skill, this.props.skillId);
    var skillName = this.props.skillsObj.skills[this.props.skillId].name;
    var basicStyle = {
      display: "inline-block",
      padding: 3
    };
    var skillClass = getSkillClass(selected);
    return /*#__PURE__*/React.createElement("div", {
      className: skillClass,
      style: basicStyle,
      onClick: function onClick() {
        return _this2.clickSelect(selectedTypes.Skill, _this2.props.skillId);
      }
    }, /*#__PURE__*/React.createElement("span", null, skillName));
  };

  return Skill;
}(React.Component);

var SkillTypes = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(SkillTypes, _React$Component);

  function SkillTypes(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.clickSelect = _this.props.clickSelect.bind(_assertThisInitialized(_this));
    _this.isSelected = _this.props.isSelected.bind(_assertThisInitialized(_this));
    _this.getSelectedText = _this.props.getSelectedText.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = SkillTypes.prototype;

  _proto.render = function render() {
    var _this2 = this;

    var allSkills = Object.keys(this.props.skillsObj.skills);

    var leftSide = function leftSide(isMob) {
      return isMob ? /*#__PURE__*/React.createElement("h4", null, "Skills") : /*#__PURE__*/React.createElement(Icons.Tools, {
        size: iconSize
      });
    };

    var skillsPadding = {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
      margin: 10,
      border: "2px solid black",
      padding: 10,
      borderRadius: 10
    };
    var logoPrefix = this.props.logoPrefix || "";

    var childFactory = function childFactory(childStyle) {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", null, _this2.getSelectedText()), /*#__PURE__*/React.createElement("div", {
        style: skillsPadding
      }, _this2.props.work.map(function (x) {
        return /*#__PURE__*/React.createElement(Setting, {
          key: x.company,
          work: x,
          skillsObj: _this2.props.skillsObj,
          cvWidth: _this2.props.cvWidth,
          clickSelect: _this2.props.clickSelect,
          isSelected: _this2.props.isSelected,
          logoPrefix: logoPrefix
        });
      })), /*#__PURE__*/React.createElement("div", {
        style: skillsPadding
      }, _this2.props.skills.map(function (x) {
        return /*#__PURE__*/React.createElement(SkillType, {
          key: x.name,
          skill: x,
          skillsObj: _this2.props.skillsObj,
          cvWidth: _this2.props.cvWidth,
          clickSelect: _this2.props.clickSelect,
          isSelected: _this2.props.isSelected,
          logoPrefix: logoPrefix
        });
      })), /*#__PURE__*/React.createElement("div", {
        style: skillsPadding
      }, allSkills.map(function (x) {
        return /*#__PURE__*/React.createElement(Skill, {
          key: x,
          skillId: x,
          skillsObj: _this2.props.skillsObj,
          cvWidth: _this2.props.cvWidth,
          clickSelect: _this2.props.clickSelect,
          isSelected: _this2.props.isSelected
        });
      })));
    };

    return /*#__PURE__*/React.createElement(LeftRight, {
      isLeft: false,
      leftSide: leftSide,
      childFactory: childFactory,
      cvWidth: this.props.cvWidth
    });
  };

  return SkillTypes;
}(React.Component);

var WorkAndSkills = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(WorkAndSkills, _React$Component);

  function WorkAndSkills(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.state = {
      selectedType: "",
      selectedValue: ""
    };
    _this.clickSelect = _this.clickSelect.bind(_assertThisInitialized(_this));
    _this.isSelected = _this.isSelected.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = WorkAndSkills.prototype;

  _proto.clickSelect = function clickSelect(type, value) {
    this.setState({
      selectedType: type,
      selectedValue: value
    });
  };

  _proto.isSelected = function isSelected(type, value) {
    return isSelectedFunc(this.state.selectedType, this.state.selectedValue, type, value, this.props.skillsObj);
  };

  _proto.render = function render() {
    var that = this;

    var getSelectedInfo = function getSelectedInfo() {
      var headingType = "";
      var type = that.state.selectedType;
      var name = "todo";
      var description = "todo";

      switch (type) {
        case selectedTypes.Skill:
          headingType = "Skill";
          var skill = that.props.skillsObj.skills[that.state.selectedValue];
          name = skill.name;
          description = skill.description;
          break;

        case selectedTypes.Setting:
          var setting = Object.values(that.props.skillsObj.settings).filter(function (s) {
            return s.name === that.state.selectedValue;
          })[0];
          description = setting.description;
          headingType = "Work place";
          name = that.state.selectedValue;
          break;

        case selectedTypes.SkillType:
          var skillType = Object.values(that.props.skillsObj.skillTypes).filter(function (s) {
            return s.name === that.state.selectedValue;
          })[0];
          description = skillType.description;
          headingType = "Skill type";
          name = that.state.selectedValue;
          break;

        default:
          console.log("Bad data? " + type);
      }

      var pStyle = {
        marginTop: 5,
        marginBottom: 5
      };
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
        style: pStyle
      }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, headingType)), ": " + name), /*#__PURE__*/React.createElement("p", {
        style: pStyle
      }, description));
    };

    var getSelectedText = function getSelectedText() {
      var isInstructions = that.state.selectedValue === "";
      var text = isInstructions ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("i", null, /*#__PURE__*/React.createElement("b", null, /*#__PURE__*/React.createElement("p", null, "Click on a workplace, skill type or skill to start.")))) : /*#__PURE__*/React.createElement("div", null, getSelectedInfo());
      return /*#__PURE__*/React.createElement("div", {
        style: {
          padding: 10,
          marginLeft: 20
        }
      }, text);
    };

    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SkillTypes, {
      getSelectedText: getSelectedText,
      work: this.props.work,
      skills: this.props.skills,
      skillsObj: this.props.skillsObj,
      clickSelect: this.clickSelect,
      isSelected: this.isSelected,
      cvWidth: this.props.cvWidth,
      logoPrefix: this.props.logoPrefix
    }), /*#__PURE__*/React.createElement(Experience, {
      work: this.props.work,
      cvWidth: this.props.cvWidth
    }));
  };

  return WorkAndSkills;
}(React.Component);

var WorkAndSkillsPrint = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(WorkAndSkillsPrint, _React$Component);

  function WorkAndSkillsPrint() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = WorkAndSkillsPrint.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Skills, {
      skills: this.props.skills,
      skillsObj: this.props.skillsObj,
      cvWidth: this.props.cvWidth
    }));
  };

  return WorkAndSkillsPrint;
}(React.Component);

var Skills = /*#__PURE__*/function (_React$Component2) {
  _inheritsLoose(Skills, _React$Component2);

  function Skills() {
    return _React$Component2.apply(this, arguments) || this;
  }

  var _proto2 = Skills.prototype;

  _proto2.render = function render() {
    var that = this;

    var leftSide = function leftSide(isMob) {
      return isMob ? /*#__PURE__*/React.createElement("h4", null, "Skills") : /*#__PURE__*/React.createElement(Icons.Tools, {
        size: iconSize
      });
    };

    var childFactory = function childFactory(childStyle) {
      return /*#__PURE__*/React.createElement("div", {
        style: {
          margin: 10
        }
      }, that.props.skills.map(function (x) {
        return /*#__PURE__*/React.createElement("div", {
          style: Object.assign({}, childStyle, {
            margin: 5,
            paddingLeft: 10
          })
        }, /*#__PURE__*/React.createElement(Skill$1, {
          key: x.name,
          skill: x,
          skillsObj: that.props.skillsObj
        }));
      }));
    };

    return /*#__PURE__*/React.createElement(LeftRight, {
      isLeft: false,
      leftSide: leftSide,
      childFactory: childFactory,
      cvWidth: this.props.cvWidth
    });
  };

  return Skills;
}(React.Component);

var Skill$1 = /*#__PURE__*/function (_React$Component3) {
  _inheritsLoose(Skill, _React$Component3);

  function Skill() {
    return _React$Component3.apply(this, arguments) || this;
  }

  var _proto3 = Skill.prototype;

  _proto3.render = function render() {
    var _this = this;

    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("b", null, this.props.skill.name), " - ", this.props.skill.keywords.map(function (x, i) {
      return /*#__PURE__*/React.createElement(Keyword, {
        key: x,
        keywordId: x,
        skillsObj: _this.props.skillsObj,
        isFinal: i === _this.props.skill.keywords.length - 1
      });
    })));
  };

  return Skill;
}(React.Component);

var Keyword = /*#__PURE__*/function (_React$Component4) {
  _inheritsLoose(Keyword, _React$Component4);

  function Keyword() {
    return _React$Component4.apply(this, arguments) || this;
  }

  var _proto4 = Keyword.prototype;

  _proto4.render = function render() {
    var keyWordName = this.props.skillsObj.skills[this.props.keywordId].name;
    var commaOrBlank = this.props.isFinal ? "" : ",";
    return /*#__PURE__*/React.createElement("span", null, keyWordName + commaOrBlank, " ");
  };

  return Keyword;
}(React.Component);

function Volunteer (props) {
  var toVolunteer = function toVolunteer(vol, i, childStyle) {
    var key = vol.organization + i;
    return /*#__PURE__*/React.createElement("div", {
      key: key
    }, /*#__PURE__*/React.createElement("div", {
      style: Object.assign({}, childStyle, {
        padding: 10,
        margin: 10
      })
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, vol.organization))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, df.formatDate(vol.startDate)), " - ", /*#__PURE__*/React.createElement("span", null, df.formatDate(vol.endDate)))), /*#__PURE__*/React.createElement("p", null, vol.summary)));
  };

  var leftSide = function leftSide(isMob) {
    return isMob ? /*#__PURE__*/React.createElement("h4", null, "Volunteering") : /*#__PURE__*/React.createElement(Icons.TeamWork, {
      size: iconSize
    });
  };

  var childFactory = function childFactory(childStyle) {
    return /*#__PURE__*/React.createElement("div", null, props.volunteer.map(function (x, i) {
      return toVolunteer(x, i, childStyle);
    }));
  };

  return /*#__PURE__*/React.createElement(LeftRight, {
    isLeft: true,
    leftSide: leftSide,
    childFactory: childFactory,
    cvWidth: props.cvWidth
  });
}

function Education$1 (props) {
  var toEducation = function toEducation(edu, i, childStyle) {
    var key = edu.institution + i;
    var fStart = df.formatDate(edu.startDate);
    var fEnd = df.formatDate(edu.endDate);
    var eduBottomStyle = {
      maxWidth: "50%",
      padding: 10
    };
    var containerStyle = Object.assign({}, childStyle, {
      padding: 10,
      margin: 10
    });
    return /*#__PURE__*/React.createElement("div", {
      key: key
    }, /*#__PURE__*/React.createElement("div", {
      style: containerStyle
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, edu.institution))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, fStart), " - ", /*#__PURE__*/React.createElement("span", null, fEnd))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-evenly"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: eduBottomStyle
    }, edu.studyType), /*#__PURE__*/React.createElement("span", {
      style: eduBottomStyle
    }, /*#__PURE__*/React.createElement("b", null, edu.gpa)))));
  };

  var getEducation = function getEducation(childStyle) {
    return /*#__PURE__*/React.createElement("div", null, props.education.map(function (x, i) {
      return toEducation(x, i, childStyle);
    }));
  };

  var leftFunc = function leftFunc(isMob) {
    return isMob ? /*#__PURE__*/React.createElement("h4", null, "Education") : /*#__PURE__*/React.createElement(Icons.Education, {
      size: iconSize
    });
  };

  return /*#__PURE__*/React.createElement(LeftRight, {
    isLeft: false,
    leftSide: leftFunc,
    childFactory: getEducation,
    cvWidth: props.cvWidth
  });
}

function Awards (props) {
  var toAward = function toAward(award, i) {
    var key = award + i;
    return /*#__PURE__*/React.createElement("p", {
      key: key
    }, i);
  };

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "Awards"), props.awards.map(function (x, i) {
    return toAward(x, i);
  }));
}

var Default = /*#__PURE__*/function (_Component) {
  _inheritsLoose(Default, _Component);

  function Default() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = Default.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/React.createElement("div", null, this.props.jsonResume.basics && /*#__PURE__*/React.createElement(Name, {
      basics: this.props.jsonResume.basics,
      print: this.props.print,
      cvWidth: this.props.cvWidth
    }), this.props.jsonResume.basics && this.props.jsonResume.basics.summary && /*#__PURE__*/React.createElement(Profile, {
      basics: this.props.jsonResume.basics,
      cvWidth: this.props.cvWidth,
      cvType: this.props.cvType
    }), this.props.jsonResume.work.length > 0 && this.props.print && /*#__PURE__*/React.createElement(WorkAndSkillsPrint, {
      work: this.props.jsonResume.work,
      skills: this.props.jsonResume.skills,
      skillsObj: this.props.skills,
      cvWidth: this.props.cvWidth
    }), this.props.jsonResume.work.length > 0 && this.props.print && /*#__PURE__*/React.createElement(Experience, {
      work: this.props.jsonResume.work,
      clickSelect: function clickSelect(t, v) {
        return null;
      },
      isSelected: function isSelected(t, v) {
        return null;
      },
      selected: "",
      cvWidth: this.props.cvWidth
    }), this.props.jsonResume.work.length > 0 && !this.props.print && /*#__PURE__*/React.createElement(WorkAndSkills, {
      work: this.props.jsonResume.work,
      skills: this.props.jsonResume.skills,
      skillsObj: this.props.skills,
      cvWidth: this.props.cvWidth,
      logoPrefix: this.props.logoPrefix
    }), this.props.jsonResume.education.length > 0 && /*#__PURE__*/React.createElement(Education$1, {
      education: this.props.jsonResume.education,
      cvWidth: this.props.cvWidth
    }), this.props.jsonResume.awards.length > 0 && /*#__PURE__*/React.createElement(Awards, {
      awards: this.props.jsonResume.awards,
      cvWidth: this.props.cvWidth
    }), this.props.jsonResume.volunteer.length > 0 && !this.props.print && /*#__PURE__*/React.createElement(Volunteer, {
      volunteer: this.props.jsonResume.volunteer,
      cvWidth: this.props.cvWidth
    }));
  };

  return Default;
}(Component);

Default.propTypes = {
  jsonResume: resumeType.isRequired,
  skills: propTypes.object,
  cvWidth: propTypes.number,
  print: propTypes.bool
};

function CVStateless (props) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      margin: 15
    }
  }, /*#__PURE__*/React.createElement(Transitions, null), /*#__PURE__*/React.createElement(Default, {
    jsonResume: props.jsonResume,
    skills: props.skills,
    print: props.print,
    cvWidth: props.cvWidth,
    cvType: props.cvType,
    logoPrefix: props.logoPrefix
  }));
}

var CV = /*#__PURE__*/function (_Component) {
  _inheritsLoose(CV, _Component);

  function CV(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    var print = props.print;
    _this.state = {
      cvWidth: 100,
      print: print
    };
    _this.handleResize = _this.handleResize.bind(_assertThisInitialized(_this));
    _this.getCVWidth = _this.getCVWidth.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = CV.prototype;

  _proto.getCVWidth = function getCVWidth() {
    var maxWidth = 1200;
    var width = document.getElementById(this.props.divId).offsetWidth;
    return width > maxWidth ? maxWidth : width;
  };

  _proto.componentDidMount = function componentDidMount() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  };

  _proto.componentWillMount = function componentWillMount() {
    if (typeof window !== "undefined") {
      var query = window.matchMedia('print');

      var queryListener = function (m) {
        this.setState(Object.assign({}, this.state, {
          print: m.matches,
          cvWidth: 600
        }));
      }.bind(this);

      query.addListener(queryListener);
    }
  };

  _proto.handleResize = function handleResize() {
    this.setState(Object.assign({}, this.state, {
      cvWidth: this.getCVWidth()
    }));
  };

  _proto.render = function render() {
    return /*#__PURE__*/React.createElement(CVStateless, {
      jsonResume: this.props.jsonResume,
      skills: this.props.skills,
      print: this.state.print,
      cvWidth: this.state.cvWidth,
      cvType: this.props.cvType,
      logoPrefix: this.props.logoPrefix
    });
  };

  return CV;
}(Component);

CV.propTypes = {
  jsonResume: resumeType.isRequired,
  divId: propTypes.string,
  theme: propTypes.string,
  skills: propTypes.object,
  print: propTypes.bool
};

export { CV };
//# sourceMappingURL=index.modern.js.map
