const globalObject = {
  createObject: function(value) {
    return {
      propertyA: value
    }
  }
};

/**
 * 微妙
 */
const _object = Object.createObject('abc');

// 高階関数版
const createFunction = function(dependedObject) {
  return function(obj) {
    dependedObject.propertyA = obj.value;
    return dependedObject;
  }
}
const betterFunction = createFunction(_object);

// もちろんclassでも良い
class TempClass {
  constructor(dependedObject) {
    this.dependedObject = dependedObject;
  }
  // 略
}

/**
 * コラム: 高階関数と継承どっちが良い?
 * 
 * js界隈で推奨されているのは高階関数
 * Reactがhigher order componentというスタイルを推奨しているのが大きいと思われる
 * 
 * ファイルごとに数行増やすだけで、プロパティやメソッドが増やせるのが
 * viewごとに微妙に差分をつけたいjsに合っているのでは? と筆者は雑に思っている
 * 継承と異なり単なるfunctionなので自由度が非常に高いのもメリットだろう
 * 
 * いつかesaにでもまとめる
 */


/** 
 * ノリは下みたいな感じ 
*/

// とりあえずrequireできるようにする
module.exports = createFunction;

// moduleA.js
const createFunction = require('./createFunction');
const specilizedFunctionA = createFunction({
                                // 適当なオブジェクト
                            })

// moduleB.js
const createFunction = require('./createFunction');
const specilizedFunctionB = createFunction({
                                // 適当なオブジェクト
                            })