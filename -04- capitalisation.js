const capitalise = (str) =>{
    return str
    .toLowerCase()
    .split('')
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join('');
}

console.log(capitalise("Hello Man"));

const smallerCase = (str) =>{
    return str
    .toUpperCase()
    .split('')
    .map((word ) => word[0].toLowerCase() + word.slice(1))
    .join('')
}
console.log(smallerCase("HELLO MAN"));






