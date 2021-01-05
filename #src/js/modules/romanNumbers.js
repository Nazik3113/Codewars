function solution(roman){
    const romanArr = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
    const numsArr = [1, 5, 10, 50, 100, 500, 1000];
    const userRoman = roman.split('');
    let total = null;
    for (let i = 0; i < userRoman.length; i++) {
        if (numsArr[romanArr.findIndex((el) => el == userRoman[i])] >= numsArr[romanArr.findIndex((el) => el == userRoman[i + 1])] || i == userRoman.length - 1) {
            total += numsArr[romanArr.findIndex((el) => el == userRoman[i])];
        } else {
            total -= numsArr[romanArr.findIndex((el) => el == userRoman[i])];
        }
    }
    return total;
}

console.log(solution('IV'));