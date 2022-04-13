function challengeIsPalindrome(palindrome){
    let testWord = palindrome.split("")
    let reverseWord = []
    for(let i = testWord.length -1; i >= 0; i--){
        reverseWord.push(testWord[i])
    }
    console.log(reverseWord)
    console.log(testWord)
    if(testWord.join(",") == reverseWord.join(",")){
        console.log("This is a palindrome.")
    }
    else{
        console.log("This is garbage.")
    }
}
challengeIsPalindrome("noon")



