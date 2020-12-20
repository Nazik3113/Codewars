function findNextSquare(num) {
    if (Math.sqrt(num) % 1 !== 0) {
        return -1;
    } else {
        num++;
        while (Math.sqrt(num) % 1 !== 0) {
            num++;
        }
    }
    return num;
}

