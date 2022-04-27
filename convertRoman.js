// Write a function in romanNumerals.js that converts an integer (<= 1,000) to its Roman numeral equivalent.

const romanMatrix = [
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I']
  ];
  
  const convertRoman = num => {
    if (num === 0){
      return ''
    }
    for(let i = 0; i < romanMatrix.length; i++){
      if (num >= romanMatrix[i][0]){
        return romanMatrix[i][1] + convertRoman(num - romanMatrix[i][0])
      }
    }
  }
  console.log(convertRoman())  