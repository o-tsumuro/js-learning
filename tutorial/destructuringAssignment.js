// --- オブジェクトの分割代入 ---
// 変数名はオブジェクトのキーと一致する必要がある
// 順番は関係ない
// 「:」で別名を付けることができる
// オブジェクトにプロパティがない場合、デフォルト値を設定できる
const user = { name : "Alice", age: 25, city: "Tokyo" };
const { city, age, country = "Japan", name: userName } = user;

console.log(age); // 25
console.log(city); // Tokyo
console.log(userName); // Alice
console.log(country); // Japan

// ---配列の分割代入---
// 変数名は自由に決められる
// 順番が重要
// 「,」を使って不要な要素を飛ばすことができる
// 「...」を使うと残りの要素をまとめて取得できる
const colors = ["red", "green", "blue", "black", "white", "gray", "skyblue"];
const [firstColor, secondColor, , forthColor, ...rest] = colors;

console.log(firstColor); // red
console.log(secondColor); // green
console.log(forthColor); // black
console.log(rest); // [ 'white', 'gray', 'skyblue' ]