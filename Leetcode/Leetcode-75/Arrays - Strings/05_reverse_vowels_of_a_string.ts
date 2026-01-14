function reverseVowels(s: string): string {
    let left = 0, right = s.length - 1;
    const vowels = new Set(["a","e","i","o","u","A","E","I","O","U"]);
    const arr = s.split("");

    while (left < right) {
        while (left < right && !vowels.has(arr[left])) left++;
        while (left < right && !vowels.has(arr[right])) right--;

        if (left < right) {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        }
    }

    return arr.join("");
}

