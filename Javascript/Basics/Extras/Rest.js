function sum(...args) {
    return args.reduce((sum, el) => sum + el
)};
console.log(sum(1,2,3,5,6,90));

function min(...args) {
    return args.reduce((min, el) => {
        if (min < el) {
            return min;
        }
        else {
            return el;
        }
    });
}
console.log(min(1, -1, 3, -90, 80));