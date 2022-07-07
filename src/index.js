const str = 'abcbvdacaj';
const dictionary = {};
let max = '';
for (const s of str) {
    if (!dictionary[s]) {
        dictionary[s] = 1;
    }
    else {
        dictionary[s] += 1;
    }
}
for (const [key, value] of Object.entries(dictionary)) {
    if (value > dictionary[max])
        max = key;
}
console.log(max);
//# sourceMappingURL=index.js.map