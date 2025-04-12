const container = document.querySelector(".container");
const resetBtn = document.querySelector("#reset");
const dimensionInput = document.querySelector("#dimension-input");
const submitBtn = document.querySelector("#submit");

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
      cell.addEventListener("mousedown", () => {
        cell.style.backgroundColor = "black";
      });
      cell.addEventListener("mouseover", (e) => {
        if (e.buttons === 1) {
          cell.style.backgroundColor = "black";
        }
      });
    }
    container.appendChild(row);
  }
}

function clearGrid() {
  container.innerHTML = "";
}

resetBtn.addEventListener("click", () => {
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.style.backgroundColor = "white";
  });
});

submitBtn.addEventListener("click", () => {
  const inputDimensions = dimensionInput.value;
  console.log(inputDimensions);
  clearGrid();
  createGrid(Number(inputDimensions));
  dimensionInput.value = "";
});

// Set up a default 16x16 grid
createGrid(16);
