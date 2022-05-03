const tripTime = (arr) => {
    const result = {
        avgSpeedLimits: [], 
        segmentTimes: [], 
        totalTime: null
    };
    let traffic = 0;
    for(let i = 0; i < arr.length; i++) {
      const speedLimits = arr[i].speedLimits;
      let segmentTime = 0;
      let speedLimit = 0;
      for(let j = 0; j < speedLimits.length; j++) {
        speedLimit += speedLimits[j].speedLimit;
        segmentTime += speedLimits[j].distance / speedLimits[j].speedLimit;
      }
      result.avgSpeedLimits.push(speedLimit / speedLimits.length | 0);
      result.segmentTimes.push(segmentTime | 0);
      traffic += arr[i].traffic;
    }
    traffic /= 60;
    result.totalTime += result.segmentTimes.reduce((a, c) => a + c);
    result.totalTime += traffic;
    return result;
  }
  
  
  const stops = [
      {
          name: `Gus's Gas`, 
          speedLimits: [
              {
                  distance: 5,
                  speedLimit: 45
              },
              {
                  distance: 97,
                  speedLimit: 65
              },
              {
                  distance: 72,
                  speedLimit: 70
              },
              {
                  distance: 25,
                  speedLimit: 50
              }
          ], 
          traffic: 12
      }, 
      {
          name: `Halle's House of Pancakes`, 
          speedLimits: [
              {
                  distance: 36,
                  speedLimit: 50
              },
              {
                  distance: 141,
                  speedLimit: 75
              }
          ], 
          traffic: 0
      }, 
      {
          name: `Jake's Great Shakes`, 
          speedLimits: [
              {
                  distance: 100,
                  speedLimit: 75
              },
              {
                  distance: 84,
                  speedLimit: 70
              },
              {
                  distance: 20,
                  speedLimit: 75
              }
          ], 
          traffic: 30
      }, 
      {
          name: `Luna's Lunch Counter`, 
          speedLimits: [
              {
                  distance: 3,
                  speedLimit: 35
              },
              {
                  distance: 5,
                  speedLimit: 45
              },
              {
                  distance: 20,
                  speedLimit: 65
              },
              {
                  distance: 85,
                  speedLimit: 75
              },
              {
                  distance: 3,
                  speedLimit: 65
              },
              {
                  distance: 5,
                  speedLimit: 55
              }
          ], 
          traffic: 7
      }, 
  
  ]
  
  
  console.log(tripTime(stops));