/* split関数 -> 引数に渡した文字で区切り配列に分割する*/
const data = "札幌,仙台,東京,名古屋,大阪,福岡";
const cities1 = data.split(",");
console.log(cities1); //[ '札幌', '仙台', '東京', '名古屋', '大阪', '福岡' ]

/* join関数 -> レシーバーの配列を引数で区切った形の文字列にする */
const cities2 = ['札幌', '仙台', '東京', '名古屋', '大阪', '福岡'];
const commaSeparated = cities2.join("");
console.log(commaSeparated); //札幌仙台東京名古屋大阪福岡