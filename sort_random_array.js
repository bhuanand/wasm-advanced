const MAX_ELEMENTS = 1000000;
const MAX_VALUE = 10000000;

const arr = [];

console.time("arrayGeneration");
for (let at = 0; at < MAX_ELEMENTS; ++at) {
    arr[at] = Math.floor(Math.random() * MAX_VALUE);
}
console.timeEnd("arrayGeneration");

console.time("arraySort");
arr.sort((a, b) => a - b);
console.timeEnd("arraySort");
