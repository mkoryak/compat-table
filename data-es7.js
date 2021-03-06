// exports browsers and tests
// new browsers should only be added once they have at least a single 'true' result.
exports.name = 'ES7';
exports.target_file = 'es7/index.html';
exports.skeleton_file = 'es7/skeleton.html';

var flag = "flagged";
/* jshint unused:false */
var very = "very";
var strict = "strict";
var fallthrough = "needs-polyfill-or-native";

var typescript = {
    corejs: {
        val: true,
        note_id: "typescript-core-js",
        note_html: "This feature is supported when using TypeScript with <a href='https://github.com/zloirock/core-js'>core-js</a>, or when a native ES6 host is used."
    },
    fallthrough: {
        val: fallthrough,
        note_id: "typescript-es6",
        note_html: "TypeScript's compiler will accept code using this feature if the <code>--target ES6</code> flag is set, but passes it through unmodified and does not supply a runtime polyfill."
    }
};

exports.browsers = {
  tr: {
    full: 'Traceur',
    short: 'Traceur',
    platformtype: 'compiler',
  },
  babel: {
    full: 'Babel 5.8 + core-js 2.0',
    short: 'Babel +<br><nobr>core-js</nobr>',
    platformtype: 'compiler',
    note_id: 'experimental-flag',
    note_html: 'Have to be enabled via --stage 0 flag'
  },
  jsx: {
    full: 'JSX',
    short: 'JSX',
    obsolete: false,
    platformtype: 'compiler',
  },
  typescript: {
    full: 'TypeScript 1.7 + core-js 2.0',
    short: 'Type-<br />Script +<br /><nobr>core-js</nobr>',
    obsolete: false,
    platformtype: 'compiler'
  },
  es7shim: {
    full: 'es7-shim',
    short: 'es7-shim',
    platformtype: 'compiler',
  },
  ie11: {
    full: 'Internet Explorer',
    family: 'Chakra',
    short: 'IE 10-11',
    obsolete: false // no EOL any time soon
  },
  edge12: {
    full: 'Microsoft Edge',
    family: 'Chakra',
    short: 'Edge 12',
    note_id: 'edge-experimental-flag',
    note_html: 'Flagged features have to be enabled via "Enable experimental Javascript features" setting under about:flags'
  },
  edge13: {
    full: 'Microsoft Edge',
    family: 'Chakra',
    short: 'Edge 13',
    note_id: 'edge-experimental-flag',
    note_html: 'Flagged features have to be enabled via "Enable experimental Javascript features" setting under about:flags'
  },
  firefox31: {
    full: 'Firefox',
    short: 'FF 31',
    obsolete: true,
  },
  firefox32: {
    full: 'Firefox',
    short: 'FF 32',
    obsolete: true,
  },
  firefox34: {
    full: 'Firefox',
    short: 'FF34',
    obsolete: true,
  },
  firefox35: {
    full: 'Firefox',
    short: 'FF 35',
    obsolete: true,
  },
  firefox39: {
    full: 'Firefox',
    short: 'FF 39',
    obsolete: true,
  },
  firefox41: {
    full: 'Firefox',
    short: 'FF 41',
    obsolete: true,
  },
  firefox42: {
    full: 'Firefox',
    short: 'FF 42',
  },
  firefox43: {
    full: 'Firefox',
    short: 'FF 43',
  },
  firefox44: {
    full: 'Firefox',
    short: 'FF 44',
    unstable: true,
  },
  chrome30: {
    full: 'Chrome',
    short: 'CH 30',
    obsolete: true,
    note_id: 'experimental-flag',
    note_html: 'Have to be enabled via "Experimental Javascript features" flag'
  },
  chrome33: {
    full: 'Chrome',
    short: 'CH 33',
    obsolete: true,
    note_id: 'experimental-flag',
    note_html: 'Have to be enabled via "Experimental Javascript features" flag'
  },
  chrome34: {
    full: 'Chrome',
    short: 'CH 34',
    obsolete: true,
    note_id: 'experimental-flag',
    note_html: 'Have to be enabled via "Experimental Javascript features" flag'
  },
  chrome35: {
    full: 'Chrome',
    short: 'CH 35',
    obsolete: true,
    note_id: 'experimental-flag',
    note_html: 'Have to be enabled via "Experimental Javascript features" flag'
  },
  chrome37: {
    full: 'Chrome',
    short: 'CH 37',
    obsolete: true,
    note_id: 'experimental-flag',
    note_html: 'Have to be enabled via "Experimental Javascript features" flag'
  },
  chrome38: {
    full: 'Chrome',
    short: 'CH 38',
    obsolete: true,
    note_id: 'experimental-flag',
    note_html: 'Have to be enabled via "Experimental Javascript features" flag'
  },
  chrome39: {
    full: 'Chrome',
    short: 'CH 39',
    obsolete: true,
    note_id: 'experimental-flag',
    note_html: 'Have to be enabled via "Experimental Javascript features" flag'
  },
  chrome40: {
    full: 'Chrome',
    short: 'CH 40',
    obsolete: true,
    note_id: 'experimental-flag',
    note_html: 'Have to be enabled via "Experimental Javascript features" flag'
  },
  chrome41: {
    full: 'Chrome',
    short: 'CH 41',
    obsolete: true,
    note_id: 'experimental-flag',
    note_html: 'Have to be enabled via "Experimental Javascript features" flag'
  },
  chrome42: {
    full: 'Chrome',
    short: 'CH 42',
    obsolete: true,
    note_id: 'experimental-flag',
    note_html: 'Have to be enabled via "Experimental Javascript features" flag'
  },
  chrome43: {
    full: 'Chrome',
    short: 'CH 43',
    obsolete: true,
    note_id: 'experimental-flag',
    note_html: 'Have to be enabled via "Experimental Javascript features" flag'
  },
  chrome46: {
    full: 'Chrome',
    short: 'CH 46',
    obsolete: true,
    note_id: 'experimental-flag',
    note_html: 'Have to be enabled via "Experimental Javascript features" flag'
  },
  chrome47: {
    full: 'Chrome',
    short: 'CH 47',
    note_id: 'experimental-flag',
    note_html: 'Have to be enabled via "Experimental Javascript features" flag'
  },
  webkit: {
    full: 'WebKit r184046',
    short: 'WK',
    unstable: true,
  },
  node: {
    full: 'Node.js',
    family: 'Node.js',
    short: 'Node 0.12',
    platformtype: 'engine',
  },
  iojs: {
    full: 'io.js',
    family: 'Node.js',
    short: 'io.js',
    obsolete: true,
    platformtype: 'engine',
  },
  node4: {
    full: 'Node.js',
    family: 'Node.js',
    short: 'Node 4.0',
    platformtype: 'engine',
  },
  android40: {
    full: 'Android Browser',
    short: 'AN 4.0',
    platformtype: 'mobile',
    obsolete: true,
  },
  android41: {
    full: 'Android Browser',
    short: 'AN 4.1 - 4.3',
    platformtype: 'mobile',
    obsolete: true,
  },
  android44: {
    full: 'Android Browser',
    short: 'Android 4.4',
    platformtype: 'mobile',
    equals: 'chrome30',
    ignore_flagged: true,
  },
  android50: {
    full: 'Android Browser',
    short: 'AN 5.0',
    platformtype: 'mobile',
    equals: 'chrome37',
    ignore_flagged: true,
  },
  android51: {
    full: 'Android Browser',
    short: 'AN 5.1',
    platformtype: 'mobile',
    equals: 'chrome39',
    ignore_flagged: true,
  },
};

exports.tests = [
{
  name: 'exponentiation (**) operator',
  category: 'candidate (stage 3)',
  significance: 'small',
  link: 'https://github.com/rwaldron/exponentiation-operator',
  subtests: [
    {
      name: 'basic support',
      exec: function () {/*
        return 2 ** 3 === 8 && -(5 ** 2) === -25 && (-5) ** 2 === 25;
      */},
      res: {
        tr:          true,
        babel:       true,
        typescript:  true,
        edge13:      flag,
      }
    },
    {
      name: 'assignment',
      exec: function () {/*
        var a = 2; a **= 3; return a === 8;
      */},
      res: {
        tr:          true,
        babel:       true,
        typescript:  true,
        edge13:      flag,
      }
    },
    {
      name: 'early syntax error for unary negation without parens',
      exec: function () {/*
        if (2 ** 3 !== 8) { return false; }
        try {
          Function("-5 ** 2")();
        } catch(e) {
          return true;
        }
      */},
      res: {
      }
    },
  ],
},
{
  name: 'bind (::) operator',
  link: 'https://github.com/zenparsing/es-function-bind',
  category: 'strawman (stage 0)',
  significance: 'medium',
  subtests: [
    {
      name: 'binary form',
      exec: function () {/*
        function foo() { this.garply += "foo"; return this; }
        var obj = { garply: "bar" };
        return typeof obj::foo === "function" && obj::foo().garply === "barfoo";
      */},
      res: {
        babel:       true,
      }
    },
    {
      name: 'unary form',
      exec: function () {/*
        var obj = { garply: "bar", foo: function() { this.garply += "foo"; return this; } };
        return typeof ::obj.foo === "function" && ::obj.foo().garply === "barfoo";
      */},
      res: {
        babel:       true,
      },
    },
  ],
},
{
  name: 'do expression',
  category: 'strawman (stage 0)',
  significance: 'small',
  link: 'http://wiki.ecmascript.org/doku.php?id=strawman:do_expressions',
  exec: function () {/*
    return do {
      let x = 23;
      x + 19;
    } === 42;
  */},
  res: {
    babel:       true,
  }
},
{
  name: 'function.sent',
  category: 'draft (stage 2)',
  significance: 'small',
  link: 'https://github.com/allenwb/ESideas/blob/master/Generator%20metaproperty.md',
  exec: function () {/*
    var result;
    function* generator() {
      result = function.sent;
    }
    var iter = generator();
    iter.next('tromple');
    return result === 'tromple';
  */},
  res: {
  }
},
{
  name: 'Object.values',
  link: 'https://github.com/ljharb/proposal-object-values-entries',
  category: 'candidate (stage 3)',
  significance: 'small',
  exec: function () {/*
    var obj = Object.create({ a: "qux", d: "qux" });
    obj.a = "foo"; obj.b = "bar"; obj.c = "baz";
    var v = Object.values(obj);
    return Array.isArray(v) && String(v) === "foo,bar,baz";
  */},
  res: {
    babel:      true,
    es7shim:    true,
    typescript: typescript.corejs,
  }
},
{
  name: 'Object.entries',
  link: 'https://github.com/ljharb/proposal-object-values-entries',
  category: 'candidate (stage 3)',
  significance: 'small',
  exec: function () {/*
    var obj = Object.create({ a: "qux", d: "qux" });
    obj.a = "foo"; obj.b = "bar"; obj.c = "baz";
    var e = Object.entries(obj);
    return Array.isArray(e)
      && e.length === 3
      && String(e[0]) === "a,foo"
      && String(e[1]) === "b,bar"
      && String(e[2]) === "c,baz";
  */},
  res: {
    babel:      true,
    es7shim:    true,
    typescript: typescript.corejs,
  }
},
{
  name: 'Array.prototype.includes',
  link: 'https://github.com/tc39/Array.prototype.includes',
  category: 'finished (stage 4)',
  significance: 'small',
  subtests: [
    {
      name: 'Array.prototype.includes',
      exec: function(){/*
        return [1, 2, 3].includes(1)
          && ![1, 2, 3].includes(4)
          && ![1, 2, 3].includes(1, 1)
          && [NaN].includes(NaN)
          && Array(1).includes();
      */},
      res: {
        babel:           true,
        es7shim:         true,
        typescript:      typescript.corejs,
        webkit:          true,
        chrome47:        true,
        firefox42:       false,
        firefox43:       true,
      }
    },
    {
      name: '%TypedArray%.prototype.includes',
      exec: function(){/*
        return [Int8Array, Uint8Array, Uint8ClampedArray, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array].every(function(TypedArray){
          return new TypedArray([1, 2, 3]).includes(1)
            && !new TypedArray([1, 2, 3]).includes(4)
            && !new TypedArray([1, 2, 3]).includes(1, 1);
        });
      */},
      res: {
        babel:           true,
        typescript:      typescript.corejs,
        chrome47:        true,
        firefox42:       false,
        firefox43:       true,
      }
    },
  ],
},
{
  name: 'trailing commas in function syntax',
  link: 'https://github.com/tc39/tc39-notes/raw/master/es6/2014-09/trailing_comma_proposal.pdf',
  category: 'candidate (stage 3)',
  significance: 'small',
  subtests: [
    {
      name: 'in parameter lists',
      exec: function(){/*
        return typeof function f( a, b, ){} === 'function';
      */},
      res: {
        babel:       true,
        typescript:  true,
      }
    },
    {
      name: 'in argument lists',
      exec: function(){/*
        return Math.min(1,2,3,) === 1;
      */},
      res: {
        babel:       true,
        typescript:  true,
      }
    },
  ],
},
{
  name: 'async functions',
  category: 'candidate (stage 3)',
  significance: 'large',
  link: 'https://tc39.github.io/ecmascript-asyncawait/',
  subtests: [
    {
      name: 'basic support',
      exec: function () {/*
        return (async function(){
          return 42;
        })() instanceof Promise
      */},
      res: {
        tr:          true,
        babel:       true,
        edge13:      flag,
      }
    },
    {
      name: 'await support',
      exec: function () {/*
        return (async function(){
          return 10 + await Promise.resolve(10);
        })() instanceof Promise
      */},
      res: {
        tr:          true,
        babel:       true,
        edge13:      flag,
      }
    },
    {
      name: 'arrow async functions',
      exec: function () {/*
        return (async () => 42 + await Promise.resolve(42))() instanceof Promise
      */},
      res: {
        tr:          true,
        babel:       true,
        edge13:      flag,
      }
    }
  ]
},
{
  name: 'Object.getOwnPropertyDescriptors',
  link: 'https://gist.github.com/WebReflection/9353781',
  category: 'strawman (stage 0)',
  significance: 'small',
  exec: function () {/*
    var object = {a: 1};
    var B = typeof Symbol === 'function' ? Symbol('b') : 'b';
    object[B] = 2;
    var O = Object.defineProperty(object, 'c', {value: 3});
    var D = Object.getOwnPropertyDescriptors(O);

    return D.a.value === 1 && D.a.enumerable === true && D.a.configurable === true && D.a.writable === true
      && D[B].value === 2 && D[B].enumerable === true && D[B].configurable === true && D[B].writable === true
      && D.c.value === 3 && D.c.enumerable === false && D.c.configurable === false && D.c.writable === false;
  */},
  res: {
    babel:       true,
    es7shim:     true,
    typescript:  typescript.corejs,
  }
},
{
  name: 'ArrayBuffer.transfer',
  link: 'https://gist.github.com/lukewagner/2735af7eea411e18cf20',
  category: 'proposal (stage 1)',
  significance: 'small',
  exec: function(){/*
    return typeof ArrayBuffer.transfer === 'function';
  */},
  res : {
    chrome41:  true,
    edge13:    flag,
  }
},
{
  name: 'SIMD (Single Instruction, Multiple Data)',
  category: 'candidate (stage 3)',
  significance: 'large',
  link: 'https://tc39.github.io/ecmascript_simd/',
  subtests: [
    {
      name: 'basic support',
      exec: function () {/*
        return typeof SIMD !== 'undefined';
      */},
      res: {
        edge12:    flag,
        firefox39: true,
        firefox42: false,
        firefox44: false,
        es7shim:   true,
      }
    },
    {
      name: 'Float32x4',
      exec: function(){/*
        return typeof SIMD.Float32x4 === 'function';
      */},
      res: {
        es7shim: true,
        edge13:  flag,
      }
    },
    {
      name: 'Float64x2',
      exec: function(){/*
        return typeof SIMD.Float64x2 === 'function';
      */},
      res: {
        es7shim: true,
        edge13:  flag,
      }
    },
    {
      name: 'Int32x4',
      exec: function(){/*
        return typeof SIMD.Int32x4 === 'function';
      */},
      res: {
        es7shim: true,
        edge13:  flag,
      }
    },
    {
      name: 'Int16x8',
      exec: function(){/*
        return typeof SIMD.Int16x8 === 'function';
      */},
      res: {
        es7shim: true,
      }
    },
    {
      name: 'Int8x16',
      exec: function(){/*
        return typeof SIMD.Int8x16 === 'function';
      */},
      res: {
        es7shim: true,
        edge13:  flag,
      }
    },
    {
      name: 'Bool32x4',
      exec: function(){/*
        return typeof SIMD.Bool32x4 === 'function';
      */},
      res: {
        es7shim: true,
      }
    },
    {
      name: 'Bool16x8',
      exec: function(){/*
        return typeof SIMD.Bool16x8 === 'function';
      */},
      res: {
        es7shim: true,
      }
    },
    {
      name: 'Bool8x16',
      exec: function(){/*
        return typeof SIMD.Bool8x16 === 'function';
      */},
      res: {
        es7shim: true,
      }
    },
    {
      name: 'SIMD.%type%.abs',
      exec: function(){/*
        return typeof SIMD.Float32x4.abs === 'function';
      */},
      res: {
        es7shim: true,
        edge13:  flag,
      }
    },
    {
      name: 'SIMD.%type%.add',
      exec: function(){/*
        return typeof SIMD.Float32x4.add === 'function';
      */},
      res: {
        es7shim: true,
        edge13:  flag,
      }
    },
    {
      name: 'SIMD.%integerType%.addSaturate',
      exec: function(){/*
        return typeof SIMD.Int16x8.addSaturate === 'function';
      */},
      res: {
        es7shim: true,
      }
    },
    {
      name: 'SIMD.%booleanType%.and',
      exec: function(){/*
        return typeof SIMD.Bool16x8.and === 'function';
      */},
      res: {
        es7shim: true,
      }
    },
    {
      name: 'SIMD.%booleanType%.anyTrue',
      exec: function(){/*
        return typeof SIMD.Bool32x4.anyTrue === 'function';
      */},
      res: {
        es7shim: true,
      }
    },
    {
      name: 'SIMD.%booleanType%.allTrue',
      exec: function(){/*
        return typeof SIMD.Bool32x4.allTrue === 'function';
      */},
      res: {
        es7shim: true,
      }
    },
    {
      name: 'SIMD.%type%.check',
      exec: function(){/*
        return typeof SIMD.Float32x4.check === 'function';
      */},
      res: {
        es7shim: true,
        edge13:  flag,
      }
    },
    {
      name: 'SIMD.%type%.equal',
      exec: function(){/*
        return typeof SIMD.Float32x4.equal === 'function';
      */},
      res: {
        es7shim: true,
        edge13:  flag,
      }
    },
    {
      name: 'SIMD.%type%.extractLane',
      exec: function(){/*
        return typeof SIMD.Float32x4.extractLane === 'function';
      */},
      res: {
        es7shim: true,
        edge13:  flag,
      }
    },
    {
      name: 'SIMD.%type%.greaterThan',
      exec: function(){/*
        return typeof SIMD.Float32x4.greaterThan === 'function';
      */},
      res: {
        es7shim: true,
        edge13:  flag,
      }
    },
    {
      name: 'SIMD.%type%.greaterThanOrEqual',
      exec: function(){/*
        return typeof SIMD.Float32x4.greaterThanOrEqual === 'function';
      */},
      res: {
        es7shim: true,
        edge13:  flag,
      }
    },
    {
      name: 'SIMD.%type%.lessThan',
      exec: function(){/*
        return typeof SIMD.Float32x4.lessThan === 'function';
      */},
      res: {
        es7shim: true,
        edge13:  flag,
      }
    },
    {
      name: 'SIMD.%type%.lessThanOrEqual',
      exec: function(){/*
        return typeof SIMD.Float32x4.lessThanOrEqual === 'function';
      */},
      res: {
        es7shim: true,
        edge13:  flag,
      }
    },
    {
      name: 'SIMD.%type%.mul',
      exec: function(){/*
        return typeof SIMD.Float32x4.mul === 'function';
      */},
      res: {
        es7shim: true,
        edge13:  flag,
      }
    },
    {
      name: 'SIMD.%type%.div',
      exec: function(){/*
        return typeof SIMD.Float32x4.div === 'function';
      */},
      res: {
        es7shim: true,
        edge13:  flag,
      }
    },
    {
      name: 'SIMD.%type%.max',
      exec: function(){/*
        return typeof SIMD.Float32x4.max === 'function';
      */},
      res: {
        es7shim: true,
        edge13:  flag,
      }
    },
    {
      name: 'SIMD.%type%.maxNum',
      exec: function(){/*
        return typeof SIMD.Float32x4.maxNum === 'function';
      */},
      res: {
        es7shim: true,
      }
    },
    {
      name: 'SIMD.%type%.min',
      exec: function(){/*
        return typeof SIMD.Float32x4.min === 'function';
      */},
      res: {
        es7shim: true,
        edge13:  flag,
      }
    },
    {
      name: 'SIMD.%type%.minNum',
      exec: function(){/*
        return typeof SIMD.Float32x4.minNum === 'function';
      */},
      res: {
        es7shim: true,
      }
    },
    {
      name: 'SIMD.%type%.neg',
      exec: function(){/*
        return typeof SIMD.Float32x4.neg === 'function';
      */},
      res: {
        es7shim: true,
        edge13:  flag,
      }
    },
    {
      name: 'SIMD.%booleanType%.not',
      exec: function(){/*
        return typeof SIMD.Bool16x8.not === 'function';
      */},
      res: {
        es7shim: true,
      }
    },
    {
      name: 'SIMD.%type%.notEqual',
      exec: function(){/*
        return typeof SIMD.Float32x4.notEqual === 'function';
      */},
      res: {
        es7shim: true,
        edge13:  flag,
      }
    },
    {
      name: 'SIMD.%type%.reciprocalApproximation',
      exec: function(){/*
        return typeof SIMD.Float32x4.reciprocalApproximation === 'function';
      */},
      res: {
        es7shim: true,
      }
    },
    {
      name: 'SIMD.%type%.reciprocalSqrtApproximation',
      exec: function(){/*
        return typeof SIMD.Float32x4.reciprocalSqrtApproximation === 'function';
      */},
      res: {
        es7shim: true,
      }
    },
    {
      name: 'SIMD.%type%.replaceLane',
      exec: function(){/*
        return typeof SIMD.Float32x4.replaceLane === 'function';
      */},
      res: {
        es7shim: true,
        edge13:  flag,
      }
    },
    {
      name: 'SIMD.%type%.select',
      exec: function(){/*
        return typeof SIMD.Float32x4.select === 'function';
      */},
      res: {
        es7shim: true,
        edge13:  flag,
      }
    },
    {
      name: 'SIMD.%integerType%.selectBits',
      exec: function(){/*
        return typeof SIMD.Int16x8.selectBits === 'function';
      */},
      res: {
        es7shim: true,
      }
    },
    {
      name: 'SIMD.%integerType%.shiftLeftByScalar',
      exec: function(){/*
        return typeof SIMD.Int32x4.shiftLeftByScalar === 'function';
      */},
      res: {
        es7shim: true,
      }
    },
    {
      name: 'SIMD.%integerType%.shiftRightLogicalByScalar',
      exec: function(){/*
        return typeof SIMD.Int32x4.shiftRightLogicalByScalar === 'function';
      */},
      res: {
        es7shim: true,
      }
    },
    {
      name: 'SIMD.%integerType%.shiftRightArithmeticByScalar',
      exec: function(){/*
        return typeof SIMD.Int32x4.shiftRightArithmeticByScalar === 'function';
      */},
      res: {
        es7shim: true,
      }
    },
    {
      name: 'SIMD.%type%.shuffle',
      exec: function(){/*
        return typeof SIMD.Float32x4.shuffle === 'function';
      */},
      res: {
        es7shim: true,
        edge13:  flag,
      }
    },
    {
      name: 'SIMD.%type%.splat',
      exec: function(){/*
        return typeof SIMD.Float32x4.splat === 'function';
      */},
      res: {
        es7shim: true,
        edge13:  flag,
      }
    },
    {
      name: 'SIMD.%type%.sqrt',
      exec: function(){/*
        return typeof SIMD.Float32x4.sqrt === 'function';
      */},
      res: {
        es7shim: true,
        edge13:  flag,
      }
    },
    {
      name: 'SIMD.%type%.store',
      exec: function(){/*
        return typeof SIMD.Float32x4.store === 'function';
      */},
      res: {
        es7shim: true,
        edge13:  flag,
      }
    },
    {
      name: 'SIMD.%type%.store1',
      exec: function(){/*
        return typeof SIMD.Float32x4.store1 === 'function';
      */},
      res: {
        es7shim: true,
        edge13:  flag,
      }
    },
    {
      name: 'SIMD.%type%.store2',
      exec: function(){/*
        return typeof SIMD.Float32x4.store1 === 'function';
      */},
      res: {
        es7shim: true,
        edge13:  flag,
      }
    },
    {
      name: 'SIMD.%type%.store3',
      exec: function(){/*
        return typeof SIMD.Float32x4.store1 === 'function';
      */},
      res: {
        es7shim: true,
        edge13:  flag,
      }
    },
    {
      name: 'SIMD.%type%.sub',
      exec: function(){/*
        return typeof SIMD.Float32x4.sub === 'function';
      */},
      res: {
        es7shim: true,
        edge13:  flag,
      }
    },
    {
      name: 'SIMD.%integerType%.subSaturate',
      exec: function(){/*
        return typeof SIMD.Int16x8.subSaturate === 'function';
      */},
      res: {
        es7shim: true,
      }
    },
    {
      name: 'SIMD.%type%.swizzle',
      exec: function(){/*
        return typeof SIMD.Float32x4.swizzle === 'function';
      */},
      res: {
        es7shim: true,
        edge13:  flag,
      }
    },
    {
      name: 'SIMD.%booleanType%.xor',
      exec: function(){/*
        return typeof SIMD.Bool16x8.xor === 'function';
      */},
      res: {
        es7shim: true,
      }
    }
  ]
},
{
  name: 'class decorators',
  category: 'proposal (stage 1)',
  significance: 'medium',
  link: 'https://github.com/wycats/javascript-decorators',
  exec: function(){/*
    class A {
      @nonconf
      get B() {}
    }
    function nonconf(target, name, descriptor) {
      descriptor.configurable = false;
      return descriptor;
    }
    return Object.getOwnPropertyDescriptor(A.prototype, "B").configurable === false;
  */},
  res: {
    babel:       true,
    typescript:  true,
  }
},
{
  name: 'array comprehensions',
  category: 'pre-strawman',
  significance: 'medium',
  link: 'http://wiki.ecmascript.org/doku.php?id=harmony:array_comprehensions',
  exec: function () {/*
    return [for (a of [1, 2, 3]) a * a] + '' === '1,4,9';
  */},
  res: {
    tr:          true,
    babel:       true,
    firefox31:   true,
  }
},
{
  name: 'generator comprehensions',
  category: 'pre-strawman',
  significance: 'medium',
  link: 'http://wiki.ecmascript.org/doku.php?id=harmony:array_comprehensions',
  exec: function () {/*
    var iterator = (for (a of [1,2]) a + 4);
    var item = iterator.next();
    var passed = item.value === 5 && item.done === false;
    item = iterator.next();
    passed    &= item.value === 6 && item.done === false;
    item = iterator.next();
    passed    &= item.value === undefined && item.done === true;
    return passed;
  */},
  res: {
    tr:          true,
    babel:       true,
    firefox31:   true,
  }
},
{
  name: 'destructuring in comprehensions',
  category: 'pre-strawman',
  significance: 'medium',
  link: 'https://bugzilla.mozilla.org/show_bug.cgi?id=980828',
  exec: function () {/*
    return [for([a, b] of [['a', 'b']])a + b][0] === 'ab';
  */},
  res: {
    tr:          true,
    babel:       true,
  }
},
{
  name: 'class properties',
  category: 'proposal (stage 1)',
  significance: 'medium',
  link: 'https://github.com/jeffmo/es-class-properties',
  exec: function () {/*
    class C {
      x = 'x';
      static y = 'y';
    }
    return new C().x + C.y === 'xy';
  */},
  res: {
    babel:       true,
    tr:          true,
    typescript:  true,
  }
},
{
  name: 'call constructor',
  category: 'proposal (stage 1)',
  significance: 'medium',
  link: 'https://gist.github.com/wycats/952929fab0bc1f000c24',
  exec: function () {/*
    class C {
      constructor(){
        this.x = 'x';
      }
      call constructor(){
        return 'y';
      }
    }
    return new C().x + C() === 'xy';
  */},
  res: {
  }
},
{
  name: 'Map.prototype.toJSON',
  category: 'strawman (stage 0)',
  significance: 'tiny',
  link : 'https://github.com/DavidBruant/Map-Set.prototype.toJSON',
  exec: function(){/*
    var map = new Map();
    map.set('a', 'b');
    map.set('c', 'd');
    return JSON.stringify(map) === '[["a","b"],["c","d"]]';
  */},
  res: {
    babel:       true,
    es7shim:     true,
    typescript:  typescript.corejs,
  }
},
{
  name: 'Reflect.Realm',
  category: 'pre-strawman',
  significance: 'small',
  link: 'https://gist.github.com/dherman/7568885',
  exec: function () {/*
    var i, names =
      ["eval", "global", "intrinsics", "stdlib", "directEval",
      "indirectEval", "initGlobal", "nonEval"];

    if (typeof Reflect !== "object" || typeof Reflect.Realm !== "function"
        || typeof Reflect.Realm.prototype !== "object") {
      return false;
    }
    for (i = 0; i < names.length; i++) {
      if (!(names[i] in Reflect.Realm.prototype)) {
        return false;
      }
    }
    return true;
  */},
  res: {
  }
},
{
  name: 'Set.prototype.toJSON',
  category: 'strawman (stage 0)',
  significance: 'tiny',
  link: 'https://github.com/DavidBruant/Map-Set.prototype.toJSON',
  exec: function(){/*
    var set = new Set();
    [1, 2, 3, 2, 1].forEach(function (i) { set.add(i); });
    return JSON.stringify(set) === '[1,2,3]';
  */},
  res: {
    babel:       true,
    es7shim:     true,
    typescript:  typescript.corejs,
  }
},
{
  name: 'object rest properties',
  significance: 'small',
  link: 'https://github.com/sebmarkbage/ecmascript-rest-spread',
  category: 'draft (stage 2)',
  exec: function () {/*
    var {a, ...rest} = {a: 1, b: 2, c: 3};
    return a === 1 && rest.a === undefined && rest.b === 2 && rest.c === 3;
  */},
  res: {
    babel:       true,
    jsx:         true,
  }
},
{
  name: 'object spread properties',
  category: 'draft (stage 2)',
  significance: 'medium',
  link: 'https://github.com/sebmarkbage/ecmascript-rest-spread',
  exec: function () {/*
    var spread = {b: 2, c: 3};
    var O = {a: 1, ...spread};
    return O.a + O.b + O.c === 6;
  */},
  res: {
    babel:       true,
    jsx:         true,
  }
},
{
  name: 'String.prototype.at',
  significance: 'small',
  link: 'https://github.com/mathiasbynens/String.prototype.at',
  category: 'strawman (stage 0)',
  exec: function () {/*
    return 'a𠮷b'.at(1) === '𠮷';
  */},
  res: {
    babel:       true,
    typescript:  typescript.corejs,
    es7shim:     true,
  }
},
{
  name: 'String padding',
  category: 'candidate (stage 3)',
  significance: 'small',
  link: 'https://github.com/tc39/proposal-string-pad-start-end',
  subtests: [
    {
      name: 'String.prototype.padStart',
      exec: function(){/*
        return 'hello'.padStart(10) === '     hello'
          && 'hello'.padStart(10, '1234') === '12341hello'
          && 'hello'.padStart() === 'hello'
          && 'hello'.padStart(6, '123') === '1hello';
      */},
      res: {
        babel:       true,
        typescript:  typescript.corejs,
        es7shim:     true,
      }
    },
    {
      name: 'String.prototype.padEnd',
      exec: function(){/*
        return 'hello'.padEnd(10) === 'hello     '
          && 'hello'.padEnd(10, '1234') === 'hello12341'
          && 'hello'.padEnd() === 'hello'
          && 'hello'.padEnd(6, '123') === 'hello1';
      */},
      res: {
        babel:       true,
        typescript:  typescript.corejs,
        es7shim:     true,
      }
    }
  ]
},
{
  name: 'RegExp.escape',
  category: 'pre-strawman',
  significance: 'small',
  link: 'https://github.com/benjamingr/RexExp.escape',
  exec: function(){/*
    return RegExp.escape('Hello, \\^$*+?.()|[]{}!') === 'Hello, \\\\\\^\\$\\*\\+\\?\\.\\(\\)\\|\\[\\]\\{\\}!';
  */},
  res: {
    babel:       true,
    es7shim:     true,
    typescript:  typescript.corejs,
  }
},
{
  name: 'String trimming',
  category: 'proposal (stage 1)',
  significance: 'small',
  link: 'https://github.com/sebmarkbage/ecmascript-string-left-right-trim',
  subtests: [
    {
      name: 'String.prototype.trimLeft',
      exec: function(){/*
        return ' \t \n abc   \t\n'.trimLeft() === 'abc   \t\n';
      */},
      res: {
        babel:       true,
        typescript:  typescript.corejs,
        edge12:      true,
        firefox31:   true,
        chrome30:    true,
        node:        true,
        iojs:        true,
        webkit:      true,
        es7shim:     true,
        android40:   true,
      }
    },
    {
      name: 'String.prototype.trimRight',
      exec: function(){/*
        return ' \t \n abc   \t\n'.trimRight() === ' \t \n abc';
      */},
      res: {
        babel:       true,
        typescript:  typescript.corejs,
        edge12:      true,
        firefox31:   true,
        chrome30:    true,
        node:        true,
        iojs:        true,
        webkit:      true,
        es7shim:     true,
        android40:   true,
      }
    },
    {
      name: 'String.prototype.trimStart',
      exec: function(){/*
        return ' \t \n abc   \t\n'.trimStart() === 'abc   \t\n';
      */},
      res: {
        babel:       true,
        typescript:  typescript.corejs,
      }
    },
    {
      name: 'String.prototype.trimEnd',
      exec: function(){/*
        return ' \t \n abc   \t\n'.trimEnd() === ' \t \n abc';
      */},
      res: {
        babel:       true,
        typescript:  typescript.corejs,
      }
    }
  ]
},
{
  name: 'generator functions can\'t be used with "new"',
  category: 'errata',
  significance: 'tiny',
  link: 'https://github.com/rwaldron/tc39-notes/blob/master/es7/2015-07/july-28.md#67-new--generatorfunction',
  exec: function(){/*
    function * generator() {
      yield 3;
    }
    try {
      new generator();
    } catch(e) {
      return true;
    }
  */},
  res: {
      edge13:    true,
      firefox43: true,
  }
},
{
  name: 'strict fn w/ non-strict non-simple params is error',
  category: 'errata',
  significance: 'tiny',
  link: 'https://github.com/rwaldron/tc39-notes/blob/master/es7/2015-07/july-29.md#611-the-scope-of-use-strict-with-respect-to-destructuring-in-parameter-lists',
  exec: function(){/*
    function foo(...a){}
    try {
      Function("function bar(...a){'use strict';}")();
    } catch(e) {
      return true;
    }
  */},
  res: {
    edge12:      true,
    chrome47:    true,
  }
},
{
  name: 'nested rest destructuring',
  category: 'errata',
  significance: 'tiny',
  link: 'https://github.com/rwaldron/tc39-notes/blob/master/es7/2015-07/july-28.md#66-bindingrestelement-should-allow-a-bindingpattern-ala-assignmentrestelement',
  exec: function(){/*
    var [x, ...[y, ...z]] = [1,2,3,4];
    return x === 1 && y === 2 && z + '' === '3,4';
  */},
  res: {
    babel:       true,
    edge13:      flag,
    typescript:  true,
  }
},
{
  name: 'System.global',
  category: 'proposal (stage 1)',
  significance: 'small',
  link: 'https://github.com/tc39/proposal-global',
  exec: function(){/*
    Function('return this')().__system_global_test__ = 42;
    return System.global.__system_global_test__ === 42;
  */},
  res: {
    babel:       true,
    typescript:  typescript.corejs,
  }
},
{
  name: 'Error.isError',
  category: 'strawman (stage 0)',
  significance: 'tiny',
  link: 'https://github.com/ljharb/proposal-is-error',
  exec: function(){/*
    return Error.isError(new TypeError()) && !Error.isError(Object.create(TypeError.prototype));
  */},
  res: {
    babel:       true,
    typescript:  typescript.corejs,
  }
},
{
  name: 'Math methods for 64-bit integers',
  category: 'strawman (stage 0)',
  significance: 'tiny',
  link: 'https://gist.github.com/BrendanEich/4294d5c212a6d2254703',
  subtests: [
    {
      name: 'Math.iaddh',
      exec: function(){/*
        return Math.iaddh(0xffffffff, 1, 1, 1) === 3;
      */},
      res: {
        babel:       true,
        typescript:  typescript.corejs,
      }
    },
    {
      name: 'Math.isubh',
      exec: function(){/*
        return Math.isubh(0, 4, 1, 1) === 2;
      */},
      res: {
        babel:       true,
        typescript:  typescript.corejs,
      }
    },
    {
      name: 'Math.imulh',
      exec: function(){/*
        return Math.imulh(0xffffffff, 7) === -1;
      */},
      res: {
        babel:       true,
        typescript:  typescript.corejs,
      }
    },
    {
      name: 'Math.umulh',
      exec: function(){/*
        return Math.umulh(0xffffffff, 7) === 6;
      */},
      res: {
        babel:       true,
        typescript:  typescript.corejs,
      }
    },
  ]
},
{
  name: 'Observable',
  category: 'proposal (stage 1)',
  significance: 'small',
  link: 'https://github.com/zenparsing/es-observable',
  'subtests': [
    {
      name: 'basic support',
      exec: function () {/*
        return typeof Observable !== 'undefined';
      */},
      res: {

      }
    },
    {
      name: 'Symbol.observable well known symbol',
      exec: function () {/*
        return typeof Symbol.observable === 'symbol';
      */},
      res: {

      }
    },
    {
      name: 'Observable.prototype.subscribe',
      exec: function () {/*
        return 'subscribe' in Observable.prototype;
      */},
      res: {

      }
    },
    {
      name: 'Observable constructor behavior',
      exec: function () {/*
        var nonCallableCheckPassed,
            primitiveCheckPassed,
            newCheckPassed;

        try { new Observable({ }) } catch(e) { nonCallablePassed = true }
        try { new Observable(false) } catch(e) { primitiveCheckPassed = true }
        try { Observable(function() { }) } catch(e) { newCheckPassed = true }

        return nonCallableCheckPassed && primitiveCheckPassed && newCheckPassed;
      */},
      res: {

      }
    },
    {
      name: 'Observable.prototype.forEach',
      exec: function () {/*        
        var o = new Observable(function() { });
        return 'forEach' in Observable.prototype && o.forEach(function(e){return true}) instanceof Promise;
      */},
      res: {

      }
    },
    {
      name: 'Observable.prototype[Symbol.observable]',
      exec: function () {/*
        var o = new Observable(function() { });
        return Symbol.observable in Observable.prototype && o[Symbol.observable] === o;
      */},
      res: {

      }
    },
    {
      name: 'Observable.of',
      exec: function () {/*
        return Observable.of(1, 2, 3) instanceof Observable;
      */},
      res: {

      }
    },
    {
      name: 'Observable.from',
      exec: function () {/*
        return (Observable.from([1,2,3,4]) instanceof Observable) && (Observable.from(new Set([1, 2, 3])) instanceof Observable);
      */},
      res: {

      }
    }
  ]
}
];

//Shift annex B features to the bottom
exports.tests = exports.tests.reduce(function(a,e) {
  var index = ['finished (stage 4)', 'candidate (stage 3)', 'draft (stage 2)', 'proposal (stage 1)', 'strawman (stage 0)', 'pre-strawman', 'errata'].indexOf(e.category);
  if (index === -1) {
    console.log('"' + a.category + '" is not an ES7 category!');
  }
  (a[index] = a[index] || []).push(e);
  return a;
},[]).reduce(function(a,e) {
  return a.concat(e);
},[]);
