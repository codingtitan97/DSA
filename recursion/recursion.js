// find all sequence of a string
function subsequence(str) {
    if (str.length === 0) {
        return [""]
    }
    let firstChar = str[0];
    let subseqs = subsequence(str.slice(1));
    let result = [];
    for (let i = 0; i < subseqs.length; i++) {
        result.push(subseqs[i]);
        result.push(firstChar + subseqs[i])
    }
    return result;
}
console.log("output of sequence of a string", subsequence("abc"))

// find all permutation of an array
function permutation(nums) {
    if (nums.length == 1) {
        return nums
    }
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        let current = nums[i];
        let remaining = nums.slice(0, i).concat(nums.slice(i + 1));
        let permutations = permutation(remaining);
        for (let j = 0; j < permutations.length; j++) {
            result.push([current].concat(permutations[j]))
        }
    }
    return result;
}

console.log(permutation([2, 3, 4]))

