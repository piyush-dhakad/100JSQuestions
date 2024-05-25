const isPelindore= (str) => {
if(str.trim().length === 0) {
    return 'please enter valid string';
}
str = str.toLowerCase();
// let str2 = str.split('').reverse().join('');
let str2 = str.split('');
for(let i=0,j=str2.length-1; i <= j; i++,j--) {
let temp = str2[i];
str2[i] = str2[j];
str2[j] = temp;
// console.log(str2[j]);
}
// console.log(str2);
if(str === str2.join('')) {
    return `String ${str} is Pelindore`;
} else {
    return `String ${str} is not Pelindore`;
}
}
console.log(isPelindore('Naman'));
console.log(isPelindore('Piyush'));