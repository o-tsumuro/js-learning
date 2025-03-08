// 関数の中身がreturn文のみの場合、
// 中括弧とreturnを省略することができる

const originals = [1, 2, 3];

/* 通常の場合 */
function normalDoubledItem(item) {
    return item * 2;
}
const doubled = originals.map(normalDoubledItem);
console.log(doubled); //[ 2, 4, 6 ]

/* 省略した場合 */
const tripled = originals.map(item => item * 3);
console.log(tripled); //[ 3, 6, 9 ]