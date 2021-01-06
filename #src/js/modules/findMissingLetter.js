function findMissingLetter(array)
{
    const engAlph = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let res = '';
    for (let i = 0; i < array.length; i++) {
        if (i === array.length - 1) {
            continue;
        }
        if (engAlph.findIndex(letter => letter == array[i].toLowerCase()) - engAlph.findIndex(letter => letter == array[i + 1].toLowerCase()) !== -1) {
            if (array[0].toUpperCase() === array[0]) {
                res = engAlph[engAlph.findIndex(letter => letter == array[i].toLowerCase()) + 1].toUpperCase();
            } else {
                res = engAlph[engAlph.findIndex(letter => letter == array[i].toLowerCase()) + 1];
            }
        }
    }
    return res;
}

console.log(findMissingLetter(['O','Q','R','S']));