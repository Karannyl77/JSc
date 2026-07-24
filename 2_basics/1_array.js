const myArr = [1,2,3,4,5];
myArr.push(6);
myArr.push(7);
myArr.push(8);
//myArr.unshift(0);

//const newArr = myArr.join()
// console.log(myArr);
// console.log(typeof newArr);


console.log("A", myArr);
const myn1 = myArr.slice(1,4);        // slice is used to get the copy of the array from the original array and it does not change the original array. 
console.log(myn1);                   // It takes 2 arguments, first is the starting index and second is the ending index. The ending index is not included in the new array.
                                    //  It returns a new array.

console.log("B", myArr);
const myn2 = myArr.slice(1,3);
console.log(myn2);

console.log("C", myArr);
const myn3 = myArr.splice(1,4);     // splice is used to remove elements from the original array and it changes the original array. It takes 2 arguments, first is the starting index and second is the number of elements to be removed. It returns a new array containing the removed elements.
console.log(myn1);
console.log(myn2);
console.log(myn3);



