// https://leetcode.com/problems/minimum-falling-path-sum

const arrMatrix = [[2, 1, 3],
                   [6, 5, 4],
                   [7, 8, 9]]


// loop over each starting row
// Start at the top and work downwards
// Get list of possible next 2-3 moves
// Get list of possible following 5 moves
// find lowest possible sum
// move to next line

const calculateNextMove = (nextMove, followingMoves) => {

}


function fallingPathFum(matrix: number[][]) {
    let lowestSum: number
    // Get each of the starting points
    for(let row = 0; row < matrix[0].length; row++) {
        // consider the matrix[row][column] syntax here
        // Loop to get number of moves
        for(let column = 0; column < matrix.length; column++) {
            // Each time we move we want to determine the next best move
            // To get that we need to find the lowest sum of the next move, and following move
            let highestMoveSum = 0
            const nextMoves = [matrix[row+1][column-1], matrix[row+1][column], matrix[row+1][column+1]]
            const followMoves = [matrix[row+2][column-2], matrix[row+2][column-1], matrix[row+2][column], matrix[row+2][column+1], matrix[row+2][column+2]]

            // Loop over the next moves, and for each one get the lowest sum too figure out the move





        }

    }
}

console.log(
    fallingPathFum(arrMatrix)
)