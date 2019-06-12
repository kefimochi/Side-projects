const readLine = require("readline-sync");

let turns = ["", "", "", "", "", "", "", "", ""];

game();
function game() {
  let active = true;
  let player = "O";
  let input = "";

  console.log("Welcome to the Tic Tac Toe game!");
  while (active) {
    console.log("Player " + player + ", please pick a position.");

    let gettingInput = true;

    while (gettingInput) {
      input = getUserInput();

      if (input === -1) {
        console.log("Please try again! Wrong input.");
      } else if (!recordTurns(player, input)) {
        console.log("Please try again! This space is already taken.");
      } else {
        gettingInput = false;
      }
    }

    display(player, input);
    if (checkForWinner(player)) {
      //Player is a STRING "X" or "O"
      active = false;
      console.log("Player " + player + " has won!");
      console.log("End of the game!"); //return true
    } else if (checkForDraw()) {
      active = false;
      console.log("Its a DRAW!");
      console.log("End of the game!"); //return true
    } else {
      player = player === "O" ? "X" : "O";
    }
  }
}

function getUserInput() {
  let str = readLine.question("Enter a position (1-9):");
  if (isNaN(str)) return -1;
  str = parseInt(str);
  if (str < 1 || str > 9) return -1;
  return str;
}

// Returns boolean whether or not the turn was recorded on a non-occupied spot
function recordTurns(player, turnIndex) {
  if (checkInput(turnIndex)) {
    turns[turnIndex - 1] = player;
    return true;
  }
  return false;
}

function checkInput(turnIndex) {
  return turns[turnIndex - 1] === "";
}

function display(player, turnIndex) {
  console.log("Player " + player + " made a move on " + +turnIndex + " index");
  console.log("Here's a current table:");
  console.log(turns[0], turns[1], turns[2]);
  console.log(turns[3], turns[4], turns[5]);
  console.log(turns[6], turns[7], turns[8]);
}

function checkForDraw() {
  // Return false if 1+ strings are empty
  for (let i = 0; i < 9; i++) {
    if (turns[i] === "") {
      return false;
    }
  }
  return true;
}

function checkForWinner(player) {
  /*
['0', '1', '2',
'3', '4', '5',
'6', '7', '8']; */

  // Check rows.
  for (let i = 0; i < 3; i++) {
    if (
      turns[i] === player &&
      turns[i + 3] === player &&
      turns[i + 6] === player
    )
      return true;
  }
  // Check columns.
  for (let i = 0; i < 3; i++) {
    let index = i * 3;
    if (
      turns[index] === player &&
      turns[index + 1] === player &&
      turns[index + 2] === player
    )
      return true;
  }

  // Check diagnols.
  if (turns[0] === player && turns[4] === player && turns[8] === player)
    return true;
  if (turns[2] === player && turns[4] === player && turns[6] === player)
    return true;
  return false;
}
