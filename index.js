function knightMoves(start, end) {
  const boardSize = 8;
  
  // All 8 possible moves for a knight
  const directions = [
    [2, 1], [2, -1], [-2, 1], [-2, -1],
    [1, 2], [1, -2], [-1, 2], [-1, -2]
  ];

  // Helper to check if a square is within board boundaries
  const isValid = (x, y) => x >= 0 && x < boardSize && y >= 0 && y < boardSize;

  // BFS Queue stores [current_position, path_taken_to_get_there]
  const queue = [[start, [start]]];
  const visited = new Set();
  visited.add(start.toString());

  while (queue.length > 0) {
    const [current, path] = queue.shift();
    const [x, y] = current;

    // Check if we reached the destination
    if (x === end[0] && y === end[1]) {
      console.log(`=> You made it in ${path.length - 1} moves! Here's your path:`);
      path.forEach(pos => console.log(pos));
      return path;
    }

    // Explore next possible moves
    for (const [dx, dy] of directions) {
      const nextX = x + dx;
      const nextY = y + dy;
      const nextPos = [nextX, nextY];

      if (isValid(nextX, nextY) && !visited.has(nextPos.toString())) {
        visited.add(nextPos.toString());
        queue.push([nextPos, [...path, nextPos]]);
      }
    }
  }
}

// Example usage:
knightMoves([3,3],[4,3]);