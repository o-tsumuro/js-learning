// オブジェクトのスプレッド
const user = { userName: "Alice", age: 25 };
const copyUser = { ...user }; // userのコピー
const additionalInfo = { city: "Tokyo", age: 30 };
const mergeUser = { ...user, ...additionalInfo }; // オブジェクトのマージ
// ↑ キーが重複した場合は後者のプロパティで上書きされる

console.log(copyUser); // { userName: 'Alice', age: 25 }
console.log(user === copyUser) // false(コピーであって別物のため)
console.log(mergeUser); // { userName: 'Alice', age: 30, city: 'Tokyo' }