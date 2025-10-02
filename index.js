//Code your solutions in this file 

// Problem 1 
/* const fiveToOneHundred = (n) => {
    for (let i = 5; i <= n; i++) {
        let orderNumber = i
        console.log(orderNumber);
    }
}
(fiveToOneHundred(100));
*/

// Problem 2
/*
const multiplesOfThree = (n) => {
    for (let i = 1; i <= n; i++) {
        let threeMultiples = i;
        if (i % 3 === 0) {
            console.log(threeMultiples)
        }
    }
}
multiplesOfThree((100));
*/

//Probelm 3

const multiplesOfThreeOrFives = (n) => {
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            console.log(i)
        } else {

        }
    }
}
multiplesOfThreeOrFives(100);