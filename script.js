// ====== DATA ======

const ALL_QUEENS = [
    {
        name: "Alaska",
        img: "https://i.pinimg.com/736x/6e/ef/ca/6eefcadaa26067a62884227350d683b8.jpg",
        stats: { acting: 13, comedy: 13, improv: 13, dance: 11, design: 9, lipsync: 12 }
    },
    {
        name: "Alyssa Edwards",
        img: "https://i.pinimg.com/736x/0b/bd/51/0bbd517dfcbcb21aacb0fa05f0af9809.jpg",
        stats: { acting: 9, comedy: 10, improv: 10, dance: 12, design: 9, lipsync: 12 }
    },
    {
        name: "Bob the Drag Queen",
        img: "https://i.pinimg.com/736x/71/19/5a/71195a08be0d3a56bad3427f517901e4.jpg",
        stats: { acting: 13, comedy: 15, improv: 14, dance: 11, design: 7, lipsync: 10 }
    },
    {
        name: "Katya",
        img: "https://i.pinimg.com/736x/e9/0f/f6/e90ff66a78ec1d4bdb7bd06ee320a5d2.jpg",
        stats: { acting: 8, comedy: 12, improv: 10, dance: 15, design: 10, lipsync: 6 }
    },
    {
        name: "Sasha Velour",
        img: "https://i.pinimg.com/736x/7c/6d/a4/7c6da4478b5625c83e74c55a542e5e95.jpg",
        stats: { acting: 11, comedy: 14, improv: 13, dance: 11, design: 11, lipsync: 11 }
    },
    {
        name: "Bianca Del Rio",
        img: "https://i.pinimg.com/736x/26/43/61/264361d07c867a88630c4a4986d0c3b3.jpg",
        stats: { acting: 11, comedy: 12, improv: 12, dance: 12, design: 14, lipsync: 9 }
    },
    {
        name: "Jinkx Monsoon",
        img: "https://i.pinimg.com/736x/18/c1/d1/18c1d14cdcdf348000446f1a1cfb8e8b.jpg",
        stats: { acting: 12, comedy: 14, improv: 13, dance: 11, design: 8, lipsync: 11 }
    },
    {
        name: "Onya Nurve",
        img: "https://i.pinimg.com/736x/a7/04/a1/a704a15997585ec88a4d24f4ab1db791.jpg",
        stats: { acting: 13, comedy: 13, improv: 13, dance: 12, design: 8, lipsync: 14 }
    },
    {
        name: "Myki Meeks",
        img: "https://i.pinimg.com/736x/b9/76/6a/b9766aedded3bc2ebcac17b8a6b3cbde.jpg",
        stats: { acting: 13, comedy: 14, improv: 14, dance: 9, design: 11, lipsync: 13 }
    },
    {
        name: "Darlene Mitchell",
        img: "https://i.pinimg.com/736x/14/6d/51/146d51b7e40f4d8988775617d42a8151.jpg",
        stats: { acting: 12, comedy: 12, improv: 12, dance: 6, design: 11, lipsync: 8 }
    },
    {
        name: "Nini Coco",
        img: "https://i.pinimg.com/736x/b5/1e/6a/b51e6aa16ea992aa267a435831919304.jpg",
        stats: { acting: 8, comedy: 7, improv: 8, dance: 9, design: 10, lipsync: 12 }
    },
    {
        name: "Jane Don't",
        img: "https://i.pinimg.com/736x/21/96/83/2196830d84a99a963de849a8501f0772.jpg",
        stats: { acting: 13, comedy: 10, improv: 12, dance: 15, design: 11, lipsync: 12 }
    },
    {
        name: "Juicy Love Dion",
        img: "https://i.pinimg.com/736x/c1/a9/d9/c1a9d95922919fc9fc361072247c7a84.jpg",
        stats: { acting: 6, comedy: 5, improv: 6, dance: 9, design: 10, lipsync: 11 }
    }
];

// ====== CHALLENGES ======

const CHALLENGES = [
    // PERFORMANCE
    "Acting",
    "Comedy",
    "Improv",
    "Dance",
    "Rusical",
    "Girl Groups",
    "Talent Show",
    "Lip Sync Smackdown",

    // DESIGN
    "Design",
    "Makeover",
    "Ball Challenge",

    // WRITING / SPEAKING
    "Roast",
    "Roast Battle",
    "Stand-Up",
    "RDR Live",
    "Commercial",
    "Branding",

    // MUSIC
    "Songwriting",
    "Music Video",

    // OTHER
    "Snatch Game",
    "Marketing Challenge",
    "Hosting Challenge"
];

// ====== DOM ======

const grid = document.getElementById("queen-grid");
const overlay = document.getElementById("episode-overlay");
const episodeContent = document.getElementById("episode-content");
const episodeContinueBtn = document.getElementById("episode-continue-btn");
const episodeQueensContainer = document.getElementById("episode-queens");

// ====== RENDER QUEENS ======

function renderQueens() {
    grid.innerHTML = "";

    // Update queen count
    document.getElementById("queen-count").textContent =
        `Available Queens: ${ALL_QUEENS.length}`;
    
    ALL_QUEENS
        .slice()
        .sort((a, b) => a.name.localeCompare(b.name))
        .forEach(q => {
            const card = document.createElement("div");
            card.className = "queen-card";
            card.dataset.name = q.name;

            card.innerHTML = `
                <img src="${q.img}" alt="${q.name}">
                <p>${q.name}</p>
                <div class="stats-box">
                    <p><strong>Comedy:</strong> ${q.stats.comedy}</p>
                    <p><strong>Acting:</strong> ${q.stats.acting}</p>
                    <p><strong>Improv:</strong> ${q.stats.improv}</p>
                    <p><strong>Dance:</strong> ${q.stats.dance}</p>
                    <p><strong>Design:</strong> ${q.stats.design}</p>
                    <p><strong>Lip Sync:</strong> ${q.stats.lipsync}</p>
                </div>
            `;

            card.addEventListener("click", () => card.classList.toggle("selected"));
            grid.appendChild(card);
        });
}

renderQueens();

// SEARCH
document.getElementById("search").addEventListener("input", (e) => {
    const term = e.target.value.toLowerCase();
    document.querySelectorAll(".queen-card").forEach(card => {
        card.style.display = card.dataset.name.toLowerCase().includes(term) ? "block" : "none";
    });
});

// ====== STATE ======

let currentCast = [];
let seasonQueens = [];
let episodeNumber = 1;
let episodeStep = 0;
let currentChallenge = null;
let currentJudging = null;
let currentBottom2 = null;
let currentLipSyncResult = null;
let isFinale = false;

let trackRecord = {}; // { queenName: ["WIN", "HIGH", ...] }

// ====== HELPERS ======

function getRandomChallenge() {
    return CHALLENGES[Math.floor(Math.random() * CHALLENGES.length)];
}

function scoreQueen(q, type) {
    const s = q.stats;
    let base = 0;

    switch (type) {
        case "Acting":
        case "RDR Live":
            base = s.acting + s.improv + s.comedy;
            break;

        case "Comedy":
        case "Roast":
        case "Roast Battle":
        case "Stand-Up":
            base = s.comedy + s.improv;
            break;

        case "Improv":
        case "Snatch Game":
            base = s.improv + s.comedy + s.acting;
            break;

        case "Dance":
        case "Girl Groups":
        case "Music Video":
            base = s.dance + s.lipsync;
            break;

        case "Rusical":
        case "Talent Show":
            base = s.acting + s.dance + s.lipsync;
            break;

        case "Design":
        case "Makeover":
        case "Ball Challenge":
            base = s.design + s.acting;
            break;

        case "Commercial":
        case "Branding":
        case "Marketing Challenge":
        case "Hosting Challenge":
            base = s.acting + s.comedy + s.improv;
            break;

        case "Songwriting":
            base = s.comedy + s.improv + s.lipsync;
            break;

        case "Lip Sync Smackdown":
            base = s.lipsync + s.dance;
            break;

        default:
            base = s.acting + s.comedy;
    }

    return base + (Math.floor(Math.random() * 10) - 5);
}

function judgeQueens(cast, type) {
    const scored = cast.map(q => ({ queen: q, score: scoreQueen(q, type) }))
                       .sort((a, b) => b.score - a.score);

    const winner = scored[0].queen;
    const bottom2 = [scored[scored.length - 1].queen, scored[scored.length - 2].queen];

    const remaining = scored.slice(1, scored.length - 2).map(s => s.queen);

    let high = [], low = [], safe = [];

    if (remaining.length <= 2) {
        safe = remaining;
    } else {
        high = remaining.slice(0, 2);
        low = remaining.slice(-2);
        safe = remaining.slice(2, remaining.length - 2);
    }

    return { winner, high, safe, low, bottom2 };
}

function lipSync(btm2) {
    const [q1, q2] = btm2;
    const s1 = q1.stats.lipsync + (Math.random() * 6 - 3);
    const s2 = q2.stats.lipsync + (Math.random() * 6 - 3);
    return s1 >= s2 ? { winner: q1, eliminated: q2 } : { winner: q2, eliminated: q1 };
}

function eliminateFromCast(cast, q) {
    return cast.filter(x => x.name !== q.name);
}

function showOverlay() { overlay.classList.remove("hidden"); }
function hideOverlay() { overlay.classList.add("hidden"); }

function setEpisodeText(text, queens = []) {
    episodeContent.innerHTML = text;
    episodeQueensContainer.innerHTML = "";

    queens.forEach(q => {
        const img = document.createElement("img");
        img.src = q.img;
        img.className = "episode-queen-img";
        episodeQueensContainer.appendChild(img);
    });
}

// ====== TRACK RECORD ======

function initTrackRecord() {
    trackRecord = {};
    seasonQueens.forEach(q => trackRecord[q.name] = []);
}

function updateTrackRecordEpisode(j, bottom2, eliminated) {
    seasonQueens.forEach(q => {
        let p = "—";

        if (q.name === eliminated.name) p = "ELIM";
        else if (q.name === j.winner.name) p = "WIN";
        else if (bottom2.some(b => b.name === q.name)) p = "BTM2";
        else if (j.high.some(h => h.name === q.name)) p = "HIGH";
        else if (j.low.some(l => l.name === q.name)) p = "LOW";
        else if (j.safe.some(s => s.name === q.name)) p = "SAFE";

        trackRecord[q.name].push(p);
    });
}

function updateTrackRecordFinale(winner, runnerUp, cutQueen) {
    seasonQueens.forEach(q => {
        let p = "—";

        if (q.name === winner.name) p = "WIN";
        else if (q.name === runnerUp.name) p = "RUNNER-UP";
        else if (q.name === cutQueen.name) p = "ELIM";

        trackRecord[q.name].push(p);
    });
}

function updateTrackRecordFinale(winner, runnerUp, cutQueen) {
    seasonQueens.forEach(q => {
        let p = "—";
        if (q.name === winner.name) p = "WIN";
        else if (q.name === runnerUp.name) p = "RUNNER-UP";
        else if (q.name === cutQueen.name) p = "ELIM";
        trackRecord[q.name].push(p);
    });
}

function renderTrackRecordCards() {
    const container = document.createElement("div");
    container.className = "track-record-container";

    seasonQueens.forEach(q => {
        const card = document.createElement("div");
        card.className = "track-card";

        const img = document.createElement("img");
        img.src = q.img;
        img.className = "track-card-img";

        const nameEl = document.createElement("div");
        nameEl.className = "track-card-name";
        nameEl.textContent = q.name;

        const placements = document.createElement("div");
        placements.className = "track-card-placements";

        trackRecord[q.name].forEach(p => {
            const badge = document.createElement("span");
            badge.className = "track-badge track-" + p.toLowerCase();
            badge.textContent = p;
            placements.appendChild(badge);
        });

        card.appendChild(img);
        card.appendChild(nameEl);
        card.appendChild(placements);
        container.appendChild(card);
    });

    episodeContent.appendChild(container);
}

// ====== SEASON CONTROL ======

function startSeason() {
    const selected = [...document.querySelectorAll(".queen-card.selected")].map(c => c.dataset.name);

    if (selected.length < 4 || selected.length > 18) {
        alert("Please select between 4 and 18 queens.");
        return;
    }

    currentCast = ALL_QUEENS.filter(q => selected.includes(q.name));
    seasonQueens = [...currentCast];
    initTrackRecord();

    episodeNumber = 1;
    startEpisode();
}

function startEpisode() {
    episodeStep = 0;
    isFinale = currentCast.length === 3;
    currentChallenge = getRandomChallenge();
    currentJudging = null;
    currentBottom2 = null;
    currentLipSyncResult = null;

    showOverlay();
    advanceEpisodeStep();
}

// ====== EPISODE FLOW ======

let finaleCutQueen = null;
let finaleWinner = null;
let finaleRunnerUp = null;

function advanceEpisodeStep() {
    if (isFinale) return advanceFinaleStep();

    switch (episodeStep) {
        case 0:
            setEpisodeText(`<h2>Episode ${episodeNumber}</h2><p>${currentCast.length} queens remain.</p>`, currentCast);
            break;

        case 1:
            setEpisodeText(`<h2>Maxi Challenge</h2><p>This week’s challenge is <strong>${currentChallenge}</strong>!</p>`, currentCast);
            break;

        case 2:
            currentJudging = judgeQueens(currentCast, currentChallenge);
            setEpisodeText(`<h2>Winner</h2><p>🏆 <strong>${currentJudging.winner.name}</strong> wins!</p>`, [currentJudging.winner]);
            break;

        case 3:
            setEpisodeText(`<h2>High</h2><p>${currentJudging.high.map(q => q.name).join(", ") || "None"}</p>`, currentJudging.high);
            break;

        case 4:
            setEpisodeText(`<h2>Safe</h2><p>${currentJudging.safe.map(q => q.name).join(", ") || "None"}</p>`, currentJudging.safe);
            break;

        case 5:
            setEpisodeText(`<h2>Low</h2><p>${currentJudging.low.map(q => q.name).join(", ") || "None"}</p>`, currentJudging.low);
            break;

        case 6:
            currentBottom2 = currentJudging.bottom2;
            setEpisodeText(`<h2>Bottom 2</h2><p>${currentBottom2[0].name} vs ${currentBottom2[1].name}</p>`, currentBottom2);
            break;

        case 7:
            currentLipSyncResult = lipSync(currentBottom2);
            setEpisodeText(`
                <h2>Lip Sync For Your Life</h2>
                <p>${currentBottom2[0].name} vs ${currentBottom2[1].name}</p>
                <p>🎤 <strong>${currentLipSyncResult.winner.name}</strong> wins!</p>
            `, currentBottom2);
            break;

        case 8:
            const eliminated = currentLipSyncResult.eliminated;
            currentCast = eliminateFromCast(currentCast, eliminated);

            updateTrackRecordEpisode(currentJudging, currentBottom2, eliminated);

            setEpisodeText(`
                <h2>Elimination</h2>
                <p>❌ <strong>${eliminated.name}</strong> has been eliminated.</p>
                <p>${currentCast.length} queens remain.</p>
            `, [eliminated]);
            break;

        case 9:
            setEpisodeText(`<h2>Track Record</h2><p>Here is the track record so far:</p>`);
            renderTrackRecordCards();
            break;

        case 10:
            if (currentCast.length <= 1) {
                location.reload();
                return;
            } else {
                setEpisodeText(`<h2>Next Episode</h2><p>Get ready for Episode ${episodeNumber + 1}…</p>`, currentCast);
            }
            break;

        default:
            episodeNumber++;
            startEpisode();
            return;
    }

    episodeStep++;
}

// ====== FINALE FLOW ======

function advanceFinaleStep() {
    switch (episodeStep) {
        case 0:
            setEpisodeText(`<h2>Finale</h2><p>Our Top 3 queens are ready for the crown.</p>`, currentCast);
            break;

        case 1:
            setEpisodeText(`<h2>Final Challenge</h2><p>The queens face their final challenge…</p>`, currentCast);
            break;

        case 2:
            // Random cut
            const cutIndex = Math.floor(Math.random() * currentCast.length);
            finaleCutQueen = currentCast[cutIndex];
            currentCast = eliminateFromCast(currentCast, finaleCutQueen);

            setEpisodeText(`
                <h2>Top 3 Cut</h2>
                <p>❌ <strong>${finaleCutQueen.name}</strong> has been cut.</p>
                <p>The final 2 will now lip sync for the crown.</p>
            `, [finaleCutQueen]);
            break;

        case 3:
            const final2 = [...currentCast];
            const finalResult = lipSync(final2);

            finaleWinner = finalResult.winner;
            finaleRunnerUp = finalResult.eliminated;

            currentCast = [finaleWinner];

            updateTrackRecordFinale(finaleWinner, finaleRunnerUp, finaleCutQueen);

            setEpisodeText(`
                <h2>Lip Sync For The Crown</h2>
                <p>${final2[0].name} vs ${final2[1].name}</p>
                <p>👑 <strong>${finaleWinner.name}</strong> wins the final lip sync!</p>
            `, final2);
            break;

        case 4:
            setEpisodeText(`
                <h2>Season Winner</h2>
                <p>👑 <strong>${finaleWinner.name}</strong> is the winner of the season!</p>
            `, [finaleWinner]);
            break;

        case 5:
            setEpisodeText(`
                <h2>Final Track Record</h2>
                <p>Here is the final track record for the season:</p>
            `);
            renderTrackRecordCards();
            break;

        case 6:
            // Auto-refresh after finale
            location.reload();
            return;

        default:
            location.reload();
            return;
    }

    episodeStep++;
}

// ====== EVENT LISTENERS ======

document.getElementById("start-btn").addEventListener("click", startSeason);
episodeContinueBtn.addEventListener("click", advanceEpisodeStep);

