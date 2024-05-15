function longestWord(str) {
    str = str.trim();
    if(str.length === 0){
        return false;
    }
    let strArr = str.split(' ').reverse();
    let word = '';
    // strArr.forEach(element => {
    //     if(element.length >= word.length) {
    //         word = element;
    //     }
    // });
    // word = strArr.reduce((acc,currentValue)=> acc.length <= currentValue.length ? currentValue : acc,'')
    word = strArr.sort((a,b)=> b.length - a.length)[0];
    return word;
}
console.log(longestWord("Hello everyone let's start the 100-day codisngsjd 100-JavaScript  challenges"));
console.log(longestWord("             "));