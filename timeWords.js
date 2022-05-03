// Write a function that turns a string of 24-hour time into words. Handle noon and midnight specially ("midnight" and "noon"). Otherwise, convert times to text. Add "am" and "pm" appropriately.
function timeWord(time) {
    let minuteWord =["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    let minuteWordHigh = ["twenty", "thirty", "forty", "fifty"];
    let hourWord = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve"];
    
    let hour = +time.slice(0,2);
    let minute = +time.slice(3, 5);
    let finalAnswer = []
    if(hour === 0 && minute === 0) { //printing special rules for midnight and noon
        return 'midnight';}
        else if(hour ===12 && minute === 0) {
            return 'noon';}
    
    if(hour < 12) { //handling 24-hour time
        finalAnswer.push(hourWord[hour])}
        else{
            finalAnswer.push(hourWord[hour - 12])}

    if(minute === 0){
        finalAnswer.push("o'clock")}
    else if(minute < 10) {
        finalAnswer.push("oh" + minuteWord[minute])}
    else if(minute < 20) {
        finalAnswer.push(minuteWord[minute])}
    else if(minute >= 20) {
        if}

    if(hour < 12){
        finalAnswer.push("am")}
    else{
        finalAnswer.push("pm")}
    console.log(finalAnswer.join())
}

console.log(timeWord("11:40"))