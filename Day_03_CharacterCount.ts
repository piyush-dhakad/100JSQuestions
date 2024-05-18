const charCount = (str,character) =>{
    if(str.trim().length === 0 || character.trim().length === 0) {
        return 'please enter valid string or Character';
    }
    let count = 0;
    // str.split('').forEach((ch) => {
    //     if(ch.toLowerCase() === character.toLowerCase()) {
    //         count++;
    //     }
    // });
    count = str.split('').reduce((eccu,currentValue)=>{
        if(currentValue.toLowerCase() === character.toLowerCase()) {
           return eccu = eccu  + 1;
        } else {
            return eccu;
        }
    },0)
    return count;
}
console.log(charCount('MissIsSippi','I'));
console.log(charCount('MissIsSippi',''));