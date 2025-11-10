var reverse = function(x) {
    const isNegative = x < 0;
    x = Math.abs(x);
    let res = 0;

    while (x > 0) {
        const digit = x % 10;
        res = res * 10 + digit;
        x = Math.floor(x / 10);
    }

    if (isNegative) res = -res;
    if (res < -(2 ** 31) || res > 2 ** 31 - 1) return 0;
    return res;
};