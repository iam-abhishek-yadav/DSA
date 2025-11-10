class Solution {
    divisors(n) {
        if(n === 1) return [1]
        const res = [1]
        for(let i=2;i<=n/2;i++){
            if(n % i === 0) res.push(i)
        }
        res.push(n)
        return res
    }
}