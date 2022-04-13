function hasUniqueChars(word){
    let wordArray = word.split("")
    for(i = 0; i < wordArray.length; i++){
        wordArray.splice(wordArray[i], 1);
        if(wordArray.find(i) != undefined){
            return false
        }
        else {
            return true
        }
    }
}
console.log(hasUniqueChars("Monday"))