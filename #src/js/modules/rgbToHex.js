function rgb(r, g, b){
    let res = '';
    const rgb = [r, g ,b]
    rgb.forEach((num) => {
        if (num > 255) {
            res += "FF";
        } else {
            res += num >= 16 ? Math.floor(num / 16).toString(16).toUpperCase() : '0';
            res += num > 0 ? ((num / 16 % 1) * 16).toString(16).toUpperCase() : '0';
        }
    });

    return res;
}

console.log(rgb(233, 126, 46));