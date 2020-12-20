function duplicateEncode(word){
    let res = [];
    let wordArr = word.toLowerCase().split('');

    for (let i = 0; i < word.length; i++) {
        let preRes = [word.toLowerCase().slice(0, i), word.toLowerCase().slice(i+1)].join('').split('');

        for (let j = 0; j < preRes.length; j++) {
            if (wordArr[i] === preRes[j]) {
                res.push(')');
                break;
            }
            if (j === preRes.length - 1) {
                res.push('(');
                break;
            }
        }
    }
    console.log(res.join(''));
}

duplicateEncode('Success');