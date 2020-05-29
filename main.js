// 1.Add //
function add (x, y) {
    return x + y
}
console.log (add (3, 4))

// 2.Multiply //  
function multiply(a,b) {
    let product = 0;
    for (counter = 0; counter < b; counter++){
        product += add(a,0);
        
    }
    return product;
    }
    console.log(multiply(5, 8))

// 3.Power/exponentiation //
function power(x,n) {
    let power = 1;
    for (counterB = 0; counterB < n; counterB++) {
        power *= multiply(x,1); 
    }
    return power;
}
    console.log(power(3,6))
    
// 4. Factorial //
function factorial (n){
    let factorial = n;
    for (counterC = n-1; counterC > 0; counterC --) {
        factorial *= multiply(counterC,1)
    }
    return factorial;
}
console.log(factorial(3))

// Bonus: Fibonacci //
function fibonacci (a,b,c){
    let fibonacci = 1;
    for (counterD = 0; counterD <= 2; counterD++) {
    
       
    }
    return fibonacci;
}
console.log(fibonacci(0,1,2))