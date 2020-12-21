function findEvenIndex(arr) {
    for (let i = 0; i <= arr.length; i++) {
        arr.forEach(num => {
            if (isNaN(num)) {
                return -1;
            }
        });
        if (arr.length === 2 && arr[0] === arr[1]) {
            return -1;
        }
        if (arr.length === 1 || arr.length === 0) {
            return 0;
        }
        if (arr.slice(1).reduce((ac, cur) => ac += cur) === 0) {
            return 0;
        }
        if (arr.slice(0, arr.length - 1).reduce((ac, cur) => ac += cur) === 0) {
            return arr.length - 1;
        }
        if (i < arr.length - 2) {
            if (arr.slice(0, i + 1).reduce((ac, cur) => ac += cur) === arr.slice(i + 2, arr.length).reduce((ac, cur) => ac += cur)) {
                return i + 1;
            }
        } else {
            if (arr.slice(0, i - 2).reduce((ac, cur) => ac += cur) === arr.slice(i - 1, arr.length).reduce((ac, cur) => ac += cur)) {
                return i + 1;
            }
        }
        if (i === arr.length) {
            return -1;
        }
    }
}

console.log(findEvenIndex([1,2,3,4,3,2,1]));