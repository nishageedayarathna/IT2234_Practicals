// Q3.js - Rearrange digits of a number to create the maximum value using basic code
let num = 215; 

if (num >= 10) 
{ 
    let digits = num.toString().split('');
    
    
    for (let i = 0; i < digits.length; i++) {
        for (let j = i + 1; j < digits.length; j++) {
            if (digits[i] < digits[j]) {
                let temp = digits[i];
                digits[i] = digits[j];
                digits[j] = temp;
            }
        }
    }
    
    let maxNumber = parseInt(digits.join(''));
    console.log(maxNumber);
}

