// Q1.js - Find the maximum possible purchase amount within budget using for loops
function getMaxPurchase(budget, keyboards, mice) {
    let maxAmount = -1;
    
    for (let i = 0; i < keyboards.length; i++) {
        for (let j = 0; j < mice.length; j++) {
            let total = keyboards[i] + mice[j];
            if (total <= budget && total > maxAmount) {
                maxAmount = total;
            }
        }
    }
    
    return maxAmount;
}


console.log(getMaxPurchase(60, [40, 50, 60], [5, 8, 12]));
console.log(getMaxPurchase(10, [3, 1], [5, 2, 8])); 
console.log(getMaxPurchase(20, [30, 15], [8, 10, 6])); 
