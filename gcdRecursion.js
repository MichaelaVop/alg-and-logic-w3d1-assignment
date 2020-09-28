// Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers 
//using recursion. 

const gcdRecursive = function(a, b) {
    if (a === 0) {
        return b;
      };
    
      if (b === 0) {
        return a;
      };

      return gcdRecursive(b, a % b);

    
}        

console.log(gcdRecursive(12, 8));
console.log(gcdRecursive(25, 20));
console.log(gcdRecursive(5, 12));
console.log(gcdRecursive(6, 12));
console.log(gcdRecursive(12, 0));

