// オブジェクトの分割代入
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