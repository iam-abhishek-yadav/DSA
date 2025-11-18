function isOneBitCharacter(bits: number[]): boolean {
    let index: number = 0;
    const n: number = bits.length;
    while (index < n - 1) {
        if (bits[index] === 1) {
            index += 2;
        } else {
            index += 1;
        }
    }
    return index === n - 1;
}