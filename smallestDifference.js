const smallestDifference = (arr1, arr2) => {
    let answer = 100
    // let differences = []
  
    for(i = 0; i < arr1.length; i++){
      for (let j = 0; j < arr2.length; j++){
      ((arr2[j] - arr1[i]) > 0) && ((arr2[j] - arr1[i]) < answer) ? answer = arr2[j] - arr1[i] : false
      // differences.push(arr1[j]-arr2[i])
      }
    }
    // answer = Math.min(differences)
    // console.log(differences)
    return answer
  }
  
  
  const arr1 = [10, 20, 14, 16, 18]
  const arr2 = [30, 23, 54, 33, 96]
  
  console.log(smallestDifference(arr1, arr2))
  
  //return the smallest difference of numbers in the array
  //answer = 3 because 23 in arr2 and 20 in arr1 = 3 