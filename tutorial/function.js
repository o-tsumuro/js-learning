// ユーザーがテキストボックスに入力したときに
// 何らかのコードを実行する場合


/* 通常の関数 */
function logkey(event) {
    console.log(`"${event.key}" を押しました。`);
}
textBox.addEventListener("keydown", logkey);

/* 無名関数 */
textBox.addEventListener("keydown", function (event) {
    console.log(`"${event.key}" を押しました。`);
});

/* アロー関数 */
textBox.addEventListener("keydown", (event) => { // 引数が一つの場合は括弧を省略可
    console.log(`"${event.key}" を押しました。`);
});
