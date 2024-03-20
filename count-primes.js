/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    let seen = new Array(n);
    let output = 0;
    for(let i = 2; i < n; i++) {
        if(seen[i]) continue;
        output++;
        for(let j = i * i; j < n; j += i) seen[j] = 1;
    }
    return output;

    // // below timed out on 20/66 testcases passed, n = 5000000
    // if(n <= 2) return 0;
    // if(n == 3) return 1;
    // if(n == 4) return 2;
    // const primes = new Set();
    // const nonprimes = new Set();
    // primes.add(2);
    // const isPrime = (num) => {
    //     if(num < 2) return false;
    //     if(primes.has(num)) return true;
    //     if(nonprimes.has(num)) return false;
    //     let sqrt = Math.floor(Math.sqrt(num));
    //     for(let i = 3; i <= sqrt; i += 2) {
    //         if(num % i == 0) {
    //             nonprimes.add(num);
    //             return false;
    //         }
    //     }
    //     primes.add(num);
    //     return true;
    // }
    // for(let i = 4; i < n; i += 2) nonprimes.add(i);
    // for(let i = 3; i < n; i += 2) {
    //     if(!nonprimes.has(i)) {
    //         if(isPrime(i)) {
    //             for(let j = i * i; j < n; j += i) nonprimes.add(j);
    //         }
    //     }
    // }
    // return primes.size;
};