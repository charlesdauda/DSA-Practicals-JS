/* REVERSE AN INTEGER */

const reverseString = (str) => str.split('').reverse().join('')
console.log(reverseString("Hello"));


/*REVERSE AN INTEGER */

const reverseInt = n => {
    reversed = n.toString().split('').reverse().join('')
    return parseInt(reversed) * Math.sign(n);
}

console.log(reverseInt(1234567));






