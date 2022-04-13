const uniqChar = word => {
    lowerWord = word.toLowerCase()
    let newWord = new Set(lowerWord)
    newWord = Array.from(newWord)
    console.log(newWord.join(''))
  }
  
  uniqChar("cheese")