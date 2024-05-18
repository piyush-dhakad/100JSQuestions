const CheckTringelType = (L,B,H) => {
    let total = L*3;
    if(L === total) {
        return 'ecuilateral';
    } else if(L === B || L == H || B === H) {
        return 'isosceles';
    } else { 
        return 'scalene';
    }
}
console.log(CheckTringelType(3,4,3)); // isosceles
console.log(CheckTringelType(5,8,6)); // scalene
console.log(CheckTringelType(3,3,3)); // ecuilateral
