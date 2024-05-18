//we need to create sort function without sort method
const cortArray = (arr) =>{
    // Bubble sort 
// let arr2 = arr;
// let m = arr2.length -1;
// while(m > 0) {
//     let i =0;
//     let j = 1;    
//     while(j < arr2.length) {
//     if(arr2[i] > arr2[j]) {
//         let temp = arr2[i];
//         arr2[i] = arr2[j];
//         arr2[j] = temp;
//     }
//     i++;
//     j++;
// }
// m--;
// }
// return arr2;

let arr3 = arr;
let index = 0;
for(let i =0; i < arr3.length; i++) {
index = i;
for(let j = 0; j < i; j++) {
    if(arr3[index] < arr3[j]) {
        let temp = arr3[j];
        arr3[j] = arr3[index];
        arr3[index] = temp;
    }
}
}
return arr3;
}

console.log(cortArray([9,3,4,2,6,7,4,7,1,8,5]));