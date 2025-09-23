const learnMap = new Map([]);


learnMap.set('js', 'JavaScript');
learnMap.set('py', 'Python');
learnMap.set('rb', 'Ruby');
// console.log(learnMap);

learnMap.get('js'); // 'JavaScript'


// console.log(learnMap.entries())


const learnSet = new Set(['js', 'py', 'rb']);
console.log(learnSet);

learnSet.add('java');
console.log(learnSet);


let text = ''

learnSet.forEach((value) => {

    text += value + ' ,'
})
console.log(text);

for (let x of learnSet) {
    console.log(x + 1);
}