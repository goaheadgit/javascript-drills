// Write a function that takes in a number. It should return a “tower” of *. The tower will be an array of strings.

// The number passed in tells you how many floors the tower should have.

function buildTower(num){
    let tower = ["*"]
    let level = num
    for(i =num; i>0; i--){
        let addAsterisk = num + 2
        
        // tower.push("**")
        // for(h=0; h<i; h++){
        // tower.unshift(" ")
        // }`
    }
    console.log(tower)
}

buildTower(5)