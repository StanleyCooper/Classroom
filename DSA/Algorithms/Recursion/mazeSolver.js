/*
 * Return a string representing the path through the maze.
 * @param {array} maze
 * @param {array} index The starting point
 */

function mazeSolver(maze, index = [0, 0]) {
    console.log("forward phase:", index);
  
    const currentZone = maze[index[0]][index[1]];
  
    if (currentZone === "e") {
      console.log("base phase:", index);
      return "";
    }
  
    const rightZone = maze[index[0]][index[1] + 1]
      ? maze[index[0]][index[1] + 1]
      : "x";
    const leftZone = maze[index[0]][index[1] - 1]
      ? maze[index[0]][index[1] - 1]
      : "x";
    const upZone = maze[index[0] - 1] ? maze[index[0] - 1][index[1]] : "x";
    const downZone = maze[index[0] + 1] ? maze[index[0] + 1][index[1]] : "x";
  
    if (rightZone === " " || rightZone === "e") {
      maze[index[0]][index[1]] = "o";
      return "R" + mazeSolver(maze, [index[0], index[1] + 1]);
    }
    if (leftZone === " " || leftZone === "e") {
      maze[index[0]][index[1]] = "o";
      return "L" + mazeSolver(maze, [index[0], index[1] - 1]);
    }
    if (downZone === " " || downZone === "e") {
      maze[index[0]][index[1]] = "o";
      return "D" + mazeSolver(maze, [index[0] + 1, index[1]]);
    }
    if (upZone === " " || upZone === "e") {
      maze[index[0]][index[1]] = "o";
      return "U" + mazeSolver(maze, [index[0] - 1, index[1]]);
    }
  }

let mySmallMaze = [
    [' ', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
];

let maze = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];
//mazeSolver(mySmallMaze);
mazeSolver(maze);

module.exports = mazeSolver;