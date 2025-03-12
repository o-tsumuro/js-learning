// 配列のスプレッド
const arr1 = [1, 2, 3];
const arr2 = [...arr1]; // arr1のコピー
const arr3 = [...arr1, ...arr2]; // 配列の結合
const arr4 = [...arr1, 4, 5] // 要素の追加

console.log(arr2); // [1, 2, 3]
console.log(arr1 === arr2); // false(あくまでコピーのため別の配列である)
console.log(arr3); // [1, 2, 3, 1, 2, 3]
console.log(arr4); // [1, 2, 3, 4, 5]