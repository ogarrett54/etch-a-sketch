const container = document.querySelector(".container");
const resetBtn = document.querySelector("#reset");

function createGrid(dimension) {
  for (let i = 0; i < dimension; i++) {
    const row = document.createElement("div");
    row.className = "row";
    for (let j = 0; j < dimension; j++) {
      const cell = document.createElement("div");
      cell.className = "cell";
      cell.style.height = String(640 / dimension) + "px";
      cell.style.width = String(640 / dimension) + "px";
      row.appendChild(cell);
      cell.addEventListener("mouseover", () => {
        cell.style.backgroundColor = "black";
      });
    }
    container.appendChild(row);
  }
}

resetBtn.addEventListener("click", () => {
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.style.backgroundColor = "white";
  });
});

// Set up a default 16x16 grid
createGrid(16);
