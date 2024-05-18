const HashGenerator = (str)=> {
if(str.length > 280 || str.trim().length == 0  ) {
    return false;
}
let strArr = str.split(' ');
strArr.map((subString) => {
    return subString[0].toUpperCase() + subString.slice(1); 
});
return '#'+strArr.join('');
}
console.log(HashGenerator('i am piyush dhakad'));
console.log(HashGenerator('                 '));
console.log(HashGenerator('I am Piyush Dhakad I"m a software de"m a software developer I am Piyush Dhakad I"m a software developer I am Piyush Dhakad I"m a I am Piyush Dhakad I"m I am Piyush Dhakad I"m a software developerI am Piyush Dhakad I"m a software developera software developer software developer'));