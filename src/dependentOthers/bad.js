/**
 * 悪い例
 * 不用意なthisへの依存
 */

const mixin = {
  funcA: function() {
    // mixin先のthisの情報に依存している
    return this.propertyA + this.propertyB;
  }
}

/*
* 以下のようにすればtestできなくはないが…
* 辛いのはいうまでもない
*/ 
mixin.funcA.call({
  propertyA: 20,
  propertyB: 10
})