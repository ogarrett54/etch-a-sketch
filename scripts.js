const container = document.querySelector(".container");

for (let i = 0; i < 16 * 16; i++) {
  const cell = document.createElement("div");
  cell.className = "cell";
  container.appendChild(cell);
  console.log(i);
}
