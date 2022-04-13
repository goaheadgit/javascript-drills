let stocksArr = [2, 3, 10, 6, 4, 8, 1];
let bestProfit = 0;

function best(stocksArr){
    let maxProfit = [];
    for(i = 1; i < stocksArr.length; i++){
        for(h = 0; h < i; h++){
            maxProfit.push(stocksArr[i] - stocksArr[h])
        }
    }
    bestProfit = Math.max(...maxProfit) 
}
best(stocksArr);
console.log(bestProfit)