function filter_list(arr) {
    for (let i = arr.length; i >= 0; i--) {
        if (typeof arr[i] !== 'number') {
            arr.splice(i, 1);
        }
    }
    return arr;
}

console.log(filter_list([1,2,'aasf','1','123',123]));