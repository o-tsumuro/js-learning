/* push関数は要素を追加し、配列の長さを返す */
const cities1 = ["東京", "大阪"];
const newLength = cities1.push("神戸");
console.log(cities1); //[ "東京", "大阪",  "神戸" ]
console.log(newLength); //3

/* unshift関数 -> 要素を先頭に追加する */
const cities2 = ["東京", "大阪"];
cities2.unshift("札幌");
console.log(cities2) //[ "札幌", "東京", "大阪" ]

/* pop関数は配列から最後の項目を削除し、削除された項目を返す */
const cities3 = ["東京", "大阪"];
const removeCity = cities3.pop();
console.log(cities3); //[ "東京" ]
console.log(removeCity); //[ "大阪" ]

/* splice関数 -> 第一引数で指定したインデックスから第二引数で指定した数分、要素を配列から削除する*/
const cities4 = ["東京", "大阪", "仙台"];
const index = cities1.indexOf("大阪");
if (index !== -1) {
    cities4.splice(index, 2);
}
console.log(cities4); //[ "東京" ]

/* map関数 -> map関数の引数に関数を渡すと、レシーバの配列の各項目にその関数を1回ずつ呼び出す */
function double(number) {
    return number * 2;
}
const numbers = [5, 2, 7, 6];
const doubled = numbers.map(double);
console.log(doubled); //[ 10, 4, 14, 12 ]

/* filter関数 -> filter関数の引数に関数を渡すと、レシーバの配列の各項目に対してその関数を呼び出し、関数がtrueを返した項目が新しく配列に追加される */
function isLong(city) {
    return city.length > 2;
}
const cities5 = ["東京", "名古屋", "大阪", "鹿児島"];
const longer = cities5.filter(isLong);
console.log(longer); //[ "名古屋", "鹿児島" ]