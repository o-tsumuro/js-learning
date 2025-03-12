// 関数の引数展開
const numbers = [10, 20, 30];
function sum(a, b, c) {
    return a + b + c;
}

console.log(sum(...numbers)); //60
console.log(sum(numbers)); // 10, 20, 30undefinedundefind(期待しない出力)

  