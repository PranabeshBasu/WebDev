const Arrayavg = (nums) => {
    let total = 0;
    for (let i of nums) {
        total += i;
    }
    return total/nums.length;
}
let nums = [1, 2, 3, 4, 5];
console.log(Arrayavg(nums));