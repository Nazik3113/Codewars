function anagram(wOne = '', wTwo = '') {
    if (typeof(wOne) !== 'string' || typeof(wTwo) !== 'string' || wOne.length === 0 || wTwo.length === 0) {
        return null;
    } else if (wOne === wTwo) {
        return false;
    }
    let firstWord = wOne.toLowerCase().split('');
    let secondWord = wTwo.toLowerCase().split('');

    for (let i = 0; i < firstWord.length; i++) {
        if (firstWord.length !== secondWord.length) {
            return false;
        }
        let res = secondWord.indexOf(firstWord[i]);
        if (res !== -1) {
            delete secondWord[res];
        } else {
            return false;
        }
    }
    return true;
}

module.exports = {anagram};

