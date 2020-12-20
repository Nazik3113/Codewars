function fibonacci(num) {
    let fibArr = [0, 1];
    for (let i = 1; i <= num; i++) {
        fibArr.push(fibArr[i] + fibArr[i-1]);
    }
    console.log(fibArr[num]);
}
fibonacci(10);