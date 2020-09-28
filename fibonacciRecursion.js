// Write a JavaScript program to get the first n Fibonacci numbers using recursion
// the fibonacci sequence involes adding the past two numbers in a list to
//create the next one. 

// https://www.mathsisfun.com/numbers/fibonacci-sequence.html#:~:text=The%20Fibonacci%20Sequence%20is%20the,21%2C%2034%2C%20...

const fibonacciRecursive = function(n) {

    if (n === 0) {
        return 0;
    } 
    if (n === 1) {
        return [0, 1];
    }
    let list = fibonacciRecursive(n - 1);
    list.push(list[list.length - 1] + list[list.length - 2]);
    return list;
 

}

console.log(fibonacciRecursive(13));
