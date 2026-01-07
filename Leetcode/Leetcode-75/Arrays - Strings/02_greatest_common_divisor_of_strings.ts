function gcdOfStrings(str1: string, str2: string): string {
    if (str1 + str2 !== str2 + str1) {
        return "";
    }

    let a = str1.length;
    let b = str2.length;

    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }

    return str1.slice(0, a);
};