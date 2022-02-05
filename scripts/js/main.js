const gridContainerEl = document.querySelector(".gridContainer");
let squares;
let size = 16;
const resetBtn = document.querySelector(".resetBtn");
createGrid(size);
function createGrid(size) {
    gridContainerEl.innerHTML = "";
    gridContainerEl.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    for (let i = 0; i < size * size; i++) {
        gridContainerEl.innerHTML += "<div class='gridSquare'></div>";
    }
    squares = document.querySelectorAll(".gridSquare");
    addHoverEffect();
}
function addHoverEffect() {
    squares.forEach((el) => {
        const square = el;
        square.addEventListener("mouseover", () => {
            square.classList.add("colored");
        });
    });
}
resetBtn.addEventListener("click", () => {
    let newSize = prompt("New size for grid", "16");
    if (newSize >= "100") {
        squares.forEach((el) => {
            el.classList.remove("colored");
        });
        createGrid(parseInt(newSize));
    }
});
//# sourceMappingURL=main.js.map