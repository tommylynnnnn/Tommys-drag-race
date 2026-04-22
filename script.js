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
    },
    {
        name: "Discord Addams",
        img: "https://i.pinimg.com/736x/d8/09/50/d809509a600af933c994510af325f0d5.jpg",
        stats: { acting: 8, comedy: 8, improv: 8, dance: 9, design: 8, lipsync: 6 }
    },
    {
        name: "Kenya Pleaser",
        img: "https://i.pinimg.com/736x/67/1f/d8/671fd89dd140f71f27b4a50a83cf231d.jpg",
        stats: { acting: 10, comedy: 5, improv: 8, dance: 9, design: 7, lipsync: 10 }
    },
    {
        name: "Athena Dion",
        img: "https://i.pinimg.com/736x/0f/ce/92/0fce92d7db2363352a0980269f43d0ca.jpg",
        stats: { acting: 7, comedy: 9, improv: 8, dance: 6, design: 9, lipsync: 4 }
    },
    {
        name: "Ciara Myst",
        img: "https://i.pinimg.com/736x/f2/80/ac/f280ace351bbf9801cb9d9bc16903cad.jpg",
        stats: { acting: 9, comedy: 0, improv: 5, dance: 9, design: 11, lipsync: 6 }
    },
    {
        name: "Briar Blush",
        img: "https://i.pinimg.com/736x/3c/fa/55/3cfa55846aec77075d25b7525781468b.jpg",
        stats: { acting: 3, comedy: 0, improv: 2, dance: 9, design: 6, lipsync: 9 }
    },
    {
        name: "DD Fuego",
        img: "https://i.pinimg.com/736x/0a/ac/c2/0aacc2ebf2713b145299aea5e5bb9764.jpg",
        stats: { acting: 0, comedy: 0, improv: 0, dance: 3, design: 9, lipsync: 3 }
    },
    {
        name: "Mandy Mango",
        img: "https://i.pinimg.com/736x/36/f6/77/36f677727d9633de35235fbd86c9141b.jpg",
        stats: { acting: 3, comedy: 0, improv: 2, dance: 3, design: 6, lipsync: 7 }
    },
    {
        name: "Mia Starr",
        img: "https://i.pinimg.com/736x/6a/e1/ee/6ae1ee1d99d56d1f433898e32e7ee5c6.jpg",
        stats: { acting: 8, comedy: 5, improv: 7, dance: 12, design: 9, lipsync: 10 }
    },
    {
        name: "Vita VonTesse Starr",
        img: "https://i.pinimg.com/736x/f9/62/6a/f9626a898746975b563350c8f1bade97.jpg",
        stats: { acting: 5, comedy: 3, improv: 4, dance: 9, design: 14, lipsync: 5 }
    }

];

const ENTRANCE_LINES = {
    "Alaska": "HIEEEE",
    "Alyssa Edwards": "Girl, I am gagging",
    "Bob the Drag Queen": "I didn't come to make friends, I came to make cupcakes.",
    "Katya": "Давай cезон семь!",
    "Sasha Velour": "(loud, acted scream followed by fake coughing and posing)",
    "Bianca Del Rio": "Well, well, well! I hope you bitches are ready.",
    "Jinkx Monsoon": "You know, I can hear the cackling from down the street.",
    "Onya Nurve": "Well! It do take Nurve!",
    "Myki Meeks": "I'm Myki, but you, you can call me Myki.",
    "Darlene Mitchell": "She's corny!",
    "Nini Coco": "Gay!",
    "Jane Don't": "WAZZUP?!",
    "Juicy Love Dion": "The party princess of Miami and Mykonos is finally here. Yes, baby. The juice is loose."
    "Discord Addams": "Who's ready for a little chaos?"
    "Kenya Pleaser": "I have one thing to say: Kenya Pleaser? (moans)"
    "Athena Dion": "Honey, this is how you throw a party on Drag Race, bitch."
    "Ciara Myst": "Feeling scared yet? You should be."
    "Briar Blush": "WHY ARE YOU RECORDING ME!?"
    "DD Fuego": "Can I say the F-word? FUEGO!"
    "Mandy Mango": "Miss Nurse! Don't you know? A mango a day keeps the doctor away."
    "Mia Starr": "I'm repping for the big backs, and I came to eat."
    "Vita VonTesse Starr": "Baby it's easy to see, that I'm the key. You can question those other girls, but never Queen V"
};

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
let eliminationOrder = [];

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

function getScoreBasedRating(score, maxScore, minScore) {
    const range = maxScore - minScore;
    const normalized = (score - minScore) / range;

    if (normalized >= 0.85) return "Slayed";
    if (normalized >= 0.65) return "Good";
    if (normalized >= 0.45) return "Fine";
    if (normalized >= 0.25) return "Bad";
    return "Flopped";
}

function judgeQueens(cast, type) {
    const scored = cast.map(q => ({ queen: q, score: scoreQueen(q, type) }))
                       .sort((a, b) => b.score - a.score);

    let winner = scored.find(s => getWinCount(s.queen) < 4)?.queen || scored[0].queen;
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

    const q1Bottoms = getBottomCount(q1);
    const q2Bottoms = getBottomCount(q2);

    // AUTO-ELIM RULE
    if (q1Bottoms >= 3 && q2Bottoms < 3) {
        return { winner: q2, eliminated: q1 };
    }
    if (q2Bottoms >= 3 && q1Bottoms < 3) {
        return { winner: q1, eliminated: q2 };
    }

    // If BOTH have 3 bottoms, use stats normally
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
    eliminationOrder = []; // reset this too
    seasonQueens.forEach(q => trackRecord[q.name] = []);
}

function updateTrackRecordEpisode(j, bottom2, eliminated) {
    seasonQueens.forEach(q => {
        let p = "";

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
        let p = "";

        if (q.name === winner.name) p = "WINNER";
        else if (q.name === runnerUp.name) p = "RUNNER-UP";
        else if (q.name === cutQueen.name) p = "ELIM";

        trackRecord[q.name].push(p);
    });
}

function getLatestPlacement(q) {
    const rec = trackRecord[q.name];
    if (!rec || rec.length === 0) return "";
    return rec[rec.length - 1];
}

function getWinCount(q) {
    return trackRecord[q.name].filter(p => p === "WIN").length;
}

function getBottomCount(q) {
    return trackRecord[q.name].filter(p => p === "BTM2").length;
}

function sortQueensByPlacement(queens) {
    const order = ["WINNER", "RUNNER-UP", "WIN", "HIGH", "SAFE", "LOW", "BTM2", "ELIM", ""];

    // ACTIVE queens (not eliminated)
    const active = queens.filter(q => !eliminationOrder.includes(q.name));

    // ELIMINATED queens in the exact order they were eliminated
    const eliminated = eliminationOrder
        .map(name => queens.find(q => q.name === name))
        .filter(q => q); // remove nulls

    // Sort active queens normally
    const sortedActive = active.slice().sort((a, b) => {
        const pa = getLatestPlacement(a);
        const pb = getLatestPlacement(b);
        return order.indexOf(pa) - order.indexOf(pb);
    });

    // Return active queens first, then eliminated queens frozen in order
    return [...sortedActive, ...eliminated];
}

function renderTrackRecordCards() {
    const container = document.createElement("div");
    container.className = "track-record-container";

    const sortedQueens = sortQueensByPlacement(seasonQueens);

    sortedQueens.forEach(q => {
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
            if (episodeNumber === 1) {
                const lines = currentCast.map(q => `
                    <div class="entrance-line">
                        <img src="${q.img}" class="entrance-img">
                        <p><strong>${q.name}:</strong> ${ENTRANCE_LINES[q.name]}</p>
                    </div>
                `).join("");

                setEpisodeText(`
                    <h2>Episode 1</h2>
                    <h3>Entrance Lines</h3>
                    ${lines}
                `);
            } else {
                setEpisodeText(
                    `<h2>Episode ${episodeNumber}</h2><p>${currentCast.length} queens remain.</p>`,
                    currentCast
                );
            }
            break;

        case 1:
            setEpisodeText(
                `<h2>Maxi Challenge</h2><p>This week’s challenge is <strong>${currentChallenge}</strong>!</p>`,
                currentCast
            );
            break;

        case 2:
    // JUDGING HAPPENS HERE
    currentJudging = judgeQueens(currentCast, currentChallenge);

    // SCORE EACH QUEEN
    const scored = currentCast
        .map(q => ({ queen: q, score: scoreQueen(q, currentChallenge) }))
        .sort((a, b) => b.score - a.score);

    const maxScore = scored[0].score;
    const minScore = scored[scored.length - 1].score;

    // BUILD SUMMARY HTML
    const summaryHTML = scored.map(s => `
        <div class="perf-summary">
            <img src="${s.queen.img}" class="perf-summary-img">
            <p><strong>${s.queen.name}</strong> — ${getScoreBasedRating(s.score, maxScore, minScore)}</p>
        </div>
    `).join("");

    setEpisodeText(`
        <h2>Challenge Results</h2>
        ${summaryHTML}
    `);

    break;

        case 3:
            setEpisodeText(
                `<h2>Winner</h2><p>🏆 <strong>${currentJudging.winner.name}</strong> wins!</p>`,
                [currentJudging.winner]
            );
            break;

        case 4:
            setEpisodeText(
                `<h2>High</h2><p>${currentJudging.high.map(q => q.name).join(", ") || "None"}</p>`,
                currentJudging.high
            );
            break;

        case 5:
            setEpisodeText(
                `<h2>Safe</h2><p>${currentJudging.safe.map(q => q.name).join(", ") || "None"}</p>`,
                currentJudging.safe
            );
            break;

        case 6:
            setEpisodeText(
                `<h2>Low</h2><p>${currentJudging.low.map(q => q.name).join(", ") || "None"}</p>`,
                currentJudging.low
            );
            break;

        case 7:
            currentBottom2 = currentJudging.bottom2;
            setEpisodeText(
                `<h2>Bottom 2</h2><p>${currentBottom2[0].name} vs ${currentBottom2[1].name}</p>`,
                currentBottom2
            );
            break;

        case 8:
    currentLipSyncResult = lipSync(currentBottom2);
    setEpisodeText(`
        <h2>Lip Sync For Your Life</h2>
        <p>${currentBottom2[0].name} vs ${currentBottom2[1].name}</p>
    `, currentBottom2);
    break;

        case 9:
            const eliminated = currentLipSyncResult.eliminated;
            currentCast = eliminateFromCast(currentCast, eliminated);
            eliminationOrder.unshift(eliminated.name);

            updateTrackRecordEpisode(currentJudging, currentBottom2, eliminated);

            setEpisodeText(`
                <h2>Elimination</h2>
                <p>❌ <strong>${eliminated.name}</strong> has been eliminated.</p>
                <p>${currentCast.length} queens remain.</p>
            `, [eliminated]);
            break;

        case 10:
            setEpisodeText(`<h2>Track Record</h2><p>Here is the track record so far:</p>`);
            renderTrackRecordCards();
            break;

        case 11:
            if (currentCast.length <= 1) {
                location.reload();
                return;
            } else {
                setEpisodeText(
                    `<h2>Next Episode</h2><p>Get ready for Episode ${episodeNumber + 1}…</p>`,
                    currentCast
                );
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
            eliminationOrder.unshift(finaleCutQueen.name);

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

