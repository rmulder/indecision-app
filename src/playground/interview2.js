var _ = require('underscore');

/*
Two strings are isomorphic if the characters in string x can be replaced to get string y.

For example, egg and add are isomorphic but foo and bar are not. 'polo' is not isomorphic with 'loop';

Given a list of strings, return a list of lists where each sublist is an isomorphic group. E.g.:

["mark", "bark", "lark", "marr", "blue", "abc", "def", "foo"] =>
[["mark", "bark", "lark", "blue"], ["marr"], ["abc", "def"], ["foo"]]
*/

const inputArr = ["mark", "bark", "lark", "marr", "blue", "abc", "def", "foo"];
const outputArr = [];
const inputMap = {};
_.forEach(inputArr, (val) => {
  let len = val.length;
  if (!inputMap[len]) {
    inputMap[len] = [];
  }

  inputMap[len].push(val);
});

let keyMap = {};
_.forEach(inputMap, (val2, key) => {
  //console.log(val2);
  keyMap[key] = {};
  _.forEach(val2, (val3) => {
    if (!keyMap[key][val3]) {
      keyMap[key][val3] = {};
      for (let i = 0; i < val3.length; i++) {
        keyMap[key][val3][val3[i]] = '';
      }
    }
  });
});

// egg
// add
// e -> a
// g -> d

// abc
// foo
// a->f
// b -> o
// c -!> o