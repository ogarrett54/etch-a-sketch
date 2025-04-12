const container = document.querySelector(".container");
const resetBtn = document.querySelector("#reset");
const dimensionInput = document.querySelector("#dimension-input");
const submitBtn = document.querySelector("#submit");

function chooseRandomColor() {
  const R = 255 * Math.random();
  const G = 255 * Math.random();
  const B = 255 * Math.random();

  return `rgb(${R}, ${G}, ${B})`;
}

function createGrid(dimension) {
  for (let i = 0; i < dimension; i++) {
    const row = document.createElement("div");
    row.className = "row";
    for (let j = 0; j < dimension; j++) {
      const cell = document.createElement("div");
      cell.className = "cell";
      cell.style.height = String(640 / dimension) + "px";
      cell.style.width = String(640 / dimension) + "px";
      cell.style.backgroundColor = "white";
      cell.style.opacity = 1;
      row.appendChild(cell);
      cell.addEventListener("mousedown", () => {
        if (cell.style.backgroundColor !== "white") {
          cell.style.opacity = Number(cell.style.opacity) * 0.9;
        } else {
          cell.style.backgroundColor = chooseRandomColor();
        }
      });
      cell.addEventListener("mouseover", (e) => {
        if (e.buttons === 1) {
          if (cell.style.backgroundColor !== "white") {
            cell.style.opacity = Number(cell.style.opacity) * 0.9;
          } else {
            cell.style.backgroundColor = chooseRandomColor();
          }
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
