function getABMult(a) {
    return function (b) {
        return a * b;
    };
}
function getAverage(array) {
    const average = array.reduce(function (prev, current) {
        return prev + current;
    }, 0);
    let answer = average / array.length;
    return answer;
}
function getDeleted(str, letter) {
    for (let i of letter) {
        str = str.replaceAll(i, ``);
    }
    console.log(str);
}
