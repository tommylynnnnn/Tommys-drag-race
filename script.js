// Add your queens + image links here
const ALL_QUEENS = [
    { name: "Alaska", img: "https://i.pinimg.com/736x/6e/ef/ca/6eefcadaa26067a62884227350d683b8.jpg" },
    { name: "Alyssa Edwards", img: "IMAGE_URL_HERE" },
    { name: "Bob the Drag Queen", img: "IMAGE_URL_HERE" },
    { name: "Katya", img: "IMAGE_URL_HERE" },
    { name: "Sasha Velour", img: "IMAGE_URL_HERE" },
    { name: "Bianca Del Rio", img: "IMAGE_URL_HERE" },
    { name: "Jinkx Monsoon", img: "IMAGE_URL_HERE" }
];

const grid = document.getElementById("queen-grid");
const search = document.getElementById("search");

// Render queen cards
function renderQueens(filter = "") {
    grid.innerHTML = "";

    ALL_QUEENS
        .filter(q => q.name.toLowerCase().includes(filter.toLowerCase()))
        .forEach(q => {
            const card = document.createElement("div");
            card.className = "queen-card";
            card.dataset.name = q.name;

            card.innerHTML = `
                <img src="${q.img}" alt="${q.name}">
                <p>${q.name}</p>
            `;

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
