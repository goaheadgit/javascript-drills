function reverseNumber(number) {
    let revNumber = 0;
    while (number > 0) {
      revNumber = (revNumber * 10) + (number % 10);
      // console.log(revNumber)
      number = Math.floor(number / 10);
    }
    return revNumber;
  }
  console.log(reverseNumber(8076));
  
  