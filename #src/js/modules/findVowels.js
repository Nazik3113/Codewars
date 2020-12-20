function findVowels(string) {
    let stringArr =  string.split('');

    let counter = 0;

    for (let i = 0; i < stringArr.length; i++) {
        if (stringArr[i] == 'a'|| stringArr[i] == 'e' || stringArr[i] == 'i' || stringArr[i] == 'o' || stringArr[i] == 'u') {
            counter++;
        }
    }

    console.log(counter);
}

findVowels('hello');