const cells = document.querySelectorAll(".cell");
const resetButton = document.getElementById("resetButton");
let currentPlayer = "X";
let moveCount = 0;
const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

cells.forEach(cell => {
    cell.addEventListener("click", () => {
        if (cell.textContent !== "") {
            return;
        }
        moveCount++;
        cell.textContent = currentPlayer;
        setTimeout (() => {
            const winner = isWinner();
            if (winner) {
                alert(`Player ${currentPlayer} Wins! 🥳`)
            } else if (!winner && moveCount == 9) {
                alert("It's a draw! 🤝");
            } else {
                currentPlayer = (currentPlayer === "X") ? "O" : "X"
            }
        }, 50)
    })
})

var isWinner = function () {
    for (let combination of winningCombinations) {
        let [c1, c2, c3] = combination;
        let cell1 = cells[c1].textContent;
        let cell2 = cells[c2].textContent;
        let cell3 = cells[c3].textContent;

        if (cell1 !== "" && (cell1 === cell2) && (cell2 === cell3)) {
            return true;
        }
    }
    return false;
}

resetButton.addEventListener("click", () => {
    cells.forEach(cell => {
        cell.textContent = "";
    })
    currentPlayer = "X";
    moveCount = 0;
})