function hasMoreVowels(word){
    let wordString = word.toString();
    let counter = 0;
    for(i =0; i < wordString.length; i++){
        if(wordString[i] === "a" || wordString[i] === "e" || wordString[i] === "i" || wordString[i] === "o" || wordString[i] === "u" || wordString[i] === "A" || wordString[i] === "E" || wordString[i] === "I" || wordString[i] === "O" || wordString[i] === "U"){
        counter++;}
    }
    console.log(counter " ")
    console.log(wordString.length - counter)
    if((wordString.length - counter) < counter){
        console.log("true");
    }
    else{
        console.log("false");
    }
}
hasMoreVowels("Snorlax")