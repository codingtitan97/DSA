function BackTrack(path, length, digits) {
    if (path.length === length) {
        return [path.join("")]
    }
    let validPattern = [];
    for (let digit of digits) {
        path.push(digit);
        validPattern = validPattern.concat(BackTrack(path, length, digits));
        path.pop();
    }
    return validPattern;
}

console.log(BackTrack([], length = 3, ["1", "2"]))