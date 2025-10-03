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

/* const multiplesOfThreeOrFives = (n) => {
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            console.log(i)
        } else {

        }
    }
}
multiplesOfThreeOrFives(100); */

//Problem 4
/*
const untilNum = (n) => {
    for (let i = 1; i <= n; i++) {
        if (i <= n) {
            console.log(i)
        } else {

        }
    }
};
untilNum(40);
untilNum(67);
untilNum(32);
*/

//Problem 5
/*
const multiply = (n1, n2) => {
    console.log(n1 * n2);
}
multiply(54, 2);
multiply(6, 7);
multiply(5, 3);
*/

//Problem 6
/*
const add = (num1, num2) => {
    if (num1 === num2) {
        console.log(num1 * 3 + num2 * 3)
    } else {
        console.log(num1 + num2)
    }
};

add(5, 10);
add(6, 7);
add(9, 9);
*/

//Problem 7
/*
const isNegative = (n) => {
    if (n >= 0) {
        return false
    } else {
        return true
    }
};
console.log(isNegative(3));
*/

//Problem 8 
/*
const triangleArea = (numb1, numb2) => {
    return numb1 * numb2 * 0.5
}
console.log(triangleArea(6, 7));
*/

//Problem 9
/*
const betweenTwentyAndFourty = (n) => {
    if (n > 20 && n < 40) {
        return true
    } else {
        return false
    }
};
console.log(betweenTwentyAndFourty(54));
console.log(betweenTwentyAndFourty(37));
console.log(betweenTwentyAndFourty(18));
*/

//Problem 10 
/*
const largest = (nu1, nu2, nu3) => {
    if (nu1 > nu2 && nu1 > nu3) {
        return nu1
    } else if (nu2 > nu1 && nu2 > nu3) {
        return nu2
    } else if (nu3 > nu1 && nu3 > nu2) {
        return nu3
    }

};
console.log(largest(6, 7, 9));
console.log(largest(20, 19, 56));
console.log(largest(99, 95, 3));
*/

// Problem 14
/*
const absoluteNineteen = (a) => {
    return Math.abs(a - 19);
}
console.log(absoluteNineteen(18));
console.log(absoluteNineteen(20));
console.log(absoluteNineteen(9341));


//Problem 15
const switchLetters = (newString) => {
    if (newString.length < 2) {
        return newString
    } else {
        let first = newString[0]
        let last = newString[newString.length - 1]
        let middle = newString.slice(1, newString.length - 1)

        return last + middle + first
    }

};
console.log(switchLetters("poppy"))
console.log(switchLetters("zeri"))
console.log(switchLetters("ao"))

//Problem 16
const changeString = (stri) => {
    let stringAfter = "";
    for (let i = 0; i < stri.length; i++) {
        let code = stri[i].charCodeAt(0);
        let nextCharacter;
        if (stri[i] === "z") {
            nextCharacter = "a";
        } else if (stri[i] === "Z") {
            nextCharacter = "A"
        } else {
            nextCharacter = String.fromCharCode(code + 1)
        }
        stringAfter += nextCharacter;
    }
    return stringAfter
};

console.log(changeString("aphelios"));
console.log(changeString("qdkhdudc"));
*/