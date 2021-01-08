function domainName(url){
    let res = url.split('');
    if (res.indexOf('.', res.indexOf('.') + 1) != -1 && res.indexOf('.') <= 11) {
        res = res.slice(res.indexOf('.') + 1, res.indexOf('.', res.indexOf('.') + 1));
    } else if (res.indexOf('/', res.indexOf('/') + 1) != -1 && res.indexOf('/') <= 6) {
        res = res.slice(res.indexOf('/', res.indexOf('/') + 1) + 1, res.indexOf('.'));
    } else {
        res = res.slice(0, res.indexOf('.'));
    }


    return res.join('');
}

console.log((domainName("4sgfnqw.de/error")));