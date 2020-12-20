function pigIt(str){
    let wordsArr = str.split('');
    wordsArr.forEach((letter, index) => {
        if (letter.toLowerCase() === letter.toUpperCase() && letter !== ' ') {
            wordsArr[index] = ' ' + letter;
        }
    });
    wordsArr = wordsArr.join('').split(' ');

    let wArr = [];

    wordsArr.forEach((word, index) => {
        wArr[index] = word.split('');
    });

    wArr.forEach((letterArr, index) => {
        if (letterArr.length !== 0 && letterArr[0].toUpperCase() !== letterArr[0].toLowerCase()) {
            letterArr.splice(letterArr.length + 1, 1, letterArr[0]);
            letterArr.splice(0, 1);
            letterArr.splice(letterArr.length + 1, 2, 'a', 'y');
        }
        if (letterArr.length === 0) {
            wArr.splice(index, 1);
        }
        wArr[index] = wArr[index].join('');
    });

    return wArr.join(' ');
}

console.log(pigIt('Pig latin is cool !'));