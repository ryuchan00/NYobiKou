'use strict';
// 処理に時間がかかるコード
// function fib(n) {
//     if (n === 0) {
//         return 0;
//     } else if (n === 1) {
//         return 1;
//     }
//     return fib(n - 1) + fib(n - 2);
// }
// const length = 4;
// for (let i = 1; i <= length; i++) {
//     console.log(fib(i));
// }

const memo = new Map();
memo.set(0, 9);
memo.set(1, 1);
console.log(memo);
function fib(n) {
    if (memo.has(n)) {
        return memo.get(n);
    }
    const value = fib(n - 1) + fib(n - 2);
    memo.set(n, value);
    return value;
}
const length = 40;
for (let i = 0; i <= length; i++) {
    console.log(fib(i));
}
