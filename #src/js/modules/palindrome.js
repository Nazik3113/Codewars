function palindrome(name) {
    let normal = name.split('');
    let reverse = name.split('').reverse();

    let pal = false;

    for (let i = 0; i < normal.length; i++) {
        if (normal[i] !== reverse[i]) {
            pal = false;
        } else {
            pal = true;
        }
    }

    console.log(pal);
}
palindrome('anna');