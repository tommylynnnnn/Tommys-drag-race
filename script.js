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
const overlay = document.getElementById("episode-overlay");
const episodeContent = document.getElementById("episode-content");
const episodeContinueBtn = document.getElementById("episode-continue-btn");

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

// SEARCH
document.getElementById("search").addEventListener("input", (e) => {
    const term = e.target.value.toLowerCase();

    document.querySelectorAll(".queen-card").forEach(card => {
        const name = card.dataset.name.toLowerCase();
        card.style.display = name.includes(term) ? "block" : "none";
    });
});

// ====== SIMULATOR ENGINE ======

let currentCast = [];
let episodeNumber = 1;
let episodeStep = 0;
let currentChallenge = null;
let currentScores = null;
let currentJudging = null;
let currentBottom2 = null;
let currentLipSyncResult = null;

const CHALLENGES = [
    "Acting",
    "Comedy",
    "Dance",
    "Design",
    "Improv",
    "Rusical"
];

function getRandomChallenge() {
    return CHALLENGES[Math.floor(Math.random() * CHALLENGES.length)];
}

function scoreQueen(queen, challengeType) {
    const s = queen.stats;
    let base = 0;

    switch (challengeType) {
        case "Acting":
            base = s.acting + s.improv + s.comedy;
            break;
        case "Comedy":
            base = s.comedy + s.improv;
            break;
        case "Dance":
            base = s.dance + s.lipsync;
            break;
        case "Design":
            base = s.design + s.acting;
            break;
        case "Improv":
            base = s.improv + s.comedy + s.acting;
            break;
        case "Rusical":
            base = s.acting + s.dance + s.lipsync;
            break;
        default:
            base = s.acting + s.comedy;
    }

    const random = Math.floor(Math.random() * 10) - 5; // -5 to +4
    return base + random;
}

function judgeQueens(cast, challengeType) {
    const scores = cast.map(q => ({
        queen: q,
        score: scoreQueen(q, challengeType)
    }));

    scores.sort((a, b) => b.score - a.score);

    const winner = scores[0].queen;
    const bottom2 = [scores[scores.length - 1].queen, scores[scores.length - 2].queen];

    const high = scores.slice(1, 3).map(s => s.queen);
    const low = scores.slice(scores.length - 4, scores.length - 2).map(s => s.queen);
    const safe = scores
        .slice(3, scores.length - 4)
        .map(s => s.queen);

    return { scores, winner, high, safe, low, bottom2 };
}

function lipSync(btm2) {
    const [q1, q2] = btm2;
    const s1 = q1.stats.lipsync + (Math.random() * 6 - 3);
    const s2 = q2.stats.lipsync + (Math.random() * 6 - 3);

    if (s1 === s2) {
        return { winner: q1, eliminated: q2 };
    }

    return s1 > s2
        ? { winner: q1, eliminated: q2 }
        : { winner: q2, eliminated: q1 };
}

function eliminateFromCast(cast, queen) {
    return cast.filter(q => q.name !== queen.name);
}

// ====== EPISODE FLOW ======

function showOverlay() {
    overlay.classList.remove("hidden");
}

function hideOverlay() {
    overlay.classList.add("hidden");
}

function setEpisodeText(text) {
    episodeContent.innerHTML = text;
}

function startSeason() {
    const selected = [...document.querySelectorAll(".queen-card.selected")]
        .map(card => card.dataset.name);

    if (selected.length < 4 || selected.length > 18) {
        alert("Please select between 4 and 18 queens.");
        return;
    }

    currentCast = ALL_QUEENS.filter(q => selected.includes(q.name));
    episodeNumber = 1;
    startEpisode();
}

function startEpisode() {
    episodeStep = 0;
    currentChallenge = getRandomChallenge();
    currentScores = null;
    currentJudging = null;
    currentBottom2 = null;
    currentLipSyncResult = null;

    showOverlay();
    advanceEpisodeStep();
}

function advanceEpisodeStep() {
    switch (episodeStep) {
        case 0:
            setEpisodeText(`
                <h2>Episode ${episodeNumber}</h2>
                <p>The competition continues with ${currentCast.length} queens.</p>
            `);
            break;
        case 1:
            setEpisodeText(`
                <h2>Maxi Challenge</h2>
                <p>This week’s maxi challenge is… <strong>${currentChallenge.toUpperCase()}!</strong></p>
            `);
            break;
        case 2:
            setEpisodeText(`
                <h2>Preparation</h2>
                <p>The queens prepare for the ${currentChallenge.toLowerCase()} challenge…</p>
            `);
            break;
        case 3:
            currentJudging = judgeQueens(currentCast, currentChallenge);
            currentScores = currentJudging.scores;
            setEpisodeText(`
                <h2>Performance</h2>
                <p>The queens hit the stage and give it their all.</p>
            `);
            break;
        case 4:
            setEpisodeText(`
                <h2>Winner</h2>
                <p>🏆 <strong>${currentJudging.winner.name}</strong> wins the ${currentChallenge.toLowerCase()} challenge!</p>
            `);
            break;
        case 5:
            setEpisodeText(`
                <h2>High</h2>
                <p>High this week: <strong>${currentJudging.high.map(q => q.name).join(", ") || "None"}</strong></p>
            `);
            break;
        case 6:
            setEpisodeText(`
                <h2>Safe</h2>
                <p>Safe queens: <strong>${currentJudging.safe.map(q => q.name).join(", ") || "None"}</strong></p>
            `);
            break;
        case 7:
            setEpisodeText(`
                <h2>Low</h2>
                <p>Low this week: <strong>${currentJudging.low.map(q => q.name).join(", ") || "None"}</strong></p>
            `);
            break;
        case 8:
            currentBottom2 = currentJudging.bottom2;
            setEpisodeText(`
                <h2>Bottom 2</h2>
                <p>Bottom 2: <strong>${currentBottom2[0].name}</strong> vs <strong>${currentBottom2[1].name}</strong></p>
            `);
            break;
        case 9:
            currentLipSyncResult = lipSync(currentBottom2);
            setEpisodeText(`
                <h2>Lip Sync For Your Life</h2>
                <p>💄 <strong>${currentBottom2[0].name}</strong> vs <strong>${currentBottom2[1].name}</strong></p>
                <p>🎤 <strong>${currentLipSyncResult.winner.name}</strong> wins the lip sync!</p>
            `);
            break;
        case 10:
            const eliminated = currentLipSyncResult.eliminated;
            currentCast = eliminateFromCast(currentCast, eliminated);

            setEpisodeText(`
                <h2>Elimination</h2>
                <p>❌ <strong>${eliminated.name}</strong> has been eliminated.</p>
                <p>${currentCast.length > 1
                    ? `${currentCast.length} queens remain.`
                    : `We have a winner, baby!`}</p>
            `);
            break;
        case 11:
            if (currentCast.length <= 1) {
                setEpisodeText(`
                    <h2>Season Winner</h2>
                    <p>👑 <strong>${currentCast[0].name}</strong> is the winner of the season!</p>
                    <p>Refresh the page or reselect queens to start a new season.</p>
                `);
            } else {
                setEpisodeText(`
                    <h2>Next Episode</h2>
                    <p>Get ready for Episode ${episodeNumber + 1}…</p>
                `);
            }
            break;
        default:
            if (currentCast.length <= 1) {
                hideOverlay();
            } else {
                episodeNumber++;
                startEpisode();
            }
            return;
    }

    episodeStep++;
}

// Start button now launches the simulator
document.getElementById("start-btn").addEventListener("click", startSeason);

// Continue button advances steps
episodeContinueBtn.addEventListener("click", advanceEpisodeStep);
