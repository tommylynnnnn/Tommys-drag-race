// Add your queens here
const ALL_QUEENS = [
    "Alaska",
    "Alyssa Edwards",
    "Bob the Drag Queen",
    "Katya",
    "Sasha Velour",
    "Bianca Del Rio",
    "Jinkx Monsoon"
];

const grid = document.getElementById("queen-grid");
const search = document.getElementById("search");

// Render queen cards
function renderQueens(filter = "") {
    grid.innerHTML = "";

    ALL_QUEENS
        .filter(name => name.toLowerCase().includes(filter.toLowerCase()))
        .forEach(name => {
            const card = document.createElement("div");
            card.className = "queen-card";
            card.dataset.name = name;

            card.textContent = name;

            card.addEventListener("click", () => {
                card.classList.toggle("selected");
            });

            grid.appendChild(card);
        });
}

renderQueens();

// Search bar filtering
search.addEventListener("input", () => {
    renderQueens(search.value);
});

// Start button
document.getElementById("start-btn").addEventListener("click", () => {
    const selected = [...document.querySelectorAll(".queen-card.selected")]
        .map(card => card.dataset.name);

    if (selected.length < 4 || selected.length > 18) {
        alert("Please select between 4 and 18 queens.");
        return;
    }

    alert("Your cast: " + selected.join(", "));
});
