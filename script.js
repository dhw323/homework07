//The final file should just the functions, no console.log calls or function calls.

//For all functions, be sure to return a string "Error" 
//if any of the parameters 
//are missing, 
//are not numbers, 
//or have other mathmatical errors.

//Take time and be efficient with your code.

// for FUNCTIONS: INCLUDE {} AND 'returns' even in ARROW FUNCTIONS

//to myself: maybe make a function of converting a var into 2 dec points and parsefloating and calling that func. every time


//ADD
const add = (num1, num2) => {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        let ans = num1 + num2;
        ans = ans.toFixed(2);
        ans = parseFloat(ans);
        return ans;        
    } 
    return "Error!";
};

console.log(add(7, 22),
add(1, 2),  // returns 3
add(0.1, 0.2),  // returns 0.3
add(999, 1019),  // returns 2018
add(),  // return "Error"
add("Hello"),  // return "Error");
);


//SUBRTRACT
const subtract = (num1, num2) => {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        let ans = num1 - num2;
        ans = ans.toFixed(2);
        ans = parseFloat(ans);
        return ans;        
    } 
    return "Error!";
};

console.log(subtract(7, 22),
subtract(2, 1),  // returns 1
subtract(1, 2),  // returns -1
subtract(0.3, 0.2),  // returns 0.1
subtract(),  // return "Error"
subtract("Hello"),  // return "Error"
);


//MULTIPLY
// (would've loved if the function name were multiply to keep the part of speech consistent)
const multiple = (num1, num2) => {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        let ans = num1 * num2;
        ans = ans.toFixed(2);
        ans = parseFloat(ans);
        return ans;        
    } 
    return "Error!";
};

console.log(multiple(7, 22),
multiple(2, 1),  // returns 1 > NOPE: 2
multiple(1, 2),  // returns -1 > NOPE: 2
multiple(0.1, 0.2),  // returns 0.02
multiple(),  // return "Error"
multiple("Hello"),  // return "Error"
);


//DIVIDE
const divide = (dividend, divisor) => {
    //one more condition to check if the divisor is not zero
    if (typeof dividend === 'number' && typeof divisor === 'number' && divisor != 0) {
        let ans = dividend / divisor;
        ans = ans.toFixed(2);
        ans = parseFloat(ans);
        return ans;        
    } 
    return "Error!";
};

console.log(divide(7, 22),
divide(2, 1),  // returns 2
divide(1, 2),  // returns 0.5
divide(1, 3),  // returns 0.33
divide(0, 10),  // returns 0
divide(10, 0),  // returns "Error"
);


//SQUARE
const square = (num) => {
    if (typeof num === 'number') {
        let ans = num * num;
        ans = ans.toFixed(2);
        ans = parseFloat(ans);
        return ans;        
    } 
    return "Error!";
};

console.log(square(7),
square(2),  // returns 4 (which is 2^2)
square(1),  // returns 1 (which is 1^2)
square(10),  // returns 100 (which is 100^2)
square("Hello"), 
);


//CUBE
const cube = (num) => {
    if (typeof num === 'number') {
        let ans = 1;
        for (let i=0; i<3; i++) {
        ans = ans * num;
        }
        ans = ans.toFixed(2);
        ans = parseFloat(ans);
        return ans;        
    } 
    return "Error!";
};

console.log(cube(7),
cube(2),  // returns 8 (which is 2^3)
cube(1),  // returns 1 (which is 1^3)
cube(10),  // returns 1000000 (which is 100^3) > NOPE: 10^3 = 1000, cube(100) = 100^3 = 1000000
cube("Hello"), 
);


//POWER
const power = (base, exponent) => {
    if (typeof base === 'number' && typeof exponent === 'number') {
        let ans = 1;
        for (let i = 0 ; i < exponent ; i++) {
            ans = ans * base;
        }
        ans = ans.toFixed(2);
        ans = parseFloat(ans);
        return ans;        
    } 
    return "Error!";
};

console.log(power(7), //returns error, which is expected
power(2, 1),  // returns 2 (which is 2^1)
power(1, 2),  // returns 1 (which is 1^2)
power(0, 10),  // returns 0 (which is 0^10)
power(10, 0),  // returns 1 (which is 10^0)
power(10, 10),  // returns 10000000000 (which is 10^10)
power("Hello"), 
);


//MODULO
const modulo = (dividend, divisor) => {
    if (typeof dividend === 'number' && typeof divisor === 'number') {
        let ans = dividend % divisor;
        ans = ans.toFixed(2);
        ans = parseFloat(ans);
        return ans;        
    } 
    return "Error!";
};

console.log(modulo(7), //returns error, which is expected
modulo(2, 1),  // returns 0
modulo(1, 2),  // returns 1
modulo(0, 10),  // returns 0
modulo(10, 0),  // returns NaN
modulo(10, 10),  // returns 10000000000 > NOPE: 0
modulo("Hello"), 
);


//SQUARE ROOT: n^(1/2)
const squareRoot = (num) => {
    if (typeof num === 'number' && num >= 0) {
        
        let sqrt_int = 0;
        //let sqrt_tenth = 0;
        //let sqrt_hundredth = 0;

        for (let i = 0 ; (i+1)*(i+1) <= num ; i++) {
            sqrt_int = sqrt_int + 1;
        }  
        /*
        for (let j = 0 ; (sqrt_int + 0.1)*(sqrt_int + 0.1) < num && j < 10; j++) {
            sqrt_tenth = sqrt_tenth + 0.1;
        }
        */
  
        /*
        let sqrt_int = 0;
        for (let i = 0 ; (i+1)*(i+1) <= num ; i++) {
            sqrt_int = sqrt_int + 1;
        }
        */

        let ans = sqrt_int /* + sqrt_tenth */ /* + sqrt_hundredth */;
        ans = ans.toFixed(2);
        ans = parseFloat(ans);
                
        return ans;        
    } 
    return "Error!";
};

console.log(squareRoot(100),
squareRoot(101),
squareRoot(99),
squareRoot(5),
squareRoot(1000),
squareRoot(-100), //error
squareRoot(9),  // returns 3
squareRoot(144),  // returns 12
);


//CUBE ROOT: n^(1/3)
const cubeRoot = (num) => {
    if (typeof num === 'number' && num >= 0) {
        
        let cbrt_int = 0;
        //let sqrt_tenth = 0;
        //let sqrt_hundredth = 0;

        for (let i = 0 ; (i+1)*(i+1)*(i+1) <= num ; i++) {
            cbrt_int = cbrt_int + 1;
        }  
        /*
        for (let j = 0 ; (sqrt_int + 0.1)*(sqrt_int + 0.1) < num && j < 10; j++) {
            sqrt_tenth = sqrt_tenth + 0.1;
        }
        */
  
        /*
        let sqrt_int = 0;
        for (let i = 0 ; (i+1)*(i+1) <= num ; i++) {
            sqrt_int = sqrt_int + 1;
        }
        */

        let ans = cbrt_int /* + sqrt_tenth */ /* + sqrt_hundredth */;
        ans = ans.toFixed(2);
        ans = parseFloat(ans);
                
        return ans;        
    } 
    return "Error!";
};

console.log(cubeRoot(8),
cubeRoot(26),
cubeRoot(27),
cubeRoot(28),
cubeRoot(-1000), //NOT error ideally, but I will deal with this later: right now this will give an error
cubeRoot("bleh"), //error
);


/*

//X ROOT: n^(1/x)
const root = (num, x_root) => {
    if (typeof num === 'number' && typeof x_root === 'number') {
        
        let root_val = 0;
        for (let j = 0; j < ) {
            root_val = root_val + 1;

            for (let i = 0 ; i < x_root ; i++) {
            root_val = root_val * root_val;
            }
            
        }    
        let ans = root_val;
        ans = ans.toFixed(2);
        ans = parseFloat(ans);
        return ans;        
    } 
    return "Error!";
};

console.log(root(9,2),
root(9,3),
root(15625, 6), //returns 5
);

*/



//power function, other functions within functions