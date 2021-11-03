let scores = [10, 20, 10];

let i = 0;

while (i < scores.length) {
    scores[i]++;
    i++;
}
console.log(scores);

for (let j = 0; j < 3; j++) {
    scores[j]++;
}
console.log(scores);

scores.forEach(function(entry, index) {
    scores[index]++;
});
console.log(scores);

let catalog = [{
        title: 'JS for Beginners',
        author: 'Benjamin',
        copies: 1,
    },
    {
        title: 'HTML for Beginners',
        author: 'cigan',
        copies: 1,
    },
    {
        title: 'CSS for Beginners',
        author: 'adolf',
        copies: 1,
    }
];

catalog.forEach(function(entry) {
    if (entry.authpr == 'Benjamin') {
        entry.copies++;
    }
});

console.log(catalog);
