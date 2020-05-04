var fib = function (N) {
    let nums = [0, 1];
    i = 2;
    while (i <= N) {
        nums.push((i - 1) + (i - 2));
        i++;
    }
    return nums[N - 1];
};

// recursive
var fib = function (N) {
    // fib of 0 is 0, fib of 1 is 1
    if (N < 2) {
        return N;
    }
    return fib(N - 1) + fib(N - 2);
}