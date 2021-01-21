function arr() {
    let r = [];
    for (let i = 0; i < 100; i++) {
        r[i] = i;
    }
    return r;
}

function binary(arr, num) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        let guess = arr[mid];

        if (guess === num) {
            return mid;
        }
        if (guess > num) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return null;
}

console.log(binary(arr(), 87))