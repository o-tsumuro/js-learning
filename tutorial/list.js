/* push関数は要素を追加し、配列の長さを返す */
const cities1 = ["東京", "大阪"];
const newLength = cities1.push("神戸");
console.log(cities1);
console.log(newLength);

/* 要素を先頭に追加する -> unshift関数 */
const cities2 = ["東京", "大阪"];
cities2.unshift("札幌");
console.log(cities2)
