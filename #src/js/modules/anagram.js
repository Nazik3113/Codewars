function anagram(wOne, wTwo) {
    let firstWord = wOne.toLowerCase().split('');
    let secondWord = wTwo.toLowerCase().split('');

    let right = true;

    for (let i = 0; i < firstWord.length; i++) {
        if (firstWord.length !== secondWord.length) {
            right = false;
            break;
        }

        let res = secondWord.indexOf(firstWord[i]);

        if (res !== -1) {
            delete secondWord[res];
        } else {
            right = false;
            break;
        }
    }

    console.log(right);
}

anagram('thing', 'night');