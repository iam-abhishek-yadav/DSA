function isPalindrome(s: string): boolean {
    const cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, "");

    function helper(left: number, right: number): boolean {
        if (left >= right) return true;
        if (cleaned[left] !== cleaned[right]) return false;
        return helper(left + 1, right - 1);
    }

    return helper(0, cleaned.length - 1);
}