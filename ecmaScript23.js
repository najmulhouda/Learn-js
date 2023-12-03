const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const reverseArr = arr.reverse();
const reverseArray = arr.toReversed();
// console.log(reverseArray);
// console.log(arr);


const spliceArr = arr.splice(-2 , -2, 100, 400);
// console.log(spliceArr);
// console.log(arr);

const array = [9, 3, 4,34, 2, 43, 33]
const compare = (a, b) => {
    return a - b;
}
const sortArray = array.sort(compare);
console.log(sortArray);
// const sortArray = array.sort();
// console.log(sortArray);  