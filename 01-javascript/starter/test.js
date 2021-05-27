function firstNonConsecutive(arr) {
    for (let i = 0; i < arr.length; i++) {
        const currentNum = arr[i];
        const nextNum = arr[i + 1];
        const lastIndexValue = arr[arr.length - 1];
        if (nextNum - currentNum >= 2) {
            return nextNum;
        } else if (currentNum === lastIndexValue) {
            return null;
        }
    }
}

// function firstNonConsecutive(arr) {
//     for (let i = 0; i < arr.length - 1; ++i) {
//         if (arr[i] + 1 !== arr[i + 1]) {
//             return arr[i + 1]
//         }
//     }
//     return null
// }

console.log(firstNonConsecutive([1, 2, 3, 4, 5, 6, 7, 8]));


