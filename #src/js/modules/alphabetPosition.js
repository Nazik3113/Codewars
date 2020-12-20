function alphabetPosition(text) {
    let letterArr = text.toLowerCase().split('');
    let res = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    for (let i in letterArr) {
        letterArr[i] = res.indexOf(letterArr[i]) + 1;
    }
    for (let i = letterArr.length; i >= 0; i--) {
        if (Number(letterArr[i]) === 0) {
            letterArr.splice(Number(i), 1);
        }
    }

    return letterArr;
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));