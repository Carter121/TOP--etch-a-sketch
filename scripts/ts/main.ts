//* Elements
const gridContainerEl = document.querySelector<HTMLElement>(".gridContainer");
let squares: any;

//* size
let size = 16;

//* Inputs
const resetBtn = document.querySelector<HTMLElement>(".resetBtn");

//* Create default grid
createGrid(size);

//* Create a 2d grid based on input number
function createGrid(size: number) {
	gridContainerEl.innerHTML = "";
	gridContainerEl.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
	for (let i = 0; i < size * size; i++) {
		gridContainerEl.innerHTML += "<div class='gridSquare'></div>";
	}
	squares = document.querySelectorAll<HTMLElement>(".gridSquare");
	addHoverEffect();
}

//* adds the hover effect for each square
function addHoverEffect() {
	squares.forEach((el: Element) => {
		const square = el;
		square.addEventListener("mouseover", () => {
			square.classList.add("colored");
		});
	});
}

//* reset button and ask for new grid number
resetBtn.addEventListener("click", () => {
	let newSize = prompt("New size for grid", "16");
	if (newSize >= "100") {
		squares.forEach((el: Element) => {
			el.classList.remove("colored");
		});
		createGrid(parseInt(newSize));
	}
});
