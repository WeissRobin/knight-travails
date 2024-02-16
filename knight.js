const directions = [
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
    [-1, -2],
    [-1, 2],
    [1, 2],
    [1, -2],
];

class Node {
    constructor(row, col, distance) {
        this.row = row;
        this.col = col;
        this.distance = distance;
    }
}

function getNeighbors(row, col) {
    const neighbors = [];

    for (const direction of directions) {
        const newRow = row + direction[0];
        const newCol = col + direction[1];

        // Check if the new position is within the bounds of the chessboard (8x8)
        if (newRow >= 0 && newRow < 8 && newCol >= 0 && newCol < 8) {
            neighbors.push([newRow, newCol]);
        }
    }

    return neighbors;
}

function knightMoves(firstCor, secondCor, visited = new Set()) {
    const [row, col] = firstCor;
    const [finalRow, finalCol] = secondCor;
    const startNode = new Node(row, col, 0);

    let queue = [startNode];

    while (queue.length > 0) {
        const node = queue.shift();
        const { row, col, distance } = node;

        for (const neighbor of getNeighbors(row, col)) {
            const [row, col] = neighbor;

            const newNode = new Node(row, col, distance + 1);

            if(row === finalRow && col === finalCol) {
                console.log(1, newNode);
                console.log(newNode.distance);
                return;
            }

            visited.add([newNode.row, newNode.col]);

            if(!visited.has([newNode.row, newNode.col])) {
                queue.push(newNode);
            }
            console.log(newNode);
        }
    }
}
knightMoves([3,3], [4,3]);