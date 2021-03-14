exports.min = function min(array) {
    if (!array || array.length <= 0) return 0;

    let result = Number.MAX_SAFE_INTEGER;
    for (const num of array) {
        if (num < result) {
            result = num;
        }
    }
    return result;
};

exports.max = function max(array) {
    if (!array || array.length <= 0) return 0;

    let result = Number.MIN_SAFE_INTEGER;
    for (const num of array) {
        if (num > result) {
            result = num;
        }
    }
    return result;
};

exports.avg = function avg(array) {
    if (!array || array.length <= 0) return 0;
    return array.reduce((acc, item) => acc + item) / array.length;
};
