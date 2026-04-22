const ALL_QUEENS = [
    {
    name: "Alaska",
    img: "https://i.pinimg.com/736x/6e/ef/ca/6eefcadaa26067a62884227350d683b8.jpg",
    stats: {
        acting: 13,
        comedy: 13,
        improv: 13,
        dance: 11,
        design: 9,
        lipsync: 12
    }
},

    {
    name: "Alyssa Edwards",
    img: "https://i.pinimg.com/736x/0b/bd/51/0bbd517dfcbcb21aacb0fa05f0af9809.jpg",
    stats: {
        acting: 9,
        comedy: 10,
        improv: 10,
        dance: 12,
        design: 9,
        lipsync: 12
    }
},

    {
    name: "Bob the Drag Queen",
    img: "https://i.pinimg.com/736x/71/19/5a/71195a08be0d3a56bad3427f517901e4.jpg",
    stats: {
        acting: 13,
        comedy: 15,
        improv: 14,
        dance: 11,
        design: 7,
        lipsync: 10
    }
},
    
    {
    name: "Katya",
    img: "https://i.pinimg.com/736x/e9/0f/f6/e90ff66a78ec1d4bdb7bd06ee320a5d2.jpg",
    stats: {
        acting: 8,
        comedy: 12,
        improv: 10,
        dance: 15,
        design: 10,
        lipsync: 6
    }
},

    {
    name: "Sasha Velour",
    img: "https://i.pinimg.com/736x/7c/6d/a4/7c6da4478b5625c83e74c55a542e5e95.jpg",
    stats: {
        acting: 11,
        comedy: 14,
        improv: 13,
        dance: 11,
        design: 11,
        lipsync: 11
    }
},
    
    {
    name: "Bianca Del Rio",
    img: "https://i.pinimg.com/736x/26/43/61/264361d07c867a88630c4a4986d0c3b3.jpg",
    stats: {
        acting: 11,
        comedy: 12,
        improv: 12,
        dance: 12,
        design: 14,
        lipsync: 9
    }
},

    {
    name: "Jinkx Monsoon",
    img: "https://i.pinimg.com/736x/18/c1/d1/18c1d14cdcdf348000446f1a1cfb8e8b.jpg",
    stats: {
        acting: 12,
        comedy: 14,
        improv: 13,
        dance: 11,
        design: 8,
        lipsync: 11
    }
},

    {
    name: "Onya Nurve",
    img: "https://i.pinimg.com/736x/a7/04/a1/a704a15997585ec88a4d24f4ab1db791.jpg",
    stats: {
        acting: 13,
        comedy: 13,
        improv: 13,
        dance: 12,
        design: 8,
        lipsync: 14
    }
}
    
];

const grid = document.getElementById("queen-grid");

function renderQueens() {
    grid.innerHTML = "";

    ALL_QUEENS.forEach(q => {
        const card = document.createElement("div");
        card.className = "queen-card";
        card.dataset.name = q.name;

        card.innerHTML = `
    <img src="${q.img}" alt="${q.name}">
    <p>${q.name}</p>

    <div class="stats-box">
        ${q.stats ? `
            <p><strong>Comedy:</strong> ${q.stats.comedy}</p>
            <p><strong>Acting:</strong> ${q.stats.acting}</p>
            <p><strong>Improv:</strong> ${q.stats.improv}</p>
            <p><strong>Dance:</strong> ${q.stats.dance}</p>
            <p><strong>Design:</strong> ${q.stats.design}</p>
            <p><strong>Lip Sync:</strong> ${q.stats.lipsync}</p>
        ` : `<p>No stats yet</p>`}
    </div>
`;


        card.addEventListener("click", () => {
            card.classList.toggle("selected");
        });

        grid.appendChild(card);
    });
}


renderQueens();

document.getElementById("start-btn").addEventListener("click", () => {
    const selected = [...document.querySelectorAll(".queen-card.selected")]
        .map(card => card.dataset.name);

    if (selected.length < 4 || selected.length > 18) {
        alert("Please select between 4 and 18 queens.");
        return;
    }

    alert("Your cast: " + selected.join(", "));
});

document.getElementById("search").addEventListener("input", (e) => {
    const term = e.target.value.toLowerCase();

    document.querySelectorAll(".queen-card").forEach(card => {
        const name = card.dataset.name.toLowerCase();
        card.style.display = name.includes(term) ? "block" : "none";
    });
});

document.getElementById("start-btn").addEventListener("click", () => {
    const selected = [...document.querySelectorAll(".queen-card.selected")]
        .map(card => card.dataset.name);

    if (selected.length < 4 || selected.length > 18) {
        alert("Please select between 4 and 18 queens.");
        return;
    }

    alert("Your cast: " + selected.join(", "));
});

