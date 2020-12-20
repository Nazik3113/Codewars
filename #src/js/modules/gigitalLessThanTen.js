function digital_root(num) {
    let nums = num.toString().split('');
    let res = nums.reduce((total, num) => Number(total) + Number(num));

    while (res >= 10) {
        nums = res.toString().split('');
        res = nums.reduce((total, num) => Number(total) + Number(num));
    }

    if (res === '0') {
        return 0;
    } else {
        return res;
    }
}

console.log(digital_root(459));