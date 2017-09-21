// トリボナッチ数列
'use strict';
const memo = new Map();
memo.set(0, 0);
memo.set(1, 0);
memo.set(2, 1);
console.log(memo);
function tri(n) {
    if (memo.has(n)) {
        return memo.get(n);
    }
    const value = tri(n - 1) + tri(n - 2) + tri(n - 3);
    memo.set(n, value);
    return value;
}
const length = 40;
if (length < 3) {
    console.log('Please be 3 or more');
    process.exit();
}
for (let i = 0; i <= length; i++) {
    console.log(tri(i));
}
