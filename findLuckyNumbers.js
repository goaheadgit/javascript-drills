function findLuckyNums(n) {
    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    let luckyNums = []
    for(let i =0; i < n; i++){
        let q = Math.floor(Math.random() * array.length);
        luckyNums.push(array[q]);
        array.splice(q, 1);
    
    }
    return luckyNums;
}
findLuckyNums(4)
console.log(luckyNums)