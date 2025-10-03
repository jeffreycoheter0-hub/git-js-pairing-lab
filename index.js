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

//Problem 11

const printTime = () => {
    const now = new Date();

    // Get hours, minutes, and seconds
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    /*
    Pad with leading zeros if less than 10
    without padStart 4hour:09minute:05seconds AM would read like 4:9:5. With padStart it will read
    like 04:09:05
    */
    hours = String(hours).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');

    // Return the formatted time string
    return `${hours}:${minutes}:${seconds}`;
}

console.log(printTime());

//Problem 12

const isLeapYear = (n) => {
    if (n % 4 === 0) {
        return true
    } else if (n % 400 === 0) {
        return false
    } else {
        return false
    }
};
/* LEAP YEARS
2028, 2024, 2020, 2016, 2012, 2008... etc.
*/
console.log(isLeapYear(2000)); //should print true
console.log(isLeapYear(1990)); //should print false


//Problem 13

const getExtention = (string) => {
    let myString = ''; //this is where we are going to store the string
    let character = '.'; //the character ' . ' we are trying to find
    let place = ''; //where we find the character ' . ' in the string
    for (i = 0; i <= string.indexOf(character); i++) { //finds where ' . ' is in the string
        place = i; //in the example sonic.exe, 0 = s, 1 = o, 2 = n, 3 = i, 4 = c, 5 = . So i = 5 
    }
    return myString = string.slice(place); //starts counting from 5(' . ') and cuts off everything before .
};
console.log(getExtention('Sonic.exe'));