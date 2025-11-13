function maxOperations(s: string): number {
    let onesSeen: number = 0;
    let operations: number = 0;
    let index: number = 0;

    while (index < s.length) {
        if (s[index] === "0") {
            while (index + 1 < s.length && s[index + 1] === "0") {
                index++;
            }
            operations += onesSeen;
        } else {
            onesSeen++;
        }
        index++;
    }

    return operations;
};