const globalObject = {
  createObject: function(value) {
    return {
      propertyA: value
    }
  }
};

/**
 * 良くない例
 */
const _object = Object.createObject('abc');

const sideEffectFunction = function(obj) {
  _object.propertyA = obj.value;
  return _object;
}

/** 何が良くない? */

/** 
 * 1.テストコードの効果が薄い
 *  グローバル変数やに結果が依存してしまうため、実際に実行環境と大きく差ができてしまう
 * 
 * 2. テストの度に初期化が必要になる
 * 　テストのフレームワークによるが、テストごとにグローバル変数を初期化してやる必要が出てくる
 *   (少なくともmochaは初期化が必要)
 *   待ち時間を短くするのがUTの基本なので、テストのたびに不要な初期化が必要になるのは辛い
 * 
 * 3. テストのメンテナンスコストが高い
 * 　グローバル変数が変更される => テストコードで使用しているグローバル変数も変更の必要がある
 * 　ここで面倒がって変更しないと失敗すべきテストが成功したり、成功すべきテストが失敗したりする(偽陽性/議員性)
 * 
 * 書きやすいコードとメンテナンスしやすいコードは違う
*/
