// There’s a game, “takeaway”, that is played by two players, using a number of stones.
// The first player goes first. She can take 2, 3, or 5 stones from the pool. The second player goes next; she can also remove 2, 3, or 5 stones. The first player then goes, and so on.
// If a player is unable to move (there are fewer than 2 stones), they lose. Imagine that both players have “perfect play” — that is, they always make the best possible move. Then, you can absolutely determine who would win a game with n stones.
// Remember: both players make the best possible moves, so if player #1 has a winning strategy, she will use it (and player #2 will defend as well as possible).
// Write a function which takes one parameter, n, the number of stones in the game. It should return true if the active play could win a game starting with that number of stones and false if not. 

let count = 0

// false means that player 1 can't win, true means they can

const canWin = n => {
    count++
    console.log('canWin invocation', n, count)
    // none of the legal moves are under two
    if (n < 2) {
        return false
    }

    let legalMoves = [2, 3, 5]

    // if canWin is false for the opponent, then we win
    // legalMoves.forEach(move => {
    //     if(n-move >= 0){
    //         if (!canWin(n - move)) {
    //             return true
    //         }
    //     }
    // })

    for(let i = 0; i < legalMoves.length; i++){
        // console.log('Iteration:', count, n, legalMoves[i])
        if (!canWin(n - legalMoves[i])) {
            return true
        }
    }

    // if we can't win from above, we lose
    return false
}

console.log(canWin(2))