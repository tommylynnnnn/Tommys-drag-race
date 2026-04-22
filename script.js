// List of queens you can add to
const ALL_QUEENS = [
    "Alaska", "Alyssa Edwards", "Bob the Drag Queen", "Katya",
    "Sasha Velour", "Bianca Del Rio", "Jinkx Monsoon"
];

// Where the checkboxes will appear
const queenListDiv = document.getElementById("queen-list");

// Create a checkbox for each queen
ALL_QUEENS.forEach(q => {
    const label = document.createElement("label");
    const checkbox = document.createElement("input");

    checkbox.type = "checkbox";
    checkbox.value = q;

    label.appendChild(checkbox);
    label.append(" " + q);

    queenListDiv.appendChild(label);
});

// When the user clicks "Start Simulation"
document.getElementById("start-btn").addEventListener("click", () => {
    const selected = [...document.querySelectorAll("input[type=checkbox]:checked")]
        .map(cb => cb.value);

    if (selected.length < 4 || selected.length > 18) {
        alert("Please select between 4 and 18 queens.");
        return;
    }

    alert("Your cast: " + selected.join(", "));
});
